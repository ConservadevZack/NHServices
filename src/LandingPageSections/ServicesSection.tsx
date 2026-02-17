import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
  viewportConfig,
} from "../utils/animations";
import ServiceAccordion from "../components/Accordions/ServiceAccordion";
import RUUDLogo from "../images/logos/ruud-logo.png";
import RemeHaloLogo from "../images/logos/reme-halo-logo.png";
import NavienLogo from "../images/logos/Navien_Logo.png";
import HoneywellLogo from "../images/logos/honeywell-logo.png";
import AprilAireLogo from "../images/logos/aprilaire-logo.png";
import FujitsuLogo from "../images/logos/hd-fujitsu-logo.png";

const brandLogos = [
  { src: RemeHaloLogo, alt: "Reme Halo", className: "" },
  { src: NavienLogo, alt: "Navien", className: "" },
  { src: HoneywellLogo, alt: "Honeywell", className: "" },
  { src: AprilAireLogo, alt: "AprilAire", className: "" },
  { src: FujitsuLogo, alt: "Fujitsu", className: "h-16 sm:h-20 md:h-24 max-w-[180px]" },
];

const ServicesSection = () => {
  return (
    <div className="bg-white text-brand-darkGray">
      {/* Services Offered & Trusted Brands — Two Column Layout */}
      <div className="flex flex-col lg:flex-row px-6 sm:px-10 md:px-16 lg:px-24 py-12 gap-8 lg:gap-12">
        {/* Services Accordion — Left Column */}
        <motion.div
          className="w-full lg:w-1/2"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          style={{ overflow: "visible" }}
        >
          <ServiceAccordion />
        </motion.div>

        {/* Trusted Brands — Right Column */}
        <div className="w-full lg:w-1/2">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-10">
            {/* Authorized Dealer */}
            <motion.div
              className="flex items-center justify-center gap-4 mb-8"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              <span className="text-lg sm:text-2xl font-bold">
                Authorized Dealer of:
              </span>
              <img
                src={RUUDLogo}
                alt="RUUD"
                className="h-14 sm:h-16 w-auto"
              />
            </motion.div>

            {/* Trusted Brands Title */}
            <div className="text-center mb-8">
              <div className="text-xl sm:text-2xl font-bold mb-2">
                Trusted Brands:
              </div>
              <div className="h-[2px] w-24 mx-auto bg-brand-gradient" />
            </div>

            {/* Brand Logos Grid */}
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 place-items-center"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {brandLogos.map((logo) => (
                <motion.div
                  key={logo.alt}
                  className="flex items-center justify-center bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow w-full"
                  variants={staggerItem}
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={logo.className || "h-12 sm:h-14 md:h-16 w-auto max-w-[160px] object-contain"}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
