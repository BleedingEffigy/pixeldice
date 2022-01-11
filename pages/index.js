import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header class="text-gray-400 bg-gray-900 body-font">
        <div class="container mx-auto flex flex-wrap flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-black mb-4 md:mb-0">
          <img src='/inkpx-word-art.png' class="h-16"/>
            <span class="ml-3 text-xl"></span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-red-300 font-medium justify-center">
            <a class="mr-5 hover:text-black">About</a>
            <a class="mr-5 hover:text-black">Contract</a>
            <a class="mr-5 hover:text-black">OpenSea</a>
          </nav>
          <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-red-700 border-2 border-red-700 mt-4 md:mt-0">Connect
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        {/* bg Image gets defined here */}
        <section class="text-black bg-transparent body-font w-[100vw] bg-cover bg-fixed bg-no-repeat" style={{backgroundImage: 'url(/Luminary.svg)'}}>
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img class="object-cover object-center rounded" alt="hero" src="pixeldiceavie.png"/>
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 class="title-font sm:text-6xl text-4xl mb-4 font-medium text-black opacity-90 tracking-wider z-10">Every Pixel 
                <br class="hidden lg:inline-block"/> is unique
              </h1>
              {/* <p class="mb-8 leading-relaxed opacity-70 text-xl">These furry friends are looking for a cuddle and a new home</p> */}
              <div class="flex justify-center">
                <button class="inline-flex text-red-500 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-red-600 hover:text-white rounded text-xl font-bold tracking-wider">Mint</button>
                <button class="ml-4 inline-flex text-white bg-red-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">OpenSea</button>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
