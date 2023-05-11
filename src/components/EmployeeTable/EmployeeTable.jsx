import React from 'react';
import './EmployeeTable.css'; // import the CSS file
import { useState, useEffect } from 'react'



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
  const [orderBy, setOrderBy] = useState(null);
  const [orderDirection, setOrderDirection] = useState("asc");
  const [searchValue, setSearchValue] = useState('');
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [storedEmployees, setStoredEmployees] = useState([])

  console.log(storedEmployees);

  useEffect(() => {
    //setStoredEmployees(JSON.parse(localStorage.getItem('employees')))
    setStoredEmployees(employees)
  }, []);

  let employeesDisplay = []
  storedEmployees? employeesDisplay = storedEmployees.slice(0, numberOfEmployeesDisplay) : employeesDisplay = []
   

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


  const orderedEmployeesDisplay = employeesDisplay.sort((a, b) => {
    if (orderBy) {
      const valueA = a[orderBy];
      const valueB = b[orderBy];
      if (valueA < valueB) return orderDirection === "asc" ? -1 : 1;
      if (valueA > valueB) return orderDirection === "asc" ? 1 : -1;
    }
    return 0;
  });

  const displayEmployees = searchValue ? filteredEmployees : orderedEmployeesDisplay;

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={handleSearch}
        placeholder="Search employees"
      />
      <label htmlFor="cars">Show </label>
      <select
        name="cars"
        id="cars"
        onChange={(e) => setNumberOfEmployeesDisplay(parseInt(e.target.value))}
        defaultValue="4"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
      <label htmlFor="cars"> entries</label>
      <table>
        <thead>
          <tr>
            <th>
              First Name{" "}
              {orderBy === "firstName" ? (
                <span onClick={() => handleOrderChange("firstName")}>
                  {orderDirection === "asc" ? <span>&#x25B2;</span> : <span>&#x25BC;</span>}
                </span>
              ) : (
                <span onClick={() => handleOrderChange("firstName")}>
                  <span>&#x25B2;</span>
                  <span>&#x25BC;</span>
                </span>
              )}
            </th>
            <th>
              Last Name{" "}
              {orderBy === "lastName" ? (
                <span onClick={() => handleOrderChange("lastName")}>
                  {orderDirection === "asc" ? <span>&#x25B2;</span> : <span>&#x25BC;</span>}
                </span>
              ) : (
                <span onClick={() => handleOrderChange("lastName")}>
                  <span>&#x25B2;</span>
                  <span>&#x25BC;</span>
                </span>
              )}
            </th>
            <th>
              Start Date{" "}
              {orderBy === "startDate" ? (
                <span onClick={() => handleOrderChange("startDate")}>
                  {orderDirection === "asc" ? <span>&#x25B2;</span> : <span>&#x25BC;</span>}
                </span>
              ) : (
                <span onClick={() => handleOrderChange("startDate")}>
                  <span>&#x25B2;</span>
                  <span>&#x25BC;</span>
                </span>
              )}
            </th>
            <th>
              Department{" "}
              {orderBy === "department" ? (
                <span onClick={() => handleOrderChange("department")}>
                  {orderDirection === "asc" ? <span>▲</span> : <span>▼</span>}
                </span>
              ) : (
                <span onClick={() => handleOrderChange("department")}>
                  <span>▲</span>
                  <span>▼</span>
                </span>
              )}
            </th>
            <th>
              Date of Birth{' '}
              {orderBy === 'dateOfBirth' ? (
                <span onClick={() => handleOrderChange('dateOfBirth')}>
                  {orderDirection === 'asc' ? <span>&#x25B2;</span> : <span>&#x25BC;</span>}
                </span>
              ) : (
                <span onClick={() => handleOrderChange('dateOfBirth')}>
                  <span>&#x25B2;</span>
                  <span>&#x25BC;</span>
                </span>
              )}
            </th>
            <th>
              Street{" "}
              {orderBy === "street" ? (
                <span onClick={() => handleOrderChange("street")}>
                  {orderDirection === "asc" ? <span>▲</span> : <span>▼</span>}
                </span>
              ) : (
                <span onClick={() => handleOrderChange("street")}>
                  <span>▲</span>
                  <span>▼</span>
                </span>
              )}
            </th>
            <th>
              City{" "}
              {orderBy === "city" ? (
                <span onClick={() => handleOrderChange("city")}>
                  {orderDirection === "asc" ? <span>▲</span> : <span>▼</span>}
                </span>
              ) : (
                <span onClick={() => handleOrderChange("city")}>
                  <span>▲</span>
                  <span>▼</span>
                </span>
              )}
            </th>
            <th>
              State{" "}
              {orderBy === "state" ? (
                <span onClick={() => handleOrderChange("state")}>
                  {orderDirection === "asc" ? <span>▲</span> : <span>▼</span>}
                </span>
              ) : (
                <span onClick={() => handleOrderChange("state")}>
                  <span>▲</span>
                  <span>▼</span>
                </span>
              )}
            </th>
            <th>
              Zip Code{" "}
              {orderBy === "zipCode" ? (
                <span onClick={() => handleOrderChange("zipCode")}>
                  {orderDirection === "asc" ? <span>▲</span> : <span>▼</span>}
                </span>
              ) : (
                <span onClick={() => handleOrderChange("zipCode")}>
                  <span>▲</span>
                  <span>▼</span>
                </span>
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {displayEmployees.map((employee) => (
            <tr key={employee.firstName + employee.lastName}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{<td>{formatDate(employee.startDate)}</td>}</td>
              <td>{employee.department}</td>
              <td>{<td>{formatDate(employee.dateOfBirth)}</td>}</td>
              <td>{employee.street}</td>
              <td>{employee.city}</td>
              <td>{employee.state}</td>
              <td>{employee.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


export default EmployeeTable;
