import React, { Component } from 'react';
import './login.css'
import {  BrowserRouter as Router, Route, Link  } from "react-router-dom"

import aaa  from "../../unitl/request"
// import { Router } from "react-router"
import playlist from "../playlist/playlist"
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '', 
            password: '', 
        };
    
         this.login = this.login.bind(this);
        //  this.handleSubmit = this.handleSubmit.bind(this);
      }
    
    render() {
        return (
                <div className="form-box">
                    <div className="form-item">
                        <input type="text" placeholder="请输入用户名"  onChange={(e)=>this.hanlderChangeName(e)} value={this.state.phone} />
                    </div>
                    <div className="form-item">
                        <input type="text" placeholder="请输入密码"  onChange={(e)=>this.hanlderChangePass(e)} value={this.state.password} />
                    </div>
                    <div className="btn" onClick={this.login}  >登录</div>
                </div>
        )

    }
    hanlderChangeName(e) {
        this.setState({
            phone: e.target.value
        })
        
    }

    hanlderChangePass(e) {
        this.setState({
            password: e.target.value
        })
        
    }

    login(){

        var that =this
        aaa.get("http://47.96.24.35:3000/login/cellphone?phone="+ that.state.phone +"&password="+that.state.password+"&proxy=http://47.96.24.35:3000",true,function(res){
            console.log(res);
            if(res.code==200){
                console.log(res.header["Set-Cookie"])
                that.props.history.push("playlist");
                // onClick={() => this.props.history.push('detail')}
            }
        })
       
    }
}

export default Login;
