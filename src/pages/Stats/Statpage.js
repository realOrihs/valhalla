import "./Statpage.css"

const Statpage = () => {
    return (
        <div>
            <div className={'stat-main'}>
                <div className={'searchbar'}>
                    <span>уникальный идентификатор игрока</span>
                </div>
                <div className={"stats-main"}>
                    <span>Блок статистики</span>
                </div>
                <div className={"players-rating"}>
                    <h2>Рейтинг игроков</h2>
                    <div className={"players"}>
                        <div className={"player"}>
                            <span>id 12345678 </span>
                            <span>30 345m</span>
                        </div>
                        <div className={"player"}>
                            <span>id 12345678 </span>
                            <span>30 345m</span>
                        </div>
                        <div className={"player"}>
                            <span>id 12345678 </span>
                            <span>30 345m</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export {Statpage}