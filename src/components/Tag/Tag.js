import { container, nam, iconRemove } from "./Tag.module.css";
import remove from "../../images/icon-remove.svg";

const Tag = () => {
  return (
    <div className={container}>
      <p className={nam}>JavaScript</p>
      <img className={iconRemove} src={remove} alt="remove icon" />
    </div>
  );
};

export default Tag;
