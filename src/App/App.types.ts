export interface Image {
  id: string;
  urls: {
    small: string;
    regular: string;
  };
  slug?: string;
}

export interface loadMoreBtnProp {
  onLoadMore: () => void;
}

export interface ImageModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  imageUrl: string;
}

export interface ImageGalleryProps {
  items: Image[];
  onImageClick: (imageUrl: string) => void;
}

export interface ImageCardProps {
  item: Image;
  onClick: (imageUrl: string) => void;
}

export interface SearchBarOnSubmit {
  onSubmit: (query: string) => void;
}
