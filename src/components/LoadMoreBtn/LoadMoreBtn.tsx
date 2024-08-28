import s from "./LoadMoreBtn.module.css";
import { loadMoreBtnProp } from "../../App/App.types";

const LoadMoreBtn: React.FC<loadMoreBtnProp> = ({ onLoadMore }) => {
  return (
    <div>
      <button className={s.button} onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
