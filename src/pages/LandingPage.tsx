import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  fadeInUp,
  scaleIn,
  staggerContainer,
  staggerItem,
  viewportConfig,
} from "../utils/animations";
import NHServicesLogo from "../images/logos/nhservices-logo.png";
import VanPic from "../images/van-pic.png";
import MastercardLogo from "../images/logos/mastercard-logo.png";
import VisaLogo from "../images/logos/visa-logo.png";
import AmexLogo from "../images/logos/amex-logo.png";
import DiscoverLogo from "../images/logos/discover-logo.png";
import PayPalLogo from "../images/logos/paypal-logo.png";
import ApplePayLogo from "../images/logos/applepay-logo.png";
import TestimonialForm from "../components/Testimonials/TestimonialForm";
import FAQAccordion from "../components/Accordions/FAQAccordion";
import Footer from "../components/Footer/Footer";
import ContactFormModal from "../components/Modals/ContactFormModal";
import AboutUsSection from "../LandingPageSections/AboutUsSection";
import ServiceAreaSection from "../LandingPageSections/ServiceAreaSection";
import ServicesSection from "../LandingPageSections/ServicesSection";
import { Button } from "@nextui-org/react";
import SynchronyLogo from "../images/logos/synchrony-logo.png";

const paymentLogos = [
  { src: MastercardLogo, alt: "Mastercard" },
  { src: VisaLogo, alt: "Visa" },
  { src: AmexLogo, alt: "American Express" },
  { src: DiscoverLogo, alt: "Discover" },
  { src: PayPalLogo, alt: "PayPal" },
  { src: ApplePayLogo, alt: "Apple Pay" },
];

const LandingPage = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="w-full">
      {/* Utility Bar — Payment & Financing */}
      <div className="bg-gray-50 border-b border-gray-200 py-3 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Payment Logos */}
          <motion.div
            className="flex items-center gap-2 flex-wrap justify-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <span className="text-sm text-gray-600 font-medium mr-1">
              We Accept:
            </span>
            {paymentLogos.map((logo) => (
              <motion.img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="h-7 sm:h-8 w-auto"
                variants={staggerItem}
              />
            ))}
          </motion.div>
          {/* Financing */}
          <div className="flex items-center gap-3">
            <Button
              className="h-9 sm:h-10 text-[#3B3D44] font-semibold text-sm
                drop-shadow-md bg-brand-yellow hover:bg-[#3B3D44] hover:text-brand-yellow
                active:bg-brand-yellow border-1 border-black hover:border-brand-yellow
                rounded-lg px-4"
            >
              <a
                href="https://www.synchrony.com/mmc/M9229374400"
                target="_blank"
                rel="noreferrer"
              >
                Financing Available!
              </a>
            </Button>
            <img
              src={SynchronyLogo}
              alt="Synchrony Financing"
              className="h-7 sm:h-9 w-auto"
            />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        {/* Hero Background — Van Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={VanPic}
            alt="NH Services Van"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center py-16 sm:py-20 md:py-28 lg:py-32 px-6">
          <Link to="/" className="nav-link">
            <motion.img
              src={NHServicesLogo}
              alt="NH Services"
              className="h-28 sm:h-36 md:h-44 lg:h-52 w-auto drop-shadow-lg"
              variants={scaleIn}
              initial="hidden"
              animate="visible"
            />
          </Link>
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-brand-darkGray mt-6 sm:mt-8 drop-shadow-sm max-w-4xl"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.3 }}
          >
            Proudly Serving The Denver Metro Area Since 2010
          </motion.h1>
          <motion.div
            className="h-[3px] w-32 sm:w-40 bg-brand-gradient mt-4 rounded-full"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.4 }}
          />
          <motion.div
            className="mt-6 sm:mt-8"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.5 }}
          >
            <ContactFormModal
              buttonText="Get An Estimate!"
              serviceId={import.meta.env.VITE_APP_EMAILJS_SERVICE_ID}
              templateId={import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID}
              userId={import.meta.env.VITE_APP_EMAILJS_USER_ID}
            />
          </motion.div>
        </div>

      </section>

      {/* Divider */}
      <div className="section-divider" />
      <div id="aboutus">
        <AboutUsSection />
      </div>
      {/* Divider */}
      <div className="section-divider" />
      <div id="services">
        <ServicesSection />
      </div>
      <div className="section-divider" />
      <div
        id="testimonials"
        className="bg-brand-lightGray text-brand-darkGray py-12 px-6 sm:px-10 md:px-16 lg:px-24"
      >
        <TestimonialForm />
      </div>
      <div className="section-divider" />
      <div id="servicearea">
        <ServiceAreaSection />
      </div>
      <div className="section-divider" />
      <div className="bg-white text-brand-darkGray py-12 px-6 sm:px-10 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto">
          <FAQAccordion />
        </div>
      </div>
      <div className="section-divider" />
      <Footer />
    </div>
  );
};

export default LandingPage;
