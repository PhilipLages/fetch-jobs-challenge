import { IJob, IJobs } from "@/interfaces/Job";
import { NextPage } from "next";
import { SyntheticEvent, useState } from "react";
import Button from "./Button";
import JobCard from "./JobCard";


// Define the Jobs component to be rendered by its Parent, JobPage
const JobsList: NextPage<IJobs> = ({ jobs }) => {
  const [companyName, setCompanyName] = useState<string>('');
  const [filteredJobs, setFilteredJobs] = useState<IJob[]>(jobs);
  const [isRecentJobs, setIsRecentJobs] = useState<boolean>(false);

  // Define the function to filter jobs by company name, adding the filtered jobs to a state. Uses toLowerCase to filter without case sensitive
  const handleFilterByCompany = (e: SyntheticEvent) => {
    e.preventDefault();

    const newFilteredJobs = jobs.filter(job => job.companyName.toLowerCase()
      .includes(companyName.toLowerCase()));
    setFilteredJobs(newFilteredJobs);    
  }

  // Define the function to reset the filters and render all jobs again
  const handleResetFilters = () => {
    setCompanyName('');
    setFilteredJobs(jobs);
    setIsRecentJobs(false);
  }

  // Define the function to filter jobs published in the last 7 days
  const handleFilteredByLastSevenDays = () => {
    const newFilteredJobs = jobs.filter(job => {
      const jobDate = new Date(job.postingDate);
      const today = new Date();
      const last7Days = new Date(today.setDate(today.getDate() - 7));
      return jobDate > last7Days;
    });
    setFilteredJobs(newFilteredJobs);
    setIsRecentJobs(true);
  }

  return (
    <section>
      <header className="p-5 bg-slate-400 w-full flex flex-col items-center">
        <div className="p-2">
          <h1 className="text-blue-900 text-2xl">
            Available Jobs
          </h1>
        </div>
        <section>
          <form 
            className="flex flex-col items-center md:flex-row"
            onSubmit={handleFilterByCompany}
          >
            <input 
              className="w-full mx-2 border-2 border-slate-800 rounded md:w-60"
              type="text" 
              name="companyName" 
              id="companyName"
              placeholder="Filter by company name"
              value={companyName}
              onChange={ (e) => setCompanyName(e.target.value) }
            />
            <Button type="submit" text="Filter by Company" />
            <Button onClick={handleFilteredByLastSevenDays} text="Jobs published in the last 7 days" />
            <Button onClick={handleResetFilters} text="Reset Filters" />
          </form>
        </section>
      </header> 
      <main>
      <section className="h-screen">
        <div className="h-10 flex justify-center">
          { isRecentJobs ? <p className="text-blue-900 text-xl">Published within last 7 days</p> : null }
        </div>
        { filteredJobs.map(job => (
          <div className="flex justify-center" key={job.jobId}>
            <JobCard job={ job } key={job.jobId}/>
          </div>
        )) }
      </section>
    </main>
    </section>    
  )
};

export default JobsList;