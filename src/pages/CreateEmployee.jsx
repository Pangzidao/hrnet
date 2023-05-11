import { Link } from "react-router-dom";
import CreateEmployeeForm from "../components/CreateEmployeeForm/CreateEmployeeForm";

function CreateEmployee() {
  return (
    <div>
      <div>
        <h1>HRnet</h1>
        <Link to="/employee-list">View current employee list</Link>
        <CreateEmployeeForm/>
      </div>
   </div>

  );
}

export default CreateEmployee;
