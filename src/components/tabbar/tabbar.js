import React ,{ Component } from  'react';
import './tabbar.css'
import { Route , Router,link  } from "react-router-dom"

class Tabbar extends Component {
    render(){
        return(
            <div className="tabbar-box">
                <div className="tab-item" onClick={this.itemclick} data-itemid="0">首页</div>
                <div className="tab-item" onClick={this.itemclick} data-itemid="1">我的</div>
                <div className="tab-item" onClick={this.itemclick} data-itemid="2">个人中心</div>
            </div>
        )
    }
    itemclick(e){
        let tabindex= e.target.getAttribute("data-itemid")
        if(tabindex===2){
            
        }
        
    }
}



export  default  Tabbar;