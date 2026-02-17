import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
} from "@nextui-org/react";
import emailjs from "emailjs-com";

type ContactFormModalProps = {
  buttonText: string;
  serviceId: string;
  templateId: string;
  userId: string;
};

const ContactFormModal: React.FC<ContactFormModalProps> = ({
  buttonText,
  serviceId,
  templateId,
  userId,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmit = async () => {
    try {
      const formData = {
        firstName: (document.getElementById("firstName") as HTMLInputElement)
          .value,
        lastName: (document.getElementById("lastName") as HTMLInputElement)
          .value,
        email: (document.getElementById("email") as HTMLInputElement).value,
        phoneNumber: (
          document.getElementById("phoneNumber") as HTMLInputElement
        ).value,
        message: (document.getElementById("message") as HTMLInputElement).value,
      };

      const emailData = {
        to_name: "NH Services",
        from_name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        message: formData.message,
      };

      await emailjs.send(serviceId, templateId, emailData, userId);

      alert("Email sent successfully!");
      onClose();
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col gap-2 p-4 drop-shadow-xl">
      <Button
        className="max-w-fit text-lg m-4 text-white font-semibold p-8 drop-shadow-lg bg-brand-gradient"
        style={{ backgroundImage: "linear-gradient(to right, #54a0d7, #e75909)" }}
        onPress={onOpen}
      >
        {buttonText}
      </Button>
      <Modal isOpen={isOpen} placement="auto" onClose={onClose}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Contact Us</ModalHeader>
          <ModalBody>
            <Input
              id="firstName"
              isRequired
              fullWidth
              size="sm"
              label="First Name"
            />
            <Input
              id="lastName"
              isRequired
              fullWidth
              size="sm"
              label="Last Name"
            />
            <Input
              id="email"
              isRequired
              fullWidth
              size="sm"
              label="Email"
              type="email"
            />
            <Input
              id="phoneNumber"
              isRequired
              fullWidth
              size="sm"
              label="Phone Number"
              type="tel"
            />
            <Input
              id="message"
              isRequired
              fullWidth
              size="lg"
              label="Message"
            />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onPress={handleSubmit}>
              Send
            </Button>
            <Button color="secondary" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ContactFormModal;
