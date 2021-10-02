import { container, header, tags, link, main } from "./App.module.css";
import Tag from "./components/Tag/Tag";
import Job from "./components/Job/Job";
import data from "./data.json";
import { v4 as uuid } from "uuid";

function App() {
  return (
    <div className={container}>
      <div className={header}>
        <div className={tags}>
          <Tag />
          <Tag />

          <button className={link}>Clear</button>
        </div>
      </div>

      <div className={main}>
        {data.map((itm) => (
          <Job key={uuid()} job={itm} />
        ))}
      </div>
    </div>
  );
}

export default App;
