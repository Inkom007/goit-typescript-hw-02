import { RotatingLines } from "react-loader-spinner";
import s from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={s.loader}>
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="red"
        backgroundColor="red"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
      />
    </div>
  );
};

export default Loader;
