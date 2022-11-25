import './Homepage.css'
import {Link} from "react-router-dom";

const Homepage = () => {
    return (
        <div>
            <div className={'main'}>
                <div className={'content-left'}>
                    <h1>Привет! Мы команда Ready Set Cock</h1>
                    <p>Здесь будет какой-то короткий текст с описнаием того, кто мы и чем занимаемся.</p>
                </div>

                <div className={'content-right'}>
                    <img src="images/devs-img.png" alt="" className={'devs-img'}/>
                </div>
            </div>
            <div>
                <h1 className={"center-top-left"}>Наши проекты</h1>
                <div className={"showcase"}>
                    <div className={'showcase-card'}>
                        <img src="images/showcase.png" alt="" className={'showcase-img'}/>
                        <h2>To Valhalla</h2>
                        <div className={'tags'}>
                            <span>hybrid-casual</span>
                            <span>mobile</span>
                        </div>
                        <Link className={"arrow-button"} to={"/about"}>Подробнее</Link>
                    </div>

                    <div className={'showcase-card'}>
                        <img src="images/showcase.png" alt="" className={'showcase-img'}/>
                        <h2>To Valhalla</h2>
                        <div className={'tags'}>
                            <span>hybrid-casual</span>
                            <span>mobile</span>
                        </div>
                            <Link className={"arrow-button"} to={"/about"}>Подробнее</Link>
                    </div>

                    <div className={'showcase-card'}>
                        <img src="images/showcase.png" alt="" className={'showcase-img'}/>
                        <h2>To Valhalla</h2>
                        <div className={'tags'}>
                            <span>hybrid-casual</span>
                            <span>mobile</span>
                        </div>
                            <Link className={"arrow-button"} to={"/about"}>Подробнее</Link>
                    </div>

                    <div className={'showcase-card'}>
                        <img src="images/showcase.png" alt="" className={'showcase-img'}/>
                        <h2>To Valhalla</h2>
                        <div className={'tags'}>
                            <span>hybrid-casual</span>
                            <span>mobile</span>
                        </div>
                            <Link className={"arrow-button"} to={"/about"}>Подробнее</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Homepage}