import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen">
      <Head>
        <title>Pixel Dice NFT</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header class="text-slate-400 bg-slate-900 body-font">
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
          <button class="inline-flex items-center bg-slate-800 border-0 py-1 px-3 focus:outline-none hover:bg-slate-700 rounded text-red-700 border-2 border-red-700 mt-4 md:mt-0">Connect
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
              <h1 class="title-font sm:text-6xl text-4xl mb-4 font-medium text-black opacity-90 tracking-wider z-10">Every Dice 
                <br class="hidden lg:inline-block"/> is unique  
              </h1>
              {/* <p class="mb-8 leading-relaxed opacity-70 text-xl">These furry friends are looking for a cuddle and a new home</p> */}
              <div class="flex justify-center">
              <button class="inline-flex text-red-500 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-red-600 hover:text-white rounded text-xl font-bold tracking-wider">OpenSea</button>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section class="text-slate-400 bg-slate-900 body-font">
          <div class="container px-5 py-24 mx-auto flex flex-wrap">
            <h2 class="sm:text-3xl text-2xl text-white font-medium title-font mb-2 md:w-2/5">What are Pixel Dice?</h2>
            <div class="md:w-3/5 md:pl-6">
              <p class="leading-relaxed text-4xl">This project is a collection of NFT representing dice with different colors and specifications.</p>
              <div class="flex md:mt-4 mt-6">
              <button class="ml-4 inline-flex text-white bg-red-700 border-0 py-2 px-6 focus:outline-none hover:bg-slate-700 hover:text-white rounded text-lg">OpenSea</button>
                <a class="text-indigo-400 inline-flex items-center ml-4">Join our Discord 
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* New About */}
        <section class="text-gray-400 bg-gray-900 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">What are Pixel Dice?</h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">This project is a collection of NFT representing dice with different colors and specifications.</p>
            </div>
            <div class="flex flex-wrap -m-4 text-center">
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M8 17l4 4 4-4m-4-5v9"></path>
                    <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                  </svg>
                  <h2 class="title-font font-medium text-3xl text-white">10K</h2>
                  <p class="leading-relaxed">Total Supply</p>
                </div>
              </div>
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                  </svg>
                  <h2 class="title-font font-medium text-3xl text-white">@ADMIN</h2>
                  <p class="leading-relaxed">Artist</p>
                </div>
              </div>
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                    <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                  </svg>
                  <h2 class="title-font font-medium text-3xl text-white">128</h2>
                  <p class="leading-relaxed">Total Specifications</p>
                </div>
              </div>
              <div class="p-4 md:w-1/4 sm:w-1/2 w-full">
                <div class="border-2 border-gray-800 px-4 py-6 rounded-lg">
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="text-indigo-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <h2 class="title-font font-medium text-3xl text-white">0.01</h2>
                  <p class="leading-relaxed">Floor Price</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* team members */}
        <section class="text-slate-400 bg-slate-900 body-font">
          <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-col text-center w-full mb-20">
              <h1 class="text-2xl font-medium title-font mb-4 text-white">OUR TEAM</h1>
              <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Meet the wonderful team behind these pixelated dice</p>
            </div>
            <div class="flex flex-wrap -m-4 justify-around">
              <div class="p-4 lg:w-1/4 md:w-1/2">
                <div class="h-full flex flex-col items-center text-center">
                  <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="https://dummyimage.com/200x200"/>
                  <div class="w-full">
                    <h2 class="title-font font-medium text-lg text-white">Arm Production</h2>
                    <h3 class="text-slate-500 mb-3">CEO</h3>
                    <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                    <span class="inline-flex">
                      <a class="text-slate-700">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-slate-700">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-slate-700">
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
                    <h2 class="title-font font-medium text-lg text-white">CrypticAlex</h2>
                    <h3 class="text-slate-500 mb-3">Server Manager</h3>
                    <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                    <span class="inline-flex">
                      <a class="text-slate-700">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-slate-700">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-slate-700">
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
                    <h2 class="title-font font-medium text-lg text-white">SpinSpinFrog</h2>
                    <h3 class="text-slate-500 mb-3">Marketing</h3>
                    <p class="mb-4">DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                    <span class="inline-flex">
                      <a class="text-slate-700">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-slate-700">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-slate-700">
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
                  <img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src="/twitter-profile.jpg"/>
                  <div class="w-full">
                    <h2 class="title-font font-medium text-lg text-white">Alex Hernandez</h2>
                    <h3 class="text-slate-500 mb-3">Website Creator</h3>
                    <p class="mb-4"></p>
                    <span class="inline-flex">
                      <a class="text-slate-700">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-slate-700">
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" class="w-5 h-5" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a class="ml-2 text-slate-700">
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
