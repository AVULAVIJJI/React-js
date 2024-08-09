// import Employee from './Employee'
// let User = ()=>{
//     let uid= 102
//     let uName='rahul'
//     return <div>
//         <h2>User Component</h2>
//         <hr/>
//         <Employee id={uid} name={uName}/>
        
//     </div>

// }
// export default User
import React from "react"
import Employee from "./Employee"
class User extends React.Component{
    UId=101;
    UName='Rahul';
    render(){
        return <div>
            <h3>User component</h3>
            <hr></hr>
            <Employee id={this.UId} name={this.UName}/>
            
        </div>
    }
}
export default User

    

