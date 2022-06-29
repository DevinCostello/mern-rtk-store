import React, { useState } from 'react';
import styles from '../styles/Filters.module.scss'
import { FaCaretDown } from 'react-icons/fa'

function Filters() {

    const filters = ['Category', 'Price', 'Size', 'Color']

    const category = ['T-Shirt, Hat, Hoodie']
    const price = [25, 50, 75, 99]
    const color = ["Red", "Green", "Blue"]
    const size = ['Small', "Medium", "Large"]


    const [isOpen, setIsOpen] = useState(false)

    return (

        <>


            <div className={styles.wrapper}>

                <div className={styles.list}>
                    <ul className={styles.list}>
                        {filters.map((filter) => 
                            <li className={styles.item}>
                                <p>{filter.toUpperCase()}</p>
                                <FaCaretDown className={styles.arrow} size={24} />
                            </li>

                           
                        )}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Filters