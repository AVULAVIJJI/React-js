// let Employee = (props)=>{
//     return<div>
//         <h2>Employee Commpoent</h2>
//         <pre>{JSON.stringify(props)}</pre>
//         <h3>Employee Id {props.id}</h3>
//         <h3>EmpName {props.name}</h3>
//     </div>
// }
// export default Employee
import React from  "react"
class Employee extends React.Component{
    render(){
        return <div>
            <h2>Employee component</h2>
            <pre>JSON.stringify(this.props)</pre>
            <h2>Employee Id:(this.props.id)</h2>
            <h2>Employee name:(this.props.uname)</h2>
            
        </div>
    }
}
export default Employee
