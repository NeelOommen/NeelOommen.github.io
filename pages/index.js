import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="/src/output.css" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@800&display=swap" rel="stylesheet"></link>
      </Head>

      <main className='bg-black scroll-smooth w-full'>
        <div class="h-full w-full flex flex-col overflow-x-clip snap-y snap-mandatory">
          <div class="relative h-screen flex justify-center items-center snap-center">
              <div class="absolute w-72 md:w-80 lg:w-96 h-72 md:h-80 lg:h-96 bg-cyan-400    blur-3xl rounded-full mix-blend-lighten animate-bgAnim"></div>
              <div class="absolute w-72 md:w-80 lg:w-96 h-72 md:h-80 lg:h-96 bg-yellow-400  blur-3xl rounded-full mix-blend-lighten animate-bgAnim animation-delay-2000"></div>
              <div class="absolute w-72 md:w-80 lg:w-96 h-72 md:h-80 lg:h-96 bg-purple-400  blur-3xl rounded-full mix-blend-lighten animate-bgAnim animation-delay-4000"></div>
              <div class="absolute w-72 md:w-80 lg:w-96 h-72 md:h-80 lg:h-96 bg-pink-400    blur-3xl rounded-full mix-blend-lighten animate-bgAnim animation-delay-6000"></div>
              <div class="transform hover:scale-110 hover:text-yellow-200 text-white text-7xl md:text-8xl lg:text-9xl font-workSansFont transition duration-300">Neel<br/>Ittyerah<br/>Oommen</div>
          </div>

          <div class="relative h-screen w-screen flex justify-center items-center px-[2vw] snap-center">
              <div class="absolute w-72 md:w-80 lg:w-96 h-72 md:h-80 lg:h-96 md:right-8 bg-cyan-400   blur-2xl mix-blend-lighten animate-squareBgAnim"></div>
              <div class="absolute w-72 md:w-80 lg:w-96 h-72 md:h-80 lg:h-96 md:right-8 bg-yellow-400 blur-2xl mix-blend-lighten animate-squareBgAnim animation-delay-2000"></div>
              <div class="absolute w-72 md:w-80 lg:w-96 h-72 md:h-80 lg:h-96 md:right-8 bg-purple-400 blur-2xl mix-blend-lighten animate-squareBgAnim animation-delay-4000"></div>
              <div class="absolute w-72 md:w-80 lg:w-96 h-72 md:h-80 lg:h-96 md:right-8 bg-pink-400   blur-2xl mix-blend-lighten animate-squareBgAnim animation-delay-6000"></div>   
              <div class="absolute left-0 w-screen">
                <div class="flex flex-col md:flex-row space-y-16 md:space-y-0">
                  <div class="flex flex-col space-y-4 md:space-y-8 md:w-1/2 md:h-screen px-2 md:px-4 justify-center">
                    <div class="transform left-2 md:left-4 text-white text-7xl md:text-8xl lg:text-9xl font-workSansFont font-bold hover:text-cyan-200 transition duration-300">Hey!</div>
                    <div class="transform left-2 md:left-4 text-2xl md:text-3xl lg:text-4xl text-white">My name is <span class="hover:text-yellow-200 transition duration-300">Neel Ittyerah Oommen!</span></div>
                    <div class="text-white text-1xl lg:text-2xl">I am currently a 2nd Year Computer Science Student at <span class="transform hover:text-purple-400 duration-300">VIT Vellore.</span></div>
                    <div class="transform left-2 md:left-4 text-1xl md:text-2xl text-white">I like to code (with experience in
                      <span class="hover:text-purple-400 transform duration-300"> C</span>/
                      <span class="hover:text-cyan-400 transform duration-300">C++</span>/
                      <span class="hover:text-yellow-400 transform duration-300">Python</span>/
                      <span class="hover:text-pink-400 transform duration-300">JavaScript</span>/
                      <span class="hover:text-orange-400 transform duration-300">Java</span>
                      ),<br/> as well as playing and listening to 
                      <span class="hover:text-purple-400 transform duration-300"> music</span>, playing 
                      <span class="hover:text-cyan-400 transform duration-300"> CSGO</span> and watching 
                      <span class="hover:text-yellow-400 transform duration-300"> F1</span>.</div>
                    </div>
                  <div class="flex justify-center items-center md:w-1/2 md:h-screen">
                  <img src="/images/IMG-20220223-WA0014.jpg" class="transform w-[300px] md:w-[350px] lg:w-[480px] hover:scale-110  left-4 rounded-xl shadow-2xl duration-300"/>
                </div>
              </div>
            </div>
          </div>

          <div class="relative h-screen w-screen flex justify-center items-center px-[2vw] snap-center">
            <div class="absolute w-72 md:w-80 lg:w-96 h-72 md:h-80 lg:h-96 bg-cyan-400    blur-3xl rounded-full mix-blend-lighten animate-bgAnim"></div>
              <div class="absolute w-72 md:w-80 lg:w-96 h-72 md:h-80 lg:h-96 bg-yellow-400  blur-3xl rounded-full mix-blend-lighten animate-bgAnim animation-delay-2000"></div>
              <div class="absolute w-72 md:w-80 lg:w-96 h-72 md:h-80 lg:h-96 bg-purple-400  blur-3xl rounded-full mix-blend-lighten animate-bgAnim animation-delay-4000"></div>
              <div class="absolute w-72 md:w-80 lg:w-96 h-72 md:h-80 lg:h-96 bg-pink-400    blur-3xl rounded-full mix-blend-lighten animate-bgAnim animation-delay-6000"></div>
            <div class="text-white px-4 font-bold text-3xl md:text-5xl lg:text-7xl transform duration-300">
              More about me coming soon!
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
