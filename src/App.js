import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route, Link} from "react-router-dom";
import { Homepage } from './pages/Home/Homepage'
import { About } from './pages/About/Aboutpage'
import { Statpage } from './pages/Stats/Statpage'
import { Blogpage } from './pages/Blogpage'
import Auth  from "./pages/Auth";
import ToggleImages from "./functions/ToggleImages";
import {useState} from "react";

function App() {
    // const [active, setActive] = useState(false);

    // const handleChangeActive = () => {
    //     setActive((prevState) => {
    //         return !prevState;
    //     });
    // };

  return (
    <>
      <header className={"App-header"}>
          {/*<img alt={'логотип'}>Логотип</img>*/}
          <Link className={"App-link"} to="/">
              О команде
              {/*<ToggleImages active={active} handleChangeActive={handleChangeActive} />*/}
          </Link>
          <Link className={"App-link"} to="/statistics">Статистика</Link>
          <Link className={"App-link"} to="/blog">Блог</Link>
      </header>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/statistics" element={<Statpage/>}/>
            <Route path="/blog" element={<Blogpage/>}/>
            <Route path="/devlogin" element={<Auth />}/>
        </Routes>
        <footer className={"App-footer"}>
            <span>mail@mail.com</span>
            <img src="images/telegram-icon.png" alt=""/>
            <img src="images/vk-icon.png" alt=""/>
            <img src="images/youtube-icon.png" alt=""/>
            <img src="images/store-icon.png" alt=""/>
            <Link className={"App-link"} to={"/devlogin"}>Вход для разработчиков</Link>
        </footer>
    </>
  );
}

export default App;
