import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import styles from './CreatedEmployeeModal.module.css'
import { useState } from 'react'

function EmployeeCreatedModal(){

    function handleCloseModal(){
        window.location.reload();
    }   

        return (
            <div className={styles.mainContainer}>
                <div className={styles.background}></div>
                <div className={styles.modalContainer}>
                    <p className={styles.modalText}>Employee Created!</p>
                    <FontAwesomeIcon icon={faXmark} className={styles.closeX} onClick={handleCloseModal}/>        
                </div>
            </div>
        )
    
    
}

export default  EmployeeCreatedModal