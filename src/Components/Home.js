import React from 'react'
import Navbar from './Navbar'

function Home() {
  // let greetingMsg=useLocation();
  return (
    <div>
      <Navbar></Navbar>
      <h1>home</h1>
      {/* <h3>{greetingMsg && greetingMsg.state && greetingMsg.state.greeting}</h3> */}
    </div>
  )
}

export default Home
