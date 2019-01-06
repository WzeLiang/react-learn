import React ,{ Component } from  'react';
import './tabbar.css'
import {  BrowserRouter as Router, Route, Link  } from "react-router-dom"
import Login from "../../views/login/login"
 import Playlist from "../../views/playlist/playlist"
class Tabbar extends Component {
    render(){
        return(
            <Router>
                <div>
                    <div className="tabbar-box">
                        <Link to="/Login" className="tab-item" onClick={this.itemclick} data-itemid="0" >首页</Link>
                        <Link className="tab-item" onClick={this.itemclick} data-itemid="1" to="./Playlist">我的</Link>
                        {/* <Link className="tab-item" onClick={this.itemclick} data-itemid="2">个人中心</Link> */}
                    </div>
                    <div>
                        <Route  path="/Login" component={Login} />
                        <Route path="/Playlist" component={Playlist} />
                    </div>
                </div>
    
            </Router>
        )
    }
    itemclick(e){
        let tabindex= e.target.getAttribute("data-itemid")
        if(tabindex===2){
            
        }
        
    }
}



export  default  Tabbar;