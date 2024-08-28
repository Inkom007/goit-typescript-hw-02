import Modal from "react-modal";
import s from "./ImageModal.module.css";
import { ImageModalProps } from "../../App/App.types";

Modal.setAppElement("#root");

const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onRequestClose,
  imageUrl,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      className={s.modal}
    >
      <div>
        <img src={imageUrl} />
      </div>
    </Modal>
  );
};

export default ImageModal;
