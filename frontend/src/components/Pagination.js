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


    return (<>

    {PageNumbers.length > 1 &&
        <div className={styles.wrapper}>
            <div className={styles.page_list}>
                <button onClick={() => currentPage === 1 ? dispatch(setPage(1)) : dispatch(setPage(currentPage - 1))} className={styles.pagebtn}> Prev </button>
                {PageNumbers.map((number) =>
                    <button onClick={() => dispatch(setPage(number))} key={number} className={styles.pagebtn}>{number}</button>
                )}
                <button onClick={() => currentPage === totalPages ? dispatch(setPage(totalPages)) : dispatch(setPage(currentPage + 1))} className={styles.pagebtn}> Next </button>
            </div>
        </div>
    }

    </>)
}

export default Pagination