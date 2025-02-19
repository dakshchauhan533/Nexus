import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar.jsx'
import Messagecontainer from '../../components/messagecontainer/Messagecontainer.jsx'
const Home = () => {
  return (
    <div className='flex sm:h-[455px] md:h-[550px] rounded-lg  overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter bg-opacity-0 backdrop-blur-lg'>

      <Sidebar/>
      <Messagecontainer/>
      
    </div>
  )
}

export default Home
