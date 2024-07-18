import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import fetchPhotos from "./services/api";
import Loader from "./components/Loader/Loader";
import { ErrorMessage } from "formik";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

const App = () => {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("cat");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);

  const handleSetQuery = (query) => {
    setQuery(query);
    setResults([]);
    setPage(0);
  };

  const handleSubmit = (values) => {
    handleSetQuery(values.query);
  };

  useEffect(() => {
    const getPhotos = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        const response = await fetchPhotos(query, page);
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

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {isError && <ErrorMessage />}
      <ImageGallery items={results} />
      {isLoading && <Loader />}
      {total > page && !isLoading && <LoadMoreBtn setPage={setPage} />}
      <Toaster />
    </>
  );
};

export default App;
