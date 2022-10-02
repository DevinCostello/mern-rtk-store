import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from '../styles/Pagination.module.scss'

const Pagination = () => {

    const PageNumbers = [1, 2, 3, 4, 5]

    return (<>

        <div className={styles.wrapper}>
            <div className={styles.page_list}>
                <button onClick={() => console.log('hello')} className={styles.pagebtn}> Prev </button>
                {PageNumbers.map((number) =>
                    <button onClick={() => console.log('hello')} key={number} className={styles.pagebtn}>{number}</button>
                )}
                <button onClick={() => console.log('hello')} className={styles.pagebtn}> Next </button>

            </div>
        </div>


    </>)
}

export default Pagination