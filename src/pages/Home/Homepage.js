import './Homepage.css'
import {Link} from "react-router-dom";

const Homepage = () => {
    return (
        <div className={"flex-column"}>
            <div className={'main'}>
                <div className={'content-left'}>
                    <h1>Привет! Мы команда Ready Set Cock</h1>
                    <p>Мы уже 2 года занимаемся разработкой игр и за это время закончили 4 проекта</p>
                </div>

                    <img src="images/devs-img.png" alt="" className={'devs-img'}/>

            </div>
            <div>
                <h1 className={"showcase-title"}>Наши проекты</h1>
                <div className={"showcase"}>
                    <div className={'showcase-card'}>
                        <img src="images/showcase.png" alt="" className={'showcase-img'}/>
                        <h2>To Valhalla</h2>
                        <div className={'tags'}>
                            <span>Hybrid-casual</span>
                            <span>Mobile</span>
                        </div>
                        <Link className={"arrow-button"} to={"/about"}>Подробнее</Link>
                    </div>

                    <div className={'showcase-card'}>
                        <img src="images/showcase.png" alt="" className={'showcase-img'}/>
                        <h2>Jabka</h2>
                        <div className={'tags'}>
                            <span>Hybrid-casual</span>
                            <span>Mobile</span>
                        </div>
                        <Link className={"arrow-button"} to={"/about"}>Подробнее</Link>
                    </div>

                    <div className={'showcase-card'}>
                        <img src="images/showcase.png" alt="" className={'showcase-img'}/>
                        <h2>Watch The Boxes</h2>
                        <div className={'tags'}>
                            <span>Hybrid-casual</span>
                            <span>Mobile</span>
                        </div>
                            <Link className={"arrow-button"} to={"/about"}>Подробнее</Link>
                    </div>

                    <div className={'showcase-card'}>
                        <img src="images/showcase.png" alt="" className={'showcase-img'}/>
                        <h2>Brazillian Ronin</h2>
                        <div className={'tags'}>
                            <span>Platformer</span>
                            <span>PC</span>
                        </div>
                            <Link className={"arrow-button"} to={"/about"}>Подробнее</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Homepage}