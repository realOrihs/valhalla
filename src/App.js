import './App.css';
import AppStyles from "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route, Link} from "react-router-dom";
import { Homepage } from './pages/Home/Homepage'
import { About } from './pages/About/Aboutpage'
import { Statpage } from './pages/Stats/Statpage'
import { Blogpage } from './pages/Blogpage'
import Auth  from "./pages/Auth";
import ToggleImages from "./functions/ToggleImages";
import {useEffect, useState} from "react";

function App() {
    // const [active, setActive] = useState(false);

    // const handleChangeActive = () => {
    //     setActive((prevState) => {
    //         return !prevState;
    //     });
    // };

    const [usernameDTO, setUsernameDTO] = useState ({isAuth: false, data: null})
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect( () => {
        const fetchData = async() => {
            const token = localStorage.getItem('token')
            const url = `https://d068-188-18-32-121.eu.ngrok.io/api/admin/getUsername?token=${token}`; //запрос на синхронизацию
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url)
                const data = await response.json()
                setUsernameDTO({isAuth: data.username !== null, data: data})
                console.log(data)
            }
            catch (err){
                console.error(err);
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        // if (usertokenDTO !== "" && usertokenDTO !== null)
        if (localStorage.getItem('token'))
            fetchData()

        // if (token){
        //     fetch(`https://0304-188-18-32-121.eu.ngrok.io/api/admin/sync-залупа?`,{headers:{"authorization": token}})
        //
        //     setUserLogin({isAuth: true, data: response.data })
        //     // setUserLogin({isAuth: true, data: {username:"ivan"} })
        // }
    }, [])


  return (
    <>
      <header className={"App-header"}>
          <img className={"App-logo"} src="images/RSC.svg" alt={'логотип'}></img>
          <Link className={"App-link"} to="/">
              О команде
              {/*<ToggleImages active={active} handleChangeActive={handleChangeActive} />*/}
          </Link>
          <Link className={"App-link"} to="/statistics">Статистика</Link>
          <Link className={"App-link"} to="/blog">Блог</Link>

          {usernameDTO.isAuth &&
              <span className={"App-user"}>{usernameDTO.data.username} авторизован :)</span>
          }

          {/*<button className={"hamburger"} onClick={() => {*/}
          {/*        setIsNavExpanded(!isNavExpanded);*/}
          {/*    }}*/}
          {/*>*/}
          {/*</button>*/}
          {/*<div*/}
          {/*    className={*/}
          {/*      isNavExpanded ? "App-header-menu-expanded" : "App-header-menu"*/}
          {/*    }*/}
          {/*>*/}
          {/*    <ul>*/}
          {/*        <li>*/}
          {/*            <Link className={"App-link"} to="/">О команде</Link>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*            <Link className={"App-link"} to="/statistics">Статистика</Link>*/}
          {/*        </li>*/}
          {/*        <li>*/}
          {/*            <Link className={"App-link"} to="/blog">Блог</Link>*/}
          {/*        </li>*/}
          {/*    </ul>*/}
          {/*</div>*/}
      </header>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/statistics" element={<Statpage/>}/>
            <Route path="/blog" element={<Blogpage/>}/>
            <Route path="/devlogin" element={<Auth usernameDTO={usernameDTO} setUsernameDTO={setUsernameDTO} setLoading={setLoading} setError={setError}/>}/>
        </Routes>
        <footer className={"App-footer"}>
            <span className="App-span">mail@mail.com</span>
            <img src="images/ic_baseline-telegram.svg" alt=""/>
            <img src="images/entypo-social_vk-with-circle.svg" alt=""/>
            <img src="images/entypo-social_youtube-with-circle.svg" alt=""/>
            <img src="images/simple-icons_itchdotio.svg" alt=""/>
            <Link className={"App-link"} id={'login'} to={"/devlogin"}>Вход для разработчиков</Link>
        </footer>
    </>
  );
}

export default App;
