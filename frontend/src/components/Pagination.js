import React from 'react'
import styles from '../styles/Pagination.module.scss'

const Pagination = () => {

    const PageNumbers = [1, 2, 3, 4, 5]

    return (<>

        <div className={styles.wrapper}>
            <div className={styles.page_list}>
                <button className={styles.pagebtn}> Prev </button>
                {PageNumbers.map((page) =>
                    <button key={page} className={styles.pagebtn}>{page}</button>
                )}
                <button className={styles.pagebtn}> Next </button>

            </div>
        </div>


    </>)
}

export default Pagination