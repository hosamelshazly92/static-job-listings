import { container, header, tags, link, main, hint } from "./App.module.css";
import Tag from "./components/Tag/Tag";
import Job from "./components/Job/Job";
import data from "./data.json";
import { v4 as uuid } from "uuid";
import { useState, useEffect } from "react";

function App() {
  const roles = ["Frontend", "Fullstack", "Backend"];
  const [list, setList] = useState(roles);
  const [group, setGroup] = useState(data);

  const handleRemove = (evt) => {
    setList(list.filter((itm) => itm !== evt.target.id));
  };

  useEffect(
    () => setGroup(group.filter((itm) => list.includes(itm.role))),
    [list]
  );

  const handleReset = () => {
    setList(roles);
    setGroup(data);
  };

  return (
    <div className={container}>
      <div className={header}>
        <div className={tags}>
          {list.length > 0 ? (
            list.map((itm) => (
              <Tag key={uuid()} roleData={itm} removeHandler={handleRemove} />
            ))
          ) : (
            <p className={hint}>Hit the reset button</p>
          )}

          <button className={link} onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>

      <div className={main}>
        {group.map((itm) => (
          <Job key={uuid()} job={itm} />
        ))}
      </div>
    </div>
  );
}

export default App;
