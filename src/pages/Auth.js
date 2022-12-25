import React, { useState } from "react"
import "./Auth.css"
import data from "bootstrap/js/src/dom/data";

export default function (props) {
    // let [authMode, setAuthMode] = useState("signin")
    const [loginValue, setLoginValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")

    // const changeAuthMode = () => {
    //     setAuthMode(authMode === "signin" ? "signup" : "signin")
    // }


    const login = (e) => {
        const fetchData = async() => {
            const token = localStorage.getItem('token')
            const url = `https://d068-188-18-32-121.eu.ngrok.io/api/admin/getUsername?token=${token}`; //запрос на синхронизацию
            props.setLoading(true);
            props.setError(null);

            try {
                const response = await fetch(url)
                const data = await response.json()
                props.setUsernameDTO({isAuth: data.username !== null, data: data})
                console.log(data)
            }
            catch (err){
                console.error(err);
                props.setError(err);
            } finally {
                props.setLoading(false);
            }
        }
        const getToken = async() => {
            const url = `https://d068-188-18-32-121.eu.ngrok.io/api/admin/getToken?username=${loginValue}&password=${passwordValue}`;

            try {
                const response = await fetch(url)
                const data = await response.json()
                // setUsertokenDTO({isAuth: data.token !== null, data: data} )
                localStorage.setItem("token", data.token)//fetch запрос токена с сервера /api/admin/getToken?username=chezzyz&password=49704970
                fetchData();
                console.log(data)

            }
            catch (err){
                console.error(err);
            }
        }
        getToken()
        //fetch запрос юзер даты по токену полученному выше
        //    данные с запроса
    }
    // if (authMode === "signin") {
        return (
            <div className="auth-form-container">
                <form className="Auth-form" action={"https://d068-188-18-32-121.eu.ngrok.io/api/admin/"} method={"GET"}>
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Авторизуйтесь, чтобы писать статьи в блог</h3>
                        <div className="form-group mt-3">
                            <label>Логин</label>
                            <input
                                value={loginValue}
                                type="text"
                                className="form-control mt-1"
                                placeholder="Логин"
                                id="getToken?username"
                                onChange={(e) => setLoginValue(e.target.value)}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Пароль</label>
                            <input
                                value={passwordValue}
                                type="password"
                                className="form-control mt-1"
                                placeholder="Пароль"
                                id="&password"
                                onChange={(e) => setPasswordValue(e.target.value)}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <div className="btn btn-primary" onClick={login}>
                                Войти
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    // }

    return (
        <button type="submit" className="btn btn-primary">
            Повторите попытку
        </button>
    )
}