import { InfinitySpin } from "react-loader-spinner";
import s from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={s.loader}>
      <InfinitySpin width="200" color="rgb(196, 90, 24)" />
    </div>
  );
};

export default Loader;
