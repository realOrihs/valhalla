import "./Aboutpage.css"
import YoutubeEmbed from "../../YoutubeEmbed";

const About = () => {
    return (
        <div className={"flex-wrapper"}>
            <div className={'about-main'}>
                <div className={'content-left'}>
                    <h1>To Valhalla</h1>
                    <p>Здесь будет какой-то короткий текст с описнаием игры.
                        Здесь будет какой-то короткий текст с описнаием игры.
                        Здесь будет какой-то короткий текст с описнаием игры.</p>
                        <div className={'about-tags-container'}>
                            <div><img src="images/person-schematic.png"/>12 - 36 лет, мужчины и женщины</div>
                            <div><img src="images/ion_game-controller-outline.png"/>mobile</div>
                            <div><img src="images/cil_globe-alt.png"/>страны Запада и СНГ</div>
                            <div><img src="images/bx_game.png"/>hybrid-casual</div>
                        </div>
                    <div>
                        <div className={'itch-button'}>
                            <span className={'itch-button-text'}>Перейти на itch.io</span>
                        </div>
                    </div>

                </div>

                <div className={'content-right'}>
                    <YoutubeEmbed embedId="9iSjwT1Btcw" />
                </div>
            </div>
            <div className={"about-showcase"}>
                <div className={'about-showcase-card'}>
                    <img src="images/game-screenshot.png" alt="" className={'about-showcase-img'}/>
                    <img src="images/game-screenshot.png" alt="" className={'about-showcase-img'}/>
                    <img src="images/game-screenshot.png" alt="" className={'about-showcase-img'}/>
                    <img src="images/game-screenshot.png" alt="" className={'about-showcase-img'}/>

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