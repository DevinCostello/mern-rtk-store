import {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
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
                <button onClick={() => currentPage === 1 ? dispatch(setPage(1)) : dispatch(setPage(currentPage - 1))} className={styles.pagebtn}> Prev </button>
            
            {PageNumbers.length >= 5 && pressed === false ? 
            <>
            {[1,2,3,4,5].map((number) => 
            <button key={number} className={styles.pagebtn} onClick={() => dispatch(setPage(number))}>{number}</button>) } 
            <button className={styles.pagebtn} onClick={() => setPressed(true)}>...</button>
            </>
            :
            PageNumbers.map((number) =>
                <button  onClick={() => dispatch(setPage(number))} key={number} className={styles.pagebtn}>{number}</button>
            )}
                

                <button onClick={() => currentPage === totalPages ? dispatch(setPage(totalPages)) : dispatch(setPage(currentPage + 1))} className={styles.pagebtn}> Next </button>
            </section>
        </main>
    }

    </>)
}

export default Pagination