

const Blogpage = () => {
    return (
        <div>
            <div className={'main'}>
                <div className={'content-left'}>
                    <h1>Привет! Мы команда Ready Set Cock</h1>
                    <p>Здесь будет какой-то короткий текст с описнаием того, кто мы и чем занимаемся.</p>
                </div>

                <div className={'content-right'}>
                    <img src="images/devs-img.svg" alt="" className={'devs-img'}/>
                </div>
            </div>
        </div>
    )
}

export {Blogpage}