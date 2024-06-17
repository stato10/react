  import React from 'react'
 import Header  from '../components/Header'
 import Footer  from '../components/Footer'
 import Navbar from '../components/Navbar'

 const Main = () => {
  return (
    <div >

      <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia consectetur at debitis quasi? Atque, aperiam.</p>
      
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
