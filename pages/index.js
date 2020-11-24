import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>First Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className={styles.main_container}>
        <header className={styles.header}>
          <a href="">Front-end</a>

          <a href="">Back-end</a>

          <a href="">UI</a>
          
          <a href="">UX</a>
        </header>

        <section className={styles.content_container}>
          <div style={{height: "900px"}}></div>
        </section>
      </div>

      <section className={styles.avatar_container}>
        <div className={styles.avatar}>

        </div>

        <h2>Matheus Santos</h2>

        <div className={styles.personal_info}>

        </div>
      </section>
    </div>
  )
}
