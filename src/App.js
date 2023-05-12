import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project' // you can create your own api.
function App() {
  const [loading, setLoading]  = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs  = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs) // update setter function with api fetch result.
    setLoading(false); // update setter function
  }

  //call fetchJobs call inside useEffect for rendering;
  // provide dependency array [] to prevent unnessary re-renders;
  useEffect(()=>{
    fetchJobs();
  },[])

  // if loading is true, return loading ... text and we will return jobs.
 if (loading) {
  return (
    <section className='section loading'>
      <h1>loading...</h1>
    </section>
  );
 }

 const {company, dates, duties, title} = jobs[value];
  return(
    <section className='section'>
      <div className='title'>
        <h2>experience</h2>
        <div className='underline'></div>
      </div>
      <div className='jobs-center'>
        {/* {btn-container} */}
        {/* {job info} */}
        <article className='job-info'>
          <h3>{title}</h3>
        </article>
      </div>


    </section>

  )
  }
export default App;
