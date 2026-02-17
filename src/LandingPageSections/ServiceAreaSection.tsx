import { motion } from "framer-motion";
import {
  fadeInLeft,
  fadeInUp,
  scaleIn,
  staggerContainer,
  staggerItem,
  viewportConfig,
} from "../utils/animations";
import ServiceMap from "../images/longmont-to-castle-rock-map.png";
import BBBLogo from "../images/logos/bbb-logo.png";

const cities = [
  "Longmont",
  "Erie",
  "Broomfield",
  "Westminster",
  "Thornton",
  "Northglenn",
  "Federal Heights",
  "Commerce City",
  "Denver",
  "Aurora",
  "Centennial",
  "Parker",
  "Lone Tree",
  "Highlands Ranch",
  "Castle Rock",
];

const ServiceAreaSection = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row bg-white text-brand-darkGray px-6 sm:px-10 md:px-16 lg:px-24 py-12 gap-8">
        <div className="flex flex-col sm:w-1/2">
          <div className="mb-2 text-center">
            <h1 className="text-3xl font-bold mt-8 sm:mt-4">
              Proudly Serving
            </h1>
            <div className="h-[2px] w-24 mx-auto bg-brand-gradient mt-2" />
          </div>
          <div className="w-full p-4 sm:gap-10 flex justify-center items-center">
            <motion.img
              src={ServiceMap}
              alt="Service Map"
              className="max-h-80 sm:max-h-[28rem] drop-shadow-xl w-auto rounded-xl mr-8 sm:mr-0"
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            />
            <motion.ul
              className="list-disc ml-4 sm:ml-8 text-brand-darkGray"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
            >
              {cities.map((city) => (
                <motion.li key={city} variants={staggerItem}>
                  {city}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
        <div className="sm:mt-8 md:mt-12 sm:flex flex-col justify-center items-center sm:w-1/2">
          <motion.img
            src={BBBLogo}
            alt="BBB"
            className="h-48 sm:h-56 md:h-64 w-auto rounded-xl mx-auto"
            variants={scaleIn}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          />
          <motion.h2
            className="text-3xl sm:w-3/4 text-red-600 font-bold text-center mt-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            Fully Licensed & Insured in the State of Colorado!
          </motion.h2>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaSection;
