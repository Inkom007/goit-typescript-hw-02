import { Field, Formik, Form } from "formik";

const SearchBar = ({ onSubmit }) => {
  const initialValues = {
    query: "",
  };

  return (
    <header>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
