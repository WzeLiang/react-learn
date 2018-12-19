import React, { Component } from 'react';
import './login.css'
import Axios from  "axios"


class Login extends Component {
    render() {
        return (
                <div className="form-box">
                    <div className="form-item">
                        <input type="text" placeholder="请输入用户名" value={username}/>
                    </div>
                    <div className="form-item">
                        <input type="text" placeholder="请输入密码" value={userpass}/>
                    </div>
                    <div className="btn">登录</div>
                </div>
        )

    }
    login(){
        Axios.get("/")
    }
}

export default Login;
