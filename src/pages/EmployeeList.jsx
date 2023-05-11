import EmployeeTable from "../components/EmployeeTable/EmployeeTable"
import { Link } from 'react-router-dom';

function EmployeeList(){
    return(
        <div>
            <Link to="/">Go to Create Employee</Link>
            <p>employee list</p>
            <EmployeeTable />
        </div>
    )
}

export default  EmployeeList