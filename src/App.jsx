import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import fetchPhotos from "./services/api";
import Loader from "./components/Loader/Loader";
import { ErrorMessage } from "formik";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState("");

  const openModal = (imageUrl) => {
    setCurrentImg(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImg("");
  };

  useEffect(() => {
    const getPhotos = async () => {
      if (!query) {
        return;
      }
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetchPhotos(query, page, 5);
        setResults((prev) => [...prev, ...response.results]);
        setTotal(response.total_pages);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getPhotos();
  }, [query, page]);

  const handleSetQuery = (query) => {
    setQuery(query);
    setResults([]);
    setPage(1);
  };

  const handleSubmit = (values, actions) => {
    handleSetQuery(values.query);
    actions.resetForm();
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {isError && <ErrorMessage />}
      <ImageGallery items={results} onImageClick={openModal} />
      {isLoading && <Loader />}
      {total > page && !isLoading && <LoadMoreBtn setPage={setPage} />}
      <Toaster />
      <ImageModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        imageUrl={currentImg}
      />
    </>
  );
};

export default App;
