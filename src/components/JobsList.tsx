import { IJob, IJobs } from "@/interfaces";
import { NextPage } from "next";
import { FormEventHandler, SyntheticEvent, useState } from "react";
import JobCard from "./JobCard";


// Define the Jobs component to be rendered by its Parent, JobPage
const JobsList: NextPage<IJobs> = ({ jobs }) => {
  const [companyName, setCompanyName] = useState<string>('');
  const [filteredJobs, setFilteredJobs] = useState<IJob[]>(jobs);

  const handleFilterByCompany = (e: SyntheticEvent) => {
    e.preventDefault();
    const newFilteredJobs = jobs.filter(job => job.companyName.includes(companyName));
    setFilteredJobs(newFilteredJobs);    
  }

  const handleResetFilters = () => {
    setCompanyName('');
    setFilteredJobs(jobs);
  }

  return (
    <main className="h-screen overflow-hidden">
      <h1 className="text-red-700">
        Take a look on these jobs
      </h1>
      <section>
        <form onSubmit={handleFilterByCompany} className="">
          <input 
            className="bg-slate-300 mx-2"
            type="text" 
            name="companyName" 
            id="companyName"
            placeholder="FIlter by company name"
            value={companyName}
            onChange={ (e) => setCompanyName(e.target.value) }
          />
          <button type="submit">Filter by Company</button>
          <button onClick={handleResetFilters}>Reset Filters</button>
        </form>
      </section>
      <section className="mx-auto">   
          <div className="h-screen overflow-auto">
            { filteredJobs.map(job => (
              <div key={job.jobId}>
                <JobCard job={ job } key={job.jobId}/>
              </div>
            )) }
          </div>
      </section>
    </main>
  )
}

export default JobsList;