import React, { Component } from 'react';
import offline from "../images/offline.jpg"
import online from "../images/online.jpeg"
const data = [
    {
      name:"abc",
      status:"offline"
    },
    {
        name:"def",
      status:"online"
    },
    {
        name:"pqr",
      status:"online"
    },
    {
        name:"xyz",
      status:"offline"
    },
    {
        name:"asd",
      status:"online"
    }
]
class Team extends Component {
    render() {
        console.log(data)
        return (
            <div>
                {data.map(val=>{return(
                    <div>
                   {  val.status==="offline" ? <img src={offline} height="80px" width="80px"/>:
                   <img src={online} height="80px" width="80px"/>}
                    </div>
                )})}
            </div>
        );
    }
}

export default Team;