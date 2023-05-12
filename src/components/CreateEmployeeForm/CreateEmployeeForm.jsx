import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import EmployeeCreatedModal from "../CreatedEmployeeModal/CreatedEmployeeModal";
import styles from "./CreateEmployee.module.css"

const states = [
  // List of American states
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
  'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts',
  'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina',
  'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

const departments = ['Sales', 'Marketing', 'Legal', 'Engineering', 'Human Resources'];

const CreateEmployeeForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    startDate: null,
    department: '',
    dateOfBirth: null,
    street: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const [employeeCreated, setEmployeeCreated] = useState (false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleStartDateChange = (date) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      startDate: date
    }));
  };

  const handleDateOfBirthChange = (date) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      dateOfBirth: date
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const employees = JSON.parse(localStorage.getItem('employees')) || [];
    const updatedEmployees = [...employees, formData];
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    setFormData({
      firstName: '',
      lastName: '',
      startDate: null,
      department: '',
      dateOfBirth: null,
      street: '',
      city: '',
      state: '',
      zipCode: ''
    });
    setEmployeeCreated(true)
  };

  return (
    <div className={styles.componentMainContainer}>
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          First Name
          <br />
          <input
            className={styles.input}
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label className={styles.label}>
          Last Name
          <br />
          <input
            className={styles.input}
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label className={styles.label}>          
          Date of Birth
          <br />
          <DatePicker
            className={styles.input}
            selected={formData.dateOfBirth}
            onChange={handleDateOfBirthChange}
            dateFormat="MM/dd/yyyy"
            required
          />
        </label>
        <br />
        <label className={styles.label}>
          Start Date
          <br />
          <DatePicker
            className={styles.input}
            selected={formData.startDate}
            onChange={handleStartDateChange}
            dateFormat="MM/dd/yyyy"
            required
          />
        </label>
        <br />
        <div className={styles.addressContainer}>
          <h2>Address</h2>
        <label className={styles.label}>
          Street
          <br />
          <input
            className={styles.input}
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            required
          />
        </label >
        <br />
        <label>
          City
          <br />
          <input
            className={styles.input}
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label className={styles.label}>
          State
          <br />
          <select
            className={styles.input}
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          >
            <option value="">Select a state</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label className={styles.label}>
          Zip Code
          <br />
          <div>
            <input
              className={styles.input}
              type="number"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </div>
        </label>
        </div>
        <label className={styles.label}>
          Department
          <br />
          <select
            className={styles.input}
            name="department"
            value={formData.department || departments[0]}
            onChange={handleChange}
            required
          >
            {departments.map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>
        </label>
        
        <br />
        <button className={styles.submitButton} type="submit">Save</button>
      </form>
      {employeeCreated && <EmployeeCreatedModal />}
    </div>
  );
};

export default CreateEmployeeForm;

