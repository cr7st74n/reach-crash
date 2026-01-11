import React from 'react'
import Hero from "../components/hero";
import Developers from '../components/Developers.jsx';
import Jobs from '../components/jobs.jsx';
import ViewAllJobs from '../components/ViewAllJobs.jsx';

const HomePage = () => {
  return (
    <div>
      <>
        <Hero title= "Cr7ston Programmer" subtitle= "Este es mi primer demo como React Programmer" />

            {/* <!-- Developers and Employers --> */}
        <Developers />

        {/* <!-- Jobs Section --> */}

        <Jobs />  

        <ViewAllJobs />
      </>
    </div>
  )
}

export default HomePage
