import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "../../utils/animations";
import { Button, Input } from "@nextui-org/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Testimonial {
  _id: string;
  firstName: string;
  lastName: string;
  message: string;
  rating: number;
}

interface StarRatingProps {
  value: number;
  onClick: (value: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ value, onClick }) => {
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex space-x-2">
      {stars.map((star) => (
        <button key={star} type="button" onClick={() => onClick(star)}>
          {star <= value ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-yellow-500 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-gray-300"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          )}
        </button>
      ))}
    </div>
  );
};

const DisplayStars: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill={star <= rating ? "#FBBF24" : "#D1D5DB"}
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </div>
  );
};

const TestimonialForm: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [fetchError, setFetchError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch(
          "/.netlify/functions/getTestimonials"
        );

        if (response.ok) {
          const data = await response.json();
          setTestimonials(data);
        } else {
          throw new Error("Failed to fetch testimonials");
        }
      } catch (error) {
        console.error("Error:", error);
        setFetchError("Unable to load reviews right now. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !lastName || !message || rating === 0) {
      alert("All fields are required for submission!");
      return;
    }

    const newTestimonial = {
      firstName,
      lastName,
      message,
      rating,
    };

    try {
      const response = await fetch(
        "/.netlify/functions/addTestimonial",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newTestimonial),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setTestimonials([...testimonials, data]);
        setFirstName("");
        setLastName("");
        setMessage("");
        setRating(0);
      } else {
        throw new Error("Failed to add testimonial");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const carouselSettings = {
    dots: true,
    infinite: testimonials.length > 1,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: testimonials.length > 1,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const renderTestimonials = () => {
    if (isLoading) {
      return (
        <div className="text-center text-brand-darkGray text-lg font-semibold py-8">
          Loading reviews...
        </div>
      );
    }

    if (fetchError) {
      return (
        <div className="text-center py-8 px-4">
          <p className="text-red-600 font-semibold text-lg">{fetchError}</p>
        </div>
      );
    }

    if (testimonials.length === 0) {
      return (
        <div className="text-center py-8 px-4">
          <p className="text-brand-darkGray font-semibold text-lg">
            No reviews yet &mdash; be the first!
          </p>
        </div>
      );
    }

    return (
      <Slider {...carouselSettings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial._id} className="px-3 py-2">
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 sm:p-8">
              <DisplayStars rating={testimonial.rating} />
              <p className="mt-4 text-gray-700 italic leading-relaxed text-base sm:text-lg">
                &ldquo;{testimonial.message}&rdquo;
              </p>
              <p className="mt-4 font-bold text-brand-darkGray">
                &mdash; {testimonial.firstName} {testimonial.lastName}
              </p>
            </div>
          </div>
        ))}
      </Slider>
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Section Header */}
      <motion.div
        className="text-center mb-10"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-darkGray">
          What Our Customers Say
        </h2>
        <div className="h-[3px] w-32 mx-auto bg-brand-gradient mt-3 rounded-full" />
      </motion.div>

      {/* Testimonial Carousel */}
      <motion.div
        className="mb-12"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        {renderTestimonials()}
      </motion.div>

      {/* Review Form */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <form
          className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8"
          onSubmit={handleFormSubmit}
        >
          <h3 className="text-xl font-bold text-brand-darkGray text-center mb-6">
            Leave Us a Review!
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            <Input
              className="drop-shadow-sm"
              fullWidth
              color="primary"
              size="sm"
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Input
              className="drop-shadow-sm"
              fullWidth
              color="primary"
              size="sm"
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <Input
              className="drop-shadow-sm"
              fullWidth
              color="primary"
              size="lg"
              label="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={300}
            />
          </div>
          <div className="flex items-center justify-center gap-2 mb-6">
            <label className="text-brand-darkGray font-semibold">Rate Us:</label>
            <StarRating value={rating} onClick={setRating} />
          </div>
          <Button
            className="w-full h-12 drop-shadow-lg text-md text-white font-semibold"
            style={{ backgroundImage: "linear-gradient(to right, #54a0d7, #e75909)" }}
            type="submit"
            color="primary"
          >
            Submit Review
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default TestimonialForm;
