import styles from '../styles/FilterSkeleton.module.scss'


const FilterSkeleton = () => {


  return (


    <main className={styles.wrapper}>

    <section className={styles.filtergroup}>
    <div className={styles.header}></div>
    <div className={styles.filter}></div>
    <div className={styles.filter}></div>
    <div className={styles.filter}></div>
    </section>

    <section className={styles.filtergroup}>
    <div className={styles.header}></div>
    <div className={styles.filter}></div>
    <div className={styles.filter}></div>
    <div className={styles.filter}></div>
    </section>

    <section className={styles.filtergroup}>
    <div className={styles.header}></div>
    <div className={styles.filter}></div>
    <div className={styles.filter}></div>
    <div className={styles.filter}></div>
    </section>

    <section className={styles.filtergroup}>
    <div className={styles.header}></div>
    <div className={styles.filter}></div>
    <div className={styles.filter}></div>
    </section>
    


    </main>


  )
}

export default FilterSkeleton