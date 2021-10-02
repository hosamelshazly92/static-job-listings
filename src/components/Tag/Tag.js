import { container, nam, iconRemove } from "./Tag.module.css";
import remove from "../../images/icon-remove.svg";

const Tag = ({ roleData, removeHandler }) => {
  return (
    <div className={container}>
      <p className={nam}>{roleData}</p>
      <img
        className={iconRemove}
        src={remove}
        alt="remove icon"
        onClick={removeHandler}
        id={roleData}
      />
    </div>
  );
};

export default Tag;
