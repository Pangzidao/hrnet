import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import EmployeeCreatedModal from "../CreatedEmployeeModal/CreatedEmployeeModal";

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
    <div>
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Start Date:
          <DatePicker
            selected={formData.startDate}
            onChange={handleStartDateChange}
            dateFormat="MM/dd/yyyy"
            required
          />
        </label>
        <br />
        <label>
          Department:
          <select
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
        <label>          Date of Birth:
          <DatePicker
            selected={formData.dateOfBirth}
            onChange={handleDateOfBirthChange}
            dateFormat="MM/dd/yyyy"
            required
          />
        </label>
        <br />
        <label>
          Street:
          <input
            type="text"
            name="street"
            value={formData.street}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          City:
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          State:
          <select
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
        <label>
          Zip Code:
          <div>
            <input
              type="number"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              onClick={() =>
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  zipCode: (parseInt(prevFormData.zipCode) || 0) + 1
                }))
              }
            >
              &#x25B2;
            </button>
            <button
              type="button"
              onClick={() =>
                setFormData((prevFormData) => ({
                  ...prevFormData,
                  zipCode: (parseInt(prevFormData.zipCode) || 0) - 1
                }))
              }
            >
              &#x25BC;
            </button>
          </div>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      {employeeCreated && <EmployeeCreatedModal />}
    </div>
  );
};

export default CreateEmployeeForm;

