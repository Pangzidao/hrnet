import React from 'react';
import { useState, useEffect } from 'react'
import styles from "./EmployeeTable.module.css"
import mockedEmployees from '../../employees';

function EmployeeTable() {
  const [numberOfEmployeesDisplay, setNumberOfEmployeesDisplay] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [orderBy, setOrderBy] = useState(null);
  const [orderDirection, setOrderDirection] = useState("asc");
  const [searchValue, setSearchValue] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [storedEmployees, setStoredEmployees] = useState([]);

  let useMockedEmployees = true;

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('employees'));
    useMockedEmployees ? setStoredEmployees(mockedEmployees) :
      storedData ? setStoredEmployees(storedData) : setStoredEmployees([])
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

  const orderedEmployees = [...storedEmployees].sort((a, b) => {
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
  console.log(displayEmployees)
  return (
    <div>
      <div className={styles.tableOptions}>
        <div>
          <label htmlFor="numbersOfEmployeesDisplay">Show </label>
          <select
            name="numbersOfEmployeesDisplay"
            id="numbersOfEmployeesDisplay"
            onChange={(e) => setNumberOfEmployeesDisplay(parseInt(e.target.value))}
            defaultValue="5"
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
            <th onClick={() => handleOrderChange("firstName")}>
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
            <th onClick={() => handleOrderChange("lastName")}>
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
            <th onClick={() => handleOrderChange("startDate")}>
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
            <th onClick={() => handleOrderChange("street")}>
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
            <th onClick={() => handleOrderChange("state")}>
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
            <th onClick={() => handleOrderChange("zipCode")}>
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
          {displayEmployees.map((employee, index) => (
            <tr key={index}>
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
