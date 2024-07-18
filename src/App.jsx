import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import fetchPhotos from "./services/api";

const App = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getPhotos = async () => {
      try {
        const response = await fetchPhotos();
        setPhotos(response.photos);
      } catch (error) {
        console.log(error);
      }
    };
    getPhotos();
  }, []);

  return (
    <>
      <SearchBar />
      <ImageGallery items={photos} />
      <Toaster />
    </>
  );
};

export default App;
