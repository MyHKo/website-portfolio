import styles from './hero.module.less'

function HeroSection() {

    return (
        <section className={styles.gradient}>
            <div className={styles.half}></div>
            <h1 className={styles.text}>Hello</h1>
        </section>
    )
}

export default HeroSection
