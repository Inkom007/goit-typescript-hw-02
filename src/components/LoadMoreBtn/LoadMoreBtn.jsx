import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ setPage }) => {
  return (
    <div>
      <button className={s.button} onClick={() => setPage((prev) => prev + 1)}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
