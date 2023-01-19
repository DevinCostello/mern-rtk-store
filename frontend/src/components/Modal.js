import styles from "../styles/Modal.module.scss";
import { useSelector, useDispatch } from "react-redux";

const dispatch = useDispatch()

const Modal = () => {
const modalContent = useSelector((state) => state.modal.content)

  return (<>
    <div className={styles.modal_container}>
        <div className={styles.modal}>
          
            {modalContent}

        <button onClick ={() => dispatch(closeModal())}></button>
            
        </div>
    </div>
    
  </>)
}

export default Modal