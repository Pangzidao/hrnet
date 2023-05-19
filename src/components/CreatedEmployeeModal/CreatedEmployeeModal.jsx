import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import styles from './CreatedEmployeeModal.module.css'
import { useState } from 'react'

const EmployeeCreatedModal = ( {isOpen, onClose} ) => {

    if (!isOpen) return null;

    return (
            <div className={styles.mainContainer}>
                <div className={styles.background}></div>
                <div className={styles.modalContainer}>
                    <p className={styles.modalText}>Employee Created!</p>
                    <FontAwesomeIcon icon={faXmark} className={styles.closeX} onClick={onClose} />
                </div>
            </div>
        )
    

    


}

export default EmployeeCreatedModal