  import React from 'react'
 import Header  from '../components/Header'
 import Footer  from '../components/Footer'
 import Navbar from '../components/Navbar'
 import card from "../assets/flags.jpg"

 const Main = () => {
  return (
    <div class="card text-bg-dark m-2 p-1">
      <img src={card} class="card-img-top opacity-50" height={600} alt="..." />
      <div class="card-img-overlay text-center">
        <h1 class="card-title">About Flags</h1>
        <p class="card-text fw-semibold">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum officia aspernatur voluptas eius natus illo voluptatem error exercitationem quos quaerat?</p>
        <p class="card-text fw-semibold"><small>Lets go</small></p>
      </div>
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
        <Footer></Footer>
    </div>
  )
}

export default HomePage
