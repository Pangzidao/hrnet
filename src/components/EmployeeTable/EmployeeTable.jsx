import React from 'react';
import { useState, useEffect } from 'react'
import styles from "./EmployeeTable.module.css"



const employees = [
  {
    firstName: "John",
    lastName: "Smith",
    startDate: "2015-06-01",
    department: "Marketing",
    dateOfBirth: "1985-10-12",
    street: "123 Main Street",
    city: "New York City",
    state: "New York",
    zipCode: "10001"
  },
  {
    firstName: "Emily",
    lastName: "Johnson",
    startDate: "2018-03-15",
    department: "Human Resources",
    dateOfBirth: "1990-01-22",
    street: "456 Elm Street",
    city: "Los Angeles",
    state: "California",
    zipCode: "90001"
  },
  {
    firstName: "Michael",
    lastName: "Williams",
    startDate: "2019-11-01",
    department: "Finance",
    dateOfBirth: "1988-06-05",
    street: "789 Oak Avenue",
    city: "Chicago",
    state: "Illinois",
    zipCode: "60601"
  },
  {
    firstName: "Jessica",
    lastName: "Brown",
    startDate: "2020-07-01",
    department: "IT",
    dateOfBirth: "1995-03-17",
    street: "321 Pine Lane",
    city: "Houston",
    state: "Texas",
    zipCode: "77001"
  },
  // Additional employees
  {
    firstName: "David",
    lastName: "Lee",
    startDate: "2016-09-10",
    department: "Marketing",
    dateOfBirth: "1987-02-28",
    street: "555 Broadway",
    city: "New York City",
    state: "New York",
    zipCode: "10002"
  },
  {
    firstName: "Sarah",
    lastName: "Taylor",
    startDate: "2017-04-20",
    department: "Human Resources",
    dateOfBirth: "1992-11-15",
    street: "777 Park Avenue",
    city: "Los Angeles",
    state: "California",
    zipCode: "90002"
  },
  // More employees
  {
    firstName: "Robert",
    lastName: "Johnson",
    startDate: "2022-01-05",
    department: "Finance",
    dateOfBirth: "1991-07-10",
    street: "888 Oak Street",
    city: "Chicago",
    state: "Illinois",
    zipCode: "60602"
  },
  {
    firstName: "Stephanie",
    lastName: "Garcia",
    startDate: "2023-02-15",
    department: "IT",
    dateOfBirth: "1994-09-25",
    street: "444 Pine Avenue",
    city: "Houston",
    state: "Texas",
    zipCode: "77002"
  },
  // More employees
  {
    firstName: "Andrew",
    lastName: "Miller",
    startDate: "2018-08-10",
    department: "Marketing",
    dateOfBirth: "1989-03-07",
    street: "222 Elm Street",
    city: "New York City",
    state: "New York",
    zipCode: "10003"
  },
  {
    firstName: "Olivia",
    lastName: "Anderson",
    startDate: "2019-05-02",
    department: "Human Resources",
    dateOfBirth: "1993-06-18",
    street: "555 Park Street",
    city: "Los Angeles",
    state: "California",
    zipCode: "90003"
  },
  {
    firstName: "Daniel",
    lastName: "Wilson",
    startDate: "2020-09-10",
    department: "Finance",
    dateOfBirth: "1986-08-21",
    street: "777 Elm Avenue",
    city: "Chicago",
    state: "Illinois",
    zipCode: "60603"
  },
  {
    firstName: "Sophia",
    lastName: "Hernandez",
    startDate: "2021-04-15",
    department: "IT",
    dateOfBirth: "1997-02-10",
    street: "999 Pine Lane",
    city: "Houston",
    state: "Texas",
    zipCode: "77003"
  },
  {
    firstName: "Jacob",
    lastName: "Brown",
    startDate: "2017-11-01",
    department: "Marketing",
    dateOfBirth: "1989-12-05",
    street: "444 Broadway",
    city: "New York City",
    state: "New York",
    zipCode: "10004"
  },
  {
    firstName: "Isabella",
    lastName: "Martinez",
    startDate: "2018-07-01",
    department: "Human Resources",
    dateOfBirth: "1994-05-17",
    street: "666 Park Avenue",
    city: "Los Angeles",
    state: "California",
    zipCode: "90004"
  },
  {
    firstName: "Ethan",
    lastName: "Robinson",
    startDate: "2019-03-05",
    department: "Finance",
    dateOfBirth: "1993-01-08",
    street: "888 Oak Street",
    city: "Chicago",
    state: "Illinois",
    zipCode: "60604"
  },
  {
    firstName: "Mia",
    lastName: "Lopez",
    startDate: "2020-01-01",
    department: "IT",
    dateOfBirth: "1996-09-20",
    street: "222 Pine Avenue",
    city: "Houston",
    state: "Texas",
    zipCode: "77004"
  },
  {
    firstName: "Alexander",
    lastName: "Harris",
    startDate: "2021-07-15",
    department: "Marketing",
    dateOfBirth: "1988-03-14",
    street: "111 Elm Street",
    city: "New York City",
    state: "New York",
    zipCode: "10005"
  },
  {
    firstName: "Ava",
    lastName: "Gonzalez",
    startDate: "2022-05-01",
    department: "Human Resources",
    dateOfBirth: "1997-07-11",
    street: "555 Park Street",
    city: "Los Angeles",
    state: "California",
    zipCode: "90005"
  }
]

function EmployeeTable() {
  const [numberOfEmployeesDisplay, setNumberOfEmployeesDisplay] = useState(4);
  const [currentPage, setCurrentPage] = useState(1);
  const [orderBy, setOrderBy] = useState(null);
  const [orderDirection, setOrderDirection] = useState("asc");
  const [searchValue, setSearchValue] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [storedEmployees, setStoredEmployees] = useState([]);

  useEffect(() => {
    //setStoredEmployees(JSON.parse(localStorage.getItem('employees')))
    setStoredEmployees(employees);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [numberOfEmployeesDisplay]);

  const handleOrderChange = (column) => {
    if (orderBy === column) {
      // If the same column is clicked again, toggle the order direction
      setOrderDirection(orderDirection === "asc" ? "desc" : "asc");
    } else {
      // If a new column is clicked, set it as the order column and set the order direction to ascending
      setOrderBy(column);
      setOrderDirection("asc");
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    const filtered = storedEmployees.filter((employee) => {
      for (const property in employee) {
        if (employee[property].toString().toLowerCase().includes(value.toLowerCase())) {
          return true;
        }
      }
      return false;
    });

    setFilteredEmployees(filtered);
  };

  const orderedEmployees = storedEmployees.sort((a, b) => {
    if (orderBy) {
      const valueA = a[orderBy];
      const valueB = b[orderBy];
      if (valueA < valueB) return orderDirection === "asc" ? -1 : 1;
      if (valueA > valueB) return orderDirection === "asc" ? 1 : -1;
    }
    return 0;
  });

  const filteredAndOrderedEmployees = searchValue ? filteredEmployees : orderedEmployees;

  const totalEmployees = filteredAndOrderedEmployees.length;
  const totalPages = Math.ceil(totalEmployees / numberOfEmployeesDisplay);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startEntryIndex = (currentPage - 1) * numberOfEmployeesDisplay;
  const endEntryIndex = currentPage * numberOfEmployeesDisplay;
  const displayEmployees = filteredAndOrderedEmployees.slice(startEntryIndex, endEntryIndex);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div>
      <div className={styles.tableOptions}>
        <div>
          <label htmlFor="numbersOfEmployeesDisplay">Show </label>
          <select
            name="numbersOfEmployeesDisplay"
            id="numbersOfEmployeesDisplay"
            onChange={(e) => setNumberOfEmployeesDisplay(parseInt(e.target.value))}
            defaultValue="4"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
          <label htmlFor="numbersOfEmployeesDisplay"> entries</label>
        </div>

        <input
          type="text"
          value={searchValue}
          onChange={handleSearch}
          placeholder="Search employees"
        />
      </div>

      <table>
        <thead>
          <tr className={styles.tableHead}>
            <th  onClick={() => handleOrderChange("firstName")}>
              <div className={styles.headings}>
              <span>First Name{" "}</span>
              {orderBy === "firstName" ? (
                <span>
                  {orderDirection === "asc" ? <span>&#x25B2;</span> : <span>&#x25BC;</span>}
                </span>
              ) : (
                <span className={styles.orderingArrows}>
                  <span>&#x25B2;</span>
                  <span>&#x25BC;</span>
                </span>
              )}
              </div>
              
            </th>
            <th  onClick={() => handleOrderChange("lastName")}>
            <div className={styles.headings}>
            Last Name{" "}
              {orderBy === "lastName" ? (
                <span >
                  {orderDirection === "asc" ? <span>&#x25B2;</span> : <span>&#x25BC;</span>}
                </span>
              ) : (
                <span className={styles.orderingArrows}>
                  <span>&#x25B2;</span>
                  <span>&#x25BC;</span>
                </span>
              )}
            </div>

              
            </th>
            <th  onClick={() => handleOrderChange("startDate")}>
            <div className={styles.headings}>
            Start Date{" "}
              {orderBy === "startDate" ? (
                <span >
                  {orderDirection === "asc" ? <span>&#x25B2;</span> : <span>&#x25BC;</span>}
                </span>
              ) : (
                <span className={styles.orderingArrows}>
                  <span>&#x25B2;</span>
                  <span>&#x25BC;</span>
                </span>
              )}
            </div>

              
            </th>
            <th onClick={() => handleOrderChange("department")}>
            <div className={styles.headings}>
            Department{" "}
              {orderBy === "department" ? (
                <span >
                  {orderDirection === "asc" ? <span>▲</span> : <span>▼</span>}
                </span>
              ) : (
                <span className={styles.orderingArrows}>
                  <span>▲</span>
                  <span>▼</span>
                </span>
              )}
            </div>

              
            </th>
            <th onClick={() => handleOrderChange('dateOfBirth')}>
            <div className={styles.headings}>
            Date of Birth{' '}
              {orderBy === 'dateOfBirth' ? (
                <span >
                  {orderDirection === 'asc' ? <span>&#x25B2;</span> : <span>&#x25BC;</span>}
                </span>
              ) : (
                <span className={styles.orderingArrows}>
                  <span>&#x25B2;</span>
                  <span>&#x25BC;</span>
                </span>
              )}
            </div>

             
            </th>
            <th  onClick={() => handleOrderChange("street")}>
            <div className={styles.headings}>
            Street{" "}
              {orderBy === "street" ? (
                <span >
                  {orderDirection === "asc" ? <span>▲</span> : <span>▼</span>}
                </span>
              ) : (
                <span className={styles.orderingArrows}>
                  <span>▲</span>
                  <span>▼</span>
                </span>
              )}
            </div>

              
            </th>
            <th onClick={() => handleOrderChange("city")}>
            <div className={styles.headings}>
            City{" "}
              {orderBy === "city" ? (
                <span >
                  {orderDirection === "asc" ? <span>▲</span> : <span>▼</span>}
                </span>
              ) : (
                <span className={styles.orderingArrows}>
                  <span>▲</span>
                  <span>▼</span>
                </span>
              )}
            </div>

              
            </th>
            <th  onClick={() => handleOrderChange("state")}>
            <div className={styles.headings}>
            State{" "}
              {orderBy === "state" ? (
                <span >
                  {orderDirection === "asc" ? <span>▲</span> : <span>▼</span>}
                </span>
              ) : (
                <span className={styles.orderingArrows}>
                  <span>▲</span>
                  <span>▼</span>
                </span>
              )}
            </div>

              
            </th>
            <th  onClick={() => handleOrderChange("zipCode")}>
            <div className={styles.headings}>
            Zip Code{" "}
              {orderBy === "zipCode" ? (
                <span >
                  {orderDirection === "asc" ? <span>▲</span> : <span>▼</span>}
                </span>
              ) : (
                <span className={styles.orderingArrows}>
                  <span>▲</span>
                  <span>▼</span>
                </span>
              )}
            </div>

              
            </th>
          </tr>
        </thead>
        <tbody>
          {displayEmployees.map((employee) => (
            <tr key={employee.firstName + employee.lastName}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{formatDate(employee.startDate)}</td>
              <td>{employee.department}</td>
              <td>{formatDate(employee.dateOfBirth)}</td>
              <td>{employee.street}</td>
              <td>{employee.city}</td>
              <td>{employee.state}</td>
              <td>{employee.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.tableContainer}>
  <table>
    {/* Table content */}
  </table>

  {/* Pagination */}
  <div className={styles.pagination}>
    <div className={styles.pageInfo}>
      Showing {startEntryIndex + 1} to {Math.min(endEntryIndex, totalEmployees)} of {totalEmployees} entries
    </div>
    <div className={styles.pageNavigation}>
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`${styles.navigationButton} ${currentPage === 1 && styles.buttonDisabled}`}
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`${styles.pageButton} ${currentPage === index + 1 ? styles.activePage : ''}`}
          onClick={() => handlePageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`${styles.navigationButton} ${currentPage === totalPages && styles.buttonDisabled}`}
      >
        Next
      </button>
    </div>
  </div>
</div>

    </div>
  );
}


export default EmployeeTable;
