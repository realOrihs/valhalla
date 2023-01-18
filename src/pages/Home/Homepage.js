import './Homepage.css'
import {Link} from "react-router-dom";

const Homepage = () => {
    return (
        <div className={'page-background'}>
            {/*<span className={'background-yellow-top'}></span>*/}
            {/*<span className={'background-orange-top'}></span>*/}
            {/*<span className={'background-red-top'}></span>*/}
            <img src={"images/zalupa-top.png"} className={"zalupa-top"}></img>
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
                        <div className={"showcase-insides"}>
                            <div className={'showcase-card'}>
                                <img src={"images/to-valhalla-img.jpg"} alt="" className={'showcase-img'}/>
                                <div className={'showcase-card-insides'}>
                                    <h2 className={"showcase-card-inside-title"}>To Valhalla</h2>
                                    <div className={'tags'}>
                                        <span>Hybrid-casual</span>
                                        <span>Mobile</span>
                                    </div>
                                    <Link className={"arrow-button"} to={"/about"}>Подробнее</Link>
                                </div>
                            </div>

                            <div className={'showcase-card'}>
                                <img src="images/jabka-img.jpg" alt="" className={'showcase-img'}/>
                                <div className={'showcase-card-insides'}>
                                    <h2 className={"showcase-card-inside-title"}>Jabka</h2>
                                    <div className={'tags'}>
                                        <span>Hybrid-casual</span>
                                        <span>Mobile</span>
                                    </div>
                                    <Link className={"arrow-button"} to={"/about"}>Подробнее</Link>
                                </div>
                            </div>

                            <div className={'showcase-card'}>
                                <img src="images/watch-the-boxes-img.jpg" alt="" className={'showcase-img'}/>
                                <div className={'showcase-card-insides'}>
                                    <h2 className={"showcase-card-inside-title"}>Watch The Boxes</h2>
                                    <div className={'tags'}>
                                        <span>Hybrid-casual</span>
                                        <span>Mobile</span>
                                    </div>
                                        <Link className={"arrow-button"} to={"/about"}>Подробнее</Link>
                                </div>
                            </div>

                            <div className={'showcase-card'}>
                                <img src="images/brazilian-ronin-img.jpg" alt="" className={'showcase-img'}/>
                                <div className={'showcase-card-insides'}>
                                    <h2 className={"showcase-card-inside-title"}>Brazillian Ronin</h2>
                                    <div className={'tags'}>
                                        <span>Platformer</span>
                                        <span>PC</span>
                                    </div>
                                        <Link className={"arrow-button"} to={"/about"}>Подробнее</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src={"images/zalupa.png"} className={"zalupa"}></img>
            {/*<span className={'background-yellow-bot'}></span>*/}
            {/*<span className={'background-orange-bot'}></span>*/}
            {/*<span className={'background-red-bot'}></span>*/}
        </div>
    )
}

export {Homepage}