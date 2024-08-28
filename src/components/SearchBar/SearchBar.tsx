import { Field, Formik, Form, FormikHelpers } from "formik";
import toast from "react-hot-toast";
import s from "./SearchBar.module.css";
import { SearchBarOnSubmit } from "../../App/App.types";

const SearchBar: React.FC<SearchBarOnSubmit> = ({ onSubmit }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (
    values: { query: string },
    actions: FormikHelpers<{ query: string }>
  ) => {
    if (!values.query.trim()) {
      toast.error("Please, enter a text to search for images.");
      return;
    }
    onSubmit(values.query);
    actions.resetForm();
  };

  return (
    <header>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field
            className={s.input}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={s.button} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
