import {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AiOutlineDoubleLeft, AiOutlineDoubleRight, AiOutlineLeft, AiOutlineRight} from 'react-icons/ai'
import { setPage } from '../features/filter/filterSlice'
import styles from '../styles/Pagination.module.scss'

const Pagination = ({totalProducts}) => {
    const currentPage = useSelector((state) => state.filter.page)
    const limit = useSelector((state) => state.filter.limit)
    const totalPages = Math.ceil(totalProducts / limit)
    const PageNumbers = [];
    
    for(let i = 1; i <= totalPages; i++){
        PageNumbers.push(i);
    }   

    const dispatch = useDispatch()
    const [pressed, setPressed] = useState(false)

    return (<>

    {PageNumbers.length > 1 &&
        <main className={styles.wrapper}>
            <section className={styles.page_list}>
                
            <button className={styles.arrowbtn} onClick={() => dispatch(setPage(1))}><AiOutlineDoubleLeft /></button>
            
            <button onClick={() => currentPage === 1 ? dispatch(setPage(1)) : dispatch(setPage(currentPage - 1))} className={styles.arrowbtn}> <AiOutlineLeft /> </button>
            
            {PageNumbers.length >= 5 && pressed === false ? 
            <>
            {[1,2,3,4,5].map((number) => 
            <button key={number} className={ currentPage === number ? styles.pagebtn_active : styles.pagebtn} onClick={() => dispatch(setPage(number))}>{number}</button>) } 
            <button className={styles.pagebtn} onClick={() => setPressed(true)}>...</button>
            </>
            :
            PageNumbers.map((number) =>
                <button  onClick={() => dispatch(setPage(number))} key={number} className={currentPage === number ? styles.pagebtn_active : styles.pagebtn}>{number}</button>
            )}
                
            <button onClick={() => currentPage === totalPages ? dispatch(setPage(totalPages)) : dispatch(setPage(currentPage + 1))} className={styles.arrowbtn}> <AiOutlineRight /> </button>

            <button className={styles.arrowbtn} onClick={() => dispatch(setPage(totalPages))}><AiOutlineDoubleRight /></button>
            </section>
        </main>
    }

    </>)
}

export default Pagination