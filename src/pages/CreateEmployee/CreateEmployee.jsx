import { Link } from "react-router-dom";
import CreateEmployeeForm from "../../components/CreateEmployeeForm/CreateEmployeeForm"
import logo from "./logo-wealth-health.png"
import styles from "./CreateEmployee.module.css"

function CreateEmployee() {
  return (
    <div>
      <div>
        <header className={styles.header}>
          <img src={logo} alt="logo de wealth health" className={styles.logo}/>
          <h1 className={styles.appTitle}>HRnet</h1>
          <Link className={styles.linkToEmployeeList} to="/employee-list">View current employee list</Link>
        </header>
        <body className={styles.body}>
          <CreateEmployeeForm/>
        </body>
      </div>
   </div>

  );
}

export default CreateEmployee;
