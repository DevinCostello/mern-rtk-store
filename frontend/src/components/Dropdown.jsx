import styles from '../styles/Dropdown.module.scss'


const Dropdown = ({ isOpen }) => {



    return (
    <ul className={ isOpen === true ? styles.active : styles.wrapper}>
        <li>User</li>
        <li>Cart</li>
        <li>Log Out</li>
    </ul>
  )



}

export default Dropdown