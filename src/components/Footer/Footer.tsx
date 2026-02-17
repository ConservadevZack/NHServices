import React from "react";
import { motion } from "framer-motion";
import { fadeInUp, viewportConfig } from "../../utils/animations";
import SocialMediaQRCode from "../../images/NHServices_QR_Code.svg";
import NHServicesLogo from "../../images/logos/nhservices-logo.png";
import FacebookIcon from "../../images/logos/facebook-icon.png";
import XIcon from "../../images/logos/x-icon.png";
import InstagramIcon from "../../images/logos/instagram-icon.png";
import { Button } from "@nextui-org/react";

const socialMediaLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=100064849591688",
    icon: FacebookIcon,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/nhservicesllc",
    icon: XIcon,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/nh_services_llc",
    icon: InstagramIcon,
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-darkGray text-white py-8 px-4 sm:px-8">
      <motion.div
        className="flex flex-col sm:flex-row justify-between items-center sm:items-start text-center sm:text-left px-6 sm:px-10 md:px-16 lg:px-24"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
      >
        {/* Left Column — Business Info */}
        <div className="flex-1 w-full sm:w-auto">
          <div className="text-lg">NH Services, LLC.</div>
          <div className="mt-4">Monday - Friday</div>
          <div>8:00AM - 5:00PM</div>
          <div className="mt-4">7310 W. 52nd Ave. A-146</div>
          <div>Arvada, CO 80002</div>
        </div>

        {/* Center Column — QR & Socials */}
        <div className="flex flex-col items-center justify-center flex-1 w-full sm:w-auto mt-4 sm:mt-0">
          <Button className="w-32 h-32 sm:w-40 sm:h-40 relative overflow-hidden p-0 border-0 shadow-xl hover:shadow-2xl transition-shadow mt-4">
            <a
              href="https://myqrcode.com/qr/be124a71/view"
              target="_blank"
              className="block w-full h-full"
            >
              <img
                src={SocialMediaQRCode}
                alt="Social Media QR Code"
                className="w-full h-full object-cover"
              />
            </a>
          </Button>
          <span className="text-xl mt-2 mb-4">(Click or Scan!)</span>
          <div className="flex space-x-4 drop-shadow-lg mt-4 mb-4">
            {socialMediaLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={link.icon}
                  alt={link.name}
                  className="w-10 h-10 hover:scale-110 transition-transform"
                />
              </a>
            ))}
          </div>
          <span>
            Built with love by{" "}
            <a
              href="https://brainsmithy.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold hover:text-brand-blue transition-colors"
            >
              Brainsmithy
            </a>
          </span>
        </div>

        {/* Right Column — Logo, Phone, Email */}
        <div className="flex flex-col items-center sm:items-end flex-1 w-full sm:w-auto mt-4 sm:mt-0">
          <div className="bg-white rounded-lg drop-shadow-lg p-2">
            <img
              src={NHServicesLogo}
              alt="NH Services"
              className="w-24 h-auto"
            />
          </div>
          <a
            href="tel:303-905-1470"
            className="underline mt-4 text-lg font-semibold"
          >
            303-905-1470
          </a>
          <a
            href="mailto:nhserviceshvac@gmail.com"
            className="underline mt-2"
          >
            nhserviceshvac@gmail.com
          </a>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
