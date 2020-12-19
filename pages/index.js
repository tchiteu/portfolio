import Head from 'next/head'

export default function Home() {
  return (
    <div class="container">
      <Head>
        <title>Matheus Santos</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div class="main_container">
        <header class="header">
          <a href="">Front-end</a>

          <a href="">Back-end</a>

          <a href="">UI</a>
          
          <a href="">UX</a>
        </header>

        <section class="content_container">
          <div style={{height: "900px"}}></div>
        </section>
      </div>

      <section class="avatar_container">
        <div class="avatar">

        </div>

        <h2>Matheus Santos</h2>

        <div class="personal_info">

        </div>
      </section>
    </div>
  )
}
