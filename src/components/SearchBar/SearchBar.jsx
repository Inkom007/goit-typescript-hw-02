import { Formik, Form, Field } from "formik";

const SearchBar = ({ onSubmit }) => {
  const initialValues = {
    query: "",
  };

  return (
    <header>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field
            name="query"
            type="text"
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
