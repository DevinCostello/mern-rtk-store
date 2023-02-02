import styles from "../styles/Modal.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "../features/modal/modalSlice";


const Modal = () => {
const dispatch = useDispatch()
const modalContent = useSelector((state) => state.modal.content)
const isOpen = useSelector((state) => state.modal.isOpen)

  return (<>
    <main className={ isOpen ? styles.container : styles.closed}>
        <section className={styles.modal}>
          <h3>
            {modalContent}
          </h3>
        <button onClick ={() => dispatch(closeModal())}>Close</button>
        </section>
    </main>
    
  </>)
}

export default Modal