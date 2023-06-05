import { Link } from 'react-router-dom';
import styles from "./EmployeeList.module.css"
import logo from "../CreateEmployee/logo-wealth-health.png"
import EmployeeTable from '@pangzidao/my-table-component/dist/EmployeeTable';
import mockedEmployees from "../../employees"

function EmployeeList(){
    return(
        <div>
            <div className={styles.header}>
          <img src={logo} alt="logo de wealth health" className={styles.logo}/>
          <h1 className={styles.appTitle}>HRnet</h1>
          <Link className={styles.linkToHome} to="/">Home</Link>
        </div>
        <div className={styles.body}>
            <h2>employee list</h2>
            <EmployeeTable employees={mockedEmployees}/>
        </div>
        </div>
    )
}

export default  EmployeeList