import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "../../utils/animations";
import AccordionPanel from "./AccordionPanel";

const faqItems = [
  {
    title: "How long does a furnace or air conditioner last?",
    content: (
      <span className="text-brand-darkGray font-semibold">
        Average life expectancy of a furnace or air conditioner is 15-18 years.
      </span>
    ),
  },
  {
    title: "How often should we do maintenance on our equipment?",
    content: (
      <span className="text-brand-darkGray font-semibold">Every year.</span>
    ),
  },
  {
    title: "How often should we change the air filter?",
    content: (
      <span className="text-brand-darkGray font-semibold">
        Every 3 months or as needed.
      </span>
    ),
  },
  {
    title: "Should we have the air ducts cleaned?",
    content: (
      <span className="text-brand-darkGray font-semibold">
        Yes, every 5-8 years.
      </span>
    ),
  },
  {
    title: "Are digital thermostats more energy efficient?",
    content: (
      <span className="text-brand-darkGray font-semibold">
        Yes, they are more accurate and only run a selected amount of cycles per
        hour to improve efficiency.
      </span>
    ),
  },
];

const FAQAccordion = () => {
  return (
    <motion.div
      className="mt-4"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      style={{ overflow: "visible" }}
    >
      <div className="text-2xl sm:text-3xl text-center mb-2 font-bold text-brand-darkGray">
        F.A.Q
      </div>
      <div className="h-[2px] w-24 mx-auto bg-brand-gradient mb-6" />
      <AccordionPanel items={faqItems} />
    </motion.div>
  );
};

export default FAQAccordion;
