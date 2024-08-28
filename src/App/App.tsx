import SearchBar from "../components/SearchBar/SearchBar";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import fetchPhotos from "../services/api";
import Loader from "../components/Loader/Loader";
import LoadMoreBtn from "../components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../components/ImageModal/ImageModal";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import { Image } from "./App.types";

const App: React.FC = () => {
  const [results, setResults] = useState<Image[]>([]);
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [currentImg, setCurrentImg] = useState<string>("");

  const openModal = (imageUrl: string): void => {
    setCurrentImg(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
    setCurrentImg("");
  };

  useEffect(() => {
    const getPhotos = async (): Promise<void> => {
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

  const handleSetQuery = (query: string): void => {
    setQuery(query);
    setResults([]);
    setPage(1);
  };

  const handleLoadMore = (): void => {
    setPage((prev) => prev + 1);
  };

  return (
    <>
      <SearchBar onSubmit={handleSetQuery} />
      {isError && <ErrorMessage />}
      <ImageGallery items={results} onImageClick={openModal} />
      {isLoading && <Loader />}
      {total > page && !isLoading && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
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
