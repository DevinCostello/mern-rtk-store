import React from 'react'
import styles from '../styles/Header.module.scss'

function Header() {

  return (
    <>
    <div>
        <ul className={styles.header}>
            <li className="item">
                <h3>Home</h3>
            </li>

            <li className="item">
            <h3>Products</h3>
            </li>

            <li className="item">
            <h3>Cart</h3>
            </li>
        </ul>
    </div>
    </>
    )
}

export default Header