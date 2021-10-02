import { container, header, tags, link } from "./App.module.css";
import Tag from "./components/Tag/Tag";

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
    </div>
  );
}

export default App;
