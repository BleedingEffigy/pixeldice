import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <Head>
        <title>Pixel Dice NFT</title>
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
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>
      </header>

      <main className="flex flex-col w-full flex-1 text-center">
        {/* Hero */}
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

        {/* team members */}
        <section class="text-gray-400 bg-gray-900 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
              <h1 class="text-2xl font-medium title-font mb-4 text-white">OUR TEAM</h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
            </div>
            <div class="flex flex-wrap -m-4">
              <div class="p-4 lg:w-1/4 md:w-1/2">
                <div class="h-full flex flex-col items-center text-center">
                  <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/200x200"/>
                  <div class="w-full">
                    <h2 class="title-font font-medium text-lg text-white">Alper Kamu</h2>
                    <h3 class="text-gray-500 mb-3">UI Developer</h3>
                    <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                    <span class="inline-flex">
                      <a class="text-gray-700">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-gray-700">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-gray-700">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="p-4 lg:w-1/4 md:w-1/2">
                <div class="h-full flex flex-col items-center text-center">
                  <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/201x201"/>
                  <div class="w-full">
                    <h2 class="title-font font-medium text-lg text-white">Holden Caulfield</h2>
                    <h3 class="text-gray-500 mb-3">UI Developer</h3>
                    <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                    <span class="inline-flex">
                      <a class="text-gray-700">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-gray-700">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-gray-700">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="p-4 lg:w-1/4 md:w-1/2">
                <div class="h-full flex flex-col items-center text-center">
                  <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/202x202"/>
                  <div class="w-full">
                    <h2 class="title-font font-medium text-lg text-white">Atticus Finch</h2>
                    <h3 class="text-gray-500 mb-3">UI Developer</h3>
                    <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                    <span class="inline-flex">
                      <a class="text-gray-700">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-gray-700">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-gray-700">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              <div class="p-4 lg:w-1/4 md:w-1/2">
                <div class="h-full flex flex-col items-center text-center">
                  <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/203x203"/>
                  <div class="w-full">
                    <h2 class="title-font font-medium text-lg text-white">Henry Letham</h2>
                    <h3 class="text-gray-500 mb-3">UI Developer</h3>
                    <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                    <span class="inline-flex">
                      <a class="text-gray-700">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-gray-700">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-gray-700">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
