import logo from "./logo.svg";
import "./css/App.css";
import { useState, useEffect } from "react";
import BBsMain from "./comps/BBsMain";
import { hello } from "./modules/FetchModule";
import NavList from "./layout/NavList";
import MainRouter from "./layout/MainRouter";

// 여기는 App.js
function App() {
  const [title, setTitle] = useState("");
  const hello = async () => {
    // proxy 설정된 URL 과 합성하여 http://localhost:3000/bbs 로 요청
    const res = await fetch("/bbs");
    const json = await res.json();
    console.log(json);
    setTitle(json.title);
  };

  useEffect(() => {
    (async () => {
      setTitle(await hello());
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{title ? title : "반갑습니다 React BBS Project 입니다."}</p>
      </header>
      <MainRouter />
      <NavList />
    </div>
  );
}

export default App;
