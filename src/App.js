import { container, header, tags } from "./App.module.css";
import Tag from "./components/Tag/Tag";

function App() {
  return (
    <div className={container}>
      <div className={header}>
        <div className={tags}>
          <Tag />
          <Tag />
        </div>
      </div>
    </div>
  );
}

export default App;
