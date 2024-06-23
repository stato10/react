  import React from 'react'
 import Header  from '../components/Header'
 import Footer  from '../components/Footer'
 import Navbar from '../components/Navbar'
 import card from "../assets/flags.jpg"
 import man from "../assets/man.jpg"

 const Main = () => {
  return (
    <div class="max-w-6xl px-6 py-10 mx-auto">



       

        <main class="relative z-20 w-full mt-8 md:flex md:items-center xl:mt-12">
            <div class="absolute w-full bg-blue-600 -z-10 md:h-96 rounded-2xl"></div>
            
            <div class="w-full p-6 bg-blue-600 md:flex md:items-center rounded-2xl md:bg-transparent md:p-0 lg:px-12 md:justify-evenly">
                <img class="h-24 w-24 md:mx-6 rounded-full object-cover shadow-md md:h-[32rem] md:w-80 lg:h-[36rem] lg:w-[26rem] md:rounded-2xl" src={man} alt="client photo" />
                
                <div class="mt-2 md:mx-6">
                    <div>
                        <p class="text-xl font-medium tracking-tight text-white">about flags</p>
                    </div>

                    <p class="mt-4 text-lg leading-relaxed text-white md:text-xl"> “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quibusdam ducimus libero ad tempora doloribus expedita laborum saepe voluptas perferendis delectus assumenda”.</p>
                    
                </div>
            </div>
        </main>
    </div>
  )
}

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <Header></Header>
        <Main>

        </Main>
    </div>
  )
}

export default HomePage
