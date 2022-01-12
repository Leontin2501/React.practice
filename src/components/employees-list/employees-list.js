import Employeeslistitem from "../employees-list-item/employees-list-item";
import './employees-list.css';

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <Employeeslistitem/>
            <Employeeslistitem/>
            <Employeeslistitem/>
        </ul>
    )
}

export default EmployeesList