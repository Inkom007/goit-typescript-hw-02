import { InfinitySpin } from "react-loader-spinner";
import s from "./Loader.module.css";
const Loader = () => {
  return (
    <div className={s.loader}>
      <InfinitySpin
        visible={true}
        width="200"
        color="rgb(196, 90, 24)"
        ariaLabel="infinity-spin-loading"
      />
    </div>
  );
};

export default Loader;
