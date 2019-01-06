import React , { Component } from "react"
import "./playlist.css"

import aaa  from "../../unitl/request"
class Playlist extends Component{
    constructor(props) {
        super(props);
        this.state = {
            phone: '', 
            password: '', 
        };
    
         this.getlist = this.getlist.bind(this);
       
      }
    render(){
        this.getlist()
        return(
            <div>

            </div>
        )
    }
    getlist(){

        var that =this
        aaa.get("http://47.96.24.35:3000/likelist?uid=130652415",true,function(res){
            console.log(res);
            if(res.code==200){
                that.props.history.push("playlist");
                // onClick={() => this.props.history.push('detail')}
            }
        })
       
    }
}
export default Playlist;