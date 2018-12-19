import React ,{ Component } from  'react';
import './tabbar.css'

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
        console.log(e.target.getAttribute("data-itemid"))
    }
}



export  default  Tabbar;