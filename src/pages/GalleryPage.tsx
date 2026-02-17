import { useState } from "react";
import Footer from "../components/Footer/Footer";
import NHServicesLogo from "../images/logos/nhservices-logo.png";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import GalleryImage1 from "../images/gallery/gallery1.jpeg";
import GalleryImage2 from "../images/gallery/gallery2.jpeg";
import GalleryImage3 from "../images/gallery/gallery3.jpg";
import GalleryImage4 from "../images/gallery/gallery4.jpg";
import GalleryImage5 from "../images/gallery/gallery5.jpg";
import GalleryImage6 from "../images/gallery/gallery6.jpg";
import GalleryImage7 from "../images/gallery/gallery7.jpg";
import GalleryImage8 from "../images/gallery/gallery8.jpg";
import GalleryImage9 from "../images/gallery/gallery9.jpg";
import GalleryImage10 from "../images/gallery/gallery10.jpg";
import GalleryImage11 from "../images/gallery/gallery11.jpg";
import GalleryImage12 from "../images/gallery/gallery12.jpg";
import GalleryImage13 from "../images/gallery/gallery13.jpg";
import GalleryImage14 from "../images/gallery/gallery14.jpg";
import GalleryImage15 from "../images/gallery/gallery15.jpg";
import GalleryImage16 from "../images/gallery/gallery16.jpg";
import GalleryImage17 from "../images/gallery/gallery17.jpg";
import GalleryImage18 from "../images/gallery/gallery18.jpg";
import GalleryImage19 from "../images/gallery/gallery19.jpg";
import GalleryImage20 from "../images/gallery/gallery20.jpg";
import GalleryImage21 from "../images/gallery/gallery21.jpg";
import GalleryImage22 from "../images/gallery/IMG_5627.jpeg";
import GalleryImage23 from "../images/gallery/IMG_5665.jpeg";
import GalleryImage24 from "../images/gallery/IMG_5786.jpeg";
import GalleryImage25 from "../images/gallery/IMG_5929.jpeg";
import GalleryImage26 from "../images/gallery/IMG_6101.jpeg";
import GalleryImage27 from "../images/gallery/IMG_6199.jpeg";
import GalleryImage28 from "../images/gallery/IMG_6201.jpeg";
import GalleryImage29 from "../images/gallery/IMG_6714.jpeg";
import GalleryImage30 from "../images/gallery/IMG_6737.jpeg";
import GalleryImage31 from "../images/gallery/IMG_6922.jpeg";
import GalleryImage32 from "../images/gallery/IMG_7071.jpeg";
import GalleryImage33 from "../images/gallery/IMG_7465.jpeg";
import GalleryImage34 from "../images/gallery/IMG_7467.jpeg";
import GalleryImage35 from "../images/gallery/IMG_7468.jpeg";
import GalleryImage36 from "../images/gallery/IMG_7469.jpeg";
import GalleryImage37 from "../images/gallery/IMG_7686.jpeg";

const imageArray: string[] = [
  GalleryImage1,
  GalleryImage2,
  GalleryImage3,
  GalleryImage4,
  GalleryImage5,
  GalleryImage6,
  GalleryImage7,
  GalleryImage8,
  GalleryImage9,
  GalleryImage10,
  GalleryImage11,
  GalleryImage12,
  GalleryImage13,
  GalleryImage14,
  GalleryImage15,
  GalleryImage16,
  GalleryImage17,
  GalleryImage18,
  GalleryImage19,
  GalleryImage20,
  GalleryImage21,
  GalleryImage22,
  GalleryImage23,
  GalleryImage24,
  GalleryImage25,
  GalleryImage26,
  GalleryImage27,
  GalleryImage28,
  GalleryImage29,
  GalleryImage30,
  GalleryImage31,
  GalleryImage32,
  GalleryImage33,
  GalleryImage34,
  GalleryImage35,
  GalleryImage36,
  GalleryImage37,
];

const GalleryPage: React.FC = () => {
  const [visibleImages, setVisibleImages] = useState(8);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const imagesPerLoad = 8;

  const loadMoreImages = () => {
    setVisibleImages((prevVisibleImages) =>
      Math.min(prevVisibleImages + imagesPerLoad, imageArray.length)
    );
  };

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="mb-4 mt-4">
        <img
          src={NHServicesLogo}
          alt="NH Services"
          className="h-36 w-auto mx-auto"
        />
      </div>
      <h2 className="text-center font-bold text-4xl mb-4">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-gray-300 rounded-xl gap-4 justify-center p-2">
        {imageArray.slice(0, visibleImages).map((imageUrl, index) => (
          <div key={index} className="mb-4">
            <div
              onClick={() => handleImageClick(imageUrl)}
              className="cursor-pointer"
            >
              <img
                src={imageUrl}
                alt={`Gallery ${index + 1}`}
                className="w-full aspect-[4/3] object-cover rounded-xl drop-shadow-xl p-2 mx-auto transition-transform transform hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
      {visibleImages < imageArray.length && (
        <div className="text-center my-4">
          <Button
            className="w-1/2 sm:w-1/4 text-white font-semibold h-12 shadow-lg text-lg bg-brand-gradient"
            style={{ backgroundImage: "linear-gradient(to right, #54a0d7, #e75909)" }}
            onClick={loadMoreImages}
          >
            Load More
          </Button>
        </div>
      )}
      <div className="mt-auto">
        <Footer />
      </div>
      <Modal isOpen={modalIsOpen} placement="center" onClose={closeModal}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            Gallery Image
          </ModalHeader>
          <ModalBody>
            {selectedImage && (
              <img
                src={selectedImage}
                alt="Gallery Image"
                className="w-full h-auto"
              />
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default GalleryPage;
