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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

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

  const [errorMessages, setErrorMessages] = useState({
    firstName: '',
    lastName: '',
    startDate: '',
    department: '',
    dateOfBirth: '',
    street: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const validateForm = () => {
    let isValid = true;
    const errors = {
      firstName: '',
      lastName: '',
      startDate: '',
      department: '',
      dateOfBirth: '',
      street: '',
      city: '',
      state: '',
      zipCode: ''
    };

    if (formData.firstName.trim() === '') {
      errors.firstName = 'First name is required.';
      isValid = false;
    }

    if (formData.lastName.trim() === '') {
      errors.lastName = 'Last name is required.';
      isValid = false;
    }

    if (formData.startDate === null) {
      errors.startDate = 'Start date is required.';
      isValid = false;
    }

    if (formData.department === '') {
      errors.department = 'Department is required.';
      isValid = false;
    }

    if (formData.dateOfBirth === null) {
      errors.dateOfBirth = 'Date of birth is required.';
      isValid = false;
    }

    if (formData.street === '') {
      errors.street = 'Street is required.';
      isValid = false;
    }

    if (formData.city === '') {
      errors.city = 'City is required.';
      isValid = false;
    }

    if (formData.state === '') {
      errors.state = 'State is required.';
      isValid = false;
    }

    if (formData.zipCode === '') {
      errors.zipCode = 'Zip code is required.';
      isValid = false;
    }
    setErrorMessages(errors);

    return isValid;
  };



  const [employeeCreated, setEmployeeCreated] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));

    validateForm(); // Call the validation function

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


    if (validateForm()) {
      // Form is valid, proceed with form submission
      setIsModalOpen(true);

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
      setEmployeeCreated(true);
    } else {
      // Form is not valid, display error messages
      // You can customize the error message display according to your needs
      console.log('Form is not valid:', errorMessages);
    }
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
          />
          <div className={styles.error}>{errorMessages.firstName}</div>
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
          />
          <div className={styles.error}>{errorMessages.lastName}</div>

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
          />
          <div className={styles.error}>{errorMessages.dateOfBirth}</div>

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
          />
          <div className={styles.error}>{errorMessages.startDate}</div>

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
            />
            <div className={styles.error}>{errorMessages.street}</div>

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
            />
            <div className={styles.error}>{errorMessages.city}</div>

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
            >
              <option value="">Select a state</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
            <div className={styles.error}>{errorMessages.state}</div>

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
              />
            </div>
            <div className={styles.error}>{errorMessages.zipCode}</div>

          </label>
        </div>
        <label className={styles.label}>
          Department
          <br />
          <select
            className={styles.input}
            name="department"
            value={formData.department}
            onChange={handleChange}
          >
            <option value="">Select a department</option>
            {departments.map((department) => (
              <option key={department} value={department}>
                {department}
              </option>
            ))}
          </select>
          <div className={styles.error}>{errorMessages.department}</div>

        </label>

        <br />
        <button className={styles.submitButton} type="submit">Save</button>
      </form>
      <EmployeeCreatedModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default CreateEmployeeForm;

