import styles from "../styles/Modal.module.scss";
import { useSelector, useDispatch } from "react-redux";


const Modal = () => {
const modalContent = useSelector((state) => state.modal.content)





  return (<>
    <div className={styles.modal_container}>
        <div className={styles.modal}>
            {modalContent}

        <button onClick ={() => console.log("eat my shit")}></button>
            
        </div>
    </div>
    
  </>)
}

export default Modal