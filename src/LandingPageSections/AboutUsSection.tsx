import { motion } from "framer-motion";
import { fadeInLeft, fadeInRight, viewportConfig } from "../utils/animations";
import AboutUsImage from "../images/gallery/gallery1.jpeg";

const AboutUsSection = () => {
  return (
    <div className="flex flex-col sm:flex-row bg-brand-lightGray text-brand-darkGray py-12 px-6 sm:px-10 md:px-16 lg:px-24 gap-8 items-center">
      {/* About Us Image */}
      <motion.div
        className="w-full sm:w-[45%] flex justify-center"
        variants={fadeInLeft}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <img
          src={AboutUsImage}
          alt="NH Services team"
          className="max-w-sm w-full rounded-2xl shadow-xl border-l-4 border-brand-blue object-cover"
        />
      </motion.div>
      {/* About Us Content */}
      <motion.div
        className="w-full sm:w-[55%] text-md sm:text-lg"
        variants={fadeInRight}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center sm:text-left mb-2">
          About Us
        </h2>
        <div className="h-[3px] w-24 mx-auto sm:mx-0 bg-brand-gradient mb-6 rounded-full" />
        <div className="space-y-4 leading-relaxed">
          <p>
            We're a local, family-run business with over 29 years of hands-on
            experience. When it comes to your repairs or installations, we've
            got your back!
          </p>
          <p>
            With NH Services, it's all about you. We take the time to listen
            and understand your needs, ensuring we offer the best solutions
            tailored just for you. No pushy sales tactics here – our team is
            focused on delivering honest, reliable service without any hidden
            agendas.
          </p>
          <p>
            Plus, our technicians? They're not in it for the commission.
            They're here because they genuinely care about doing a great job
            for you. And as for pricing? We keep it fair and transparent,
            because we believe everyone deserves quality service at a
            reasonable price.
          </p>
          <p>
            So, if you're looking for a team you can trust to get the job done
            right, look no further. We're here to help, every step of the way!
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUsSection;
