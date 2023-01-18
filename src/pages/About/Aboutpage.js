import "./Aboutpage.css"
import YoutubeEmbed from "../../YoutubeEmbed";
import {Link} from "react-router-dom";

const About = () => {
    return (
        <div className={"flex-wrapper"}>
            <div className={'about-main'}>
                <div className={'content-left'}>
                    <h1>To Valhalla</h1>
                    <p>To Valhalla позволит вам бросать викингов в разные миры скандинавской мифологии!
                        Выбирайте из множества молотов, артефактов и скинов, собирайте монеты и попытайтесь достичь космоса!</p>
                        <div className={'about-tags-container'}>
                            <div><img src="images/person-schematic.png"/>12 - 36 лет, мужчины и женщины</div>
                            <div><img src="images/ion_game-controller-outline.png"/>mobile</div>
                            <div><img src="images/cil_globe-alt.png"/>страны Запада и СНГ</div>
                            <div><img src="images/bx_game.png"/>hybrid-casual</div>
                        </div>
                    <div>
                        {/*<div className={'itch-button'}>*/}
                        {/*    <span className={'itch-button-text'}>Перейти на itch.io</span>*/}
                        {/*</div>*/}

                        <a className={"arrow-button"} target="_blank" href={"https://chezzyz.itch.io/to-valhalla"}>Перейти на itch.io</a>
                    </div>

                </div>

                <div className={'content-right'}>
                    <YoutubeEmbed embedId="1UOZ_-mbxyg" />
                </div>
            </div>
            <div className={"about-showcase"}>
                <div className={'about-showcase-card'}>
                    <img src="images/image_001 (2).png" alt="" className={'about-showcase-img'}/>
                    <img src="images/image_017 (2).png" alt="" className={'about-showcase-img'}/>
                    <img src="images/image_014.png" alt="" className={'about-showcase-img'}/>
                    {/*<img src="images/game-screenshot.png" alt="" className={'about-showcase-img'}/>*/}

                </div>
                <div className={"nav-buttons"}>
                    <img src="images/nav-left.png" alt=""/>
                    <img src="images/nav-right.png" alt=""/>
                </div>
            </div>
        </div>
    )
}

export {About}