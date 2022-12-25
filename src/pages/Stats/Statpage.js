import "./Statpage.css"
import {useEffect, useState} from "react";

const Statpage = () => {
    const [userStats, setUserStats] = useState([''])
    const [globalStats, setGlobalStats] = useState([''])
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [userId, setUserId] = useState("");


    // useEffect(() => {
    //     const url = "https://abd6-31-162-117-203.eu.ngrok.io/api/players/getPlayerById?id=217ab6c9-7f30-41bf-8a89-c049dc65af72"
    //
    //     const fetchData = async() => {
    //         const response = await fetch(url)
    //         const data = await response.json()
    //         setUserStats(data)
    //         console.log(data)
    //     }
    //     fetchData()
    // }, []);

    useEffect(() => {
        const fetchData = async() => {
            const url = `https://d068-188-18-32-121.eu.ngrok.io/api/players/getPlayerById?id=${userId}`;
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url)
                const data = await response.json()
                setUserStats(data)
                console.log(data)
            }
            catch (err){
                console.error(err);
                setError(err);
            } finally {
                setUserId("");
                setLoading(false);
            }
        }
        if (userId !== "")
            fetchData()
    }, [userId]);

    useEffect(() => {
        const fetchData = async() => {
            const url = `https://d068-188-18-32-121.eu.ngrok.io/api/players/getBestScores?levelName=Midgard&count=4`;
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(url)
                const data = await response.json()
                setGlobalStats(data)
                console.log(data)
            }
            catch (err){
                console.error(err);
                setError(err);
            } finally {
                setLoading(false);
            }
        }
            fetchData()
    }, []);

    // const getPersonalData=()=>{
    //     fetch('first-response.json'
    //         ,{
    //             headers : {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json'
    //             }
    //         }
    //     )
    //         .then(function(response){
    //             console.log(response)
    //             return response.json();
    //         })
    //         .then(function(myJson) {
    //             console.log(myJson);
    //             setUserStats(myJson)
    //         });
    // }
    //
    // const getGlobalData=()=>{
    //     fetch('second-response.json'
    //         ,{
    //             headers : {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json'
    //             }
    //         }
    //     )
    //         .then(function(response){
    //             console.log(response)
    //             return response.json();
    //         })
    //         .then(function(myJson) {
    //             console.log(myJson);
    //             setGlobalStats(myJson)
    //         });
    // }
    //
    // useEffect(() => {
    //     getPersonalData()
    //     getGlobalData()
    // },[])

    const handleInput = (e) => {
        const {name,value} = e.target;
        setUserId(value);
    }


    return (
        <div>
            <div className={'stat-main'}>
                <input className={'searchbar'} type="text" defaultValue="уникальный идентификатор игрока" onChange={handleInput}></input>
                <div className={"grid-wrapper"}>
                    <div className={'progress-title'}>Ваш прогресс в To Valhalla</div>
                    <div className={'progress-visual'}>Игра пройдена на {userStats.completeGamePercent}%</div>
                    <div className={'grid-firstcolumn'}>
                        <img className={'game-time-img'} src="images/ic_baseline-access-time.svg" alt=""/>
                        <div className={'game-time-number'}>{userStats.gameTime}</div>
                        <div className={'game-time-title'}>Всего в игре</div>

                        <img className={'sessions-count-img'} src="images/ic_baseline-cloud-queue.svg" alt=""/>
                        <div className={'sessions-count-number'}>{userStats.sessionsCount}</div>
                        <div className={'sessions-count-title'}>Игровых сессий</div>

                        <img className={'flight-time-img'} src="images/mdi_counter.svg" alt=""/>
                        <div className={'flight-time-number'}>{userStats.flyTime}</div>
                        <div className={'flight-time-title'}>Время в полете</div>
                    </div>

                    <div className={'grid-secondcolumn'}>
                        <img className={'coins-count-img'}src="images/ph_coin-vertical.svg" alt=""/>
                        <div className={'coins-count-number'}>{userStats.coinsCount}</div>
                        <div className={'coins-count-title'}>Всего монет собрано</div>

                        <img className={'hammers-count-img'}src="images/hammer.svg" alt=""/>
                        <div className={'hammers-count-number'}>{userStats.boughtHammersCount}/{userStats.hammersCount}</div>
                        <div className={'hammers-count-title'}>Молотов разблокировано</div>

                        <img className={'skins-count-img'} src="images/game-icons_viking-helmet.svg" alt=""/>
                        <div className={'skins-count-number'}>{userStats.boughtSkinsCount}/{userStats.skinsCount}</div>
                        <div className={'skins-count-title'}>Костюмов разблокировано</div>

                        <img className={'artifacts-count-img'}src="images/icon-park-outline_hammer-and-anvil.svg" alt=""/>
                        <div className={'artifacts-count-number'}>{userStats.boughtArtifactsCount}/{userStats.artifactsCount}</div>
                        <div className={'artifacts-count-title'}>Артефактов восстановлено</div>
                    </div>
                    <div className={'grid-thirdcolumn'}>
                        <img className={'bestscores-img'}src="images/ph_medal.svg" alt=""/>
                        <div className={'bestscores-title'}>Лучший счет</div>
                        {userStats?.bestScores &&
                            <>
                                {userStats?.bestScores.map((level) =>
                                    <>
                                        <div className={'bestscores-numbers'}>{level.height}m</div>
                                        <div className={'bestscores-worlds'}>{level.levelName}</div>
                                    </>
                                )}
                            </>
                        }
                    </div>
                </div>
                <div className={"players-rating"}>
                    <h2>Рейтинг игроков</h2>
                    <div className={"players"}>
                        {globalStats?.bestScores &&
                            <>
                                <div className={"player"}>
                                    <span>{globalStats?.bestScores[0].username}</span>
                                    <span>{globalStats?.bestScores[0].height}m</span>
                                </div>
                                <div className={"player"}>
                                    <span>{globalStats?.bestScores[1].username}</span>
                                    <span>{globalStats?.bestScores[1].height}m</span>
                                </div>
                                <div className={"player"}>
                                    <span>{globalStats?.bestScores[2].username}</span>
                                    <span>{globalStats?.bestScores[2].height}m</span>
                                </div>
                                <div className={"player"}>
                                    <span>{globalStats?.bestScores[3].username}</span>
                                    <span>{globalStats?.bestScores[3].height}m</span>
                                </div>
                            </>
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}

export {Statpage}