import { Image } from "../../App/App.types";
import { ImageCardProps } from "../../App/App.types";

const ImageCard: React.FC<ImageCardProps> = ({ item, onClick }) => {
  return (
    <div>
      <img
        src={item.urls.small}
        alt={item.slug}
        onClick={() => onClick(item.urls.regular)}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default ImageCard;
