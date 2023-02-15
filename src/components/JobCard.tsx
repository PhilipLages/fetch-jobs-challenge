import { IJobCard } from '@/interfaces/Job';
import React from 'react';

const JobCard = ({ job }: IJobCard) => {
  const htmlRegex = /(<([^>]+)>)/ig; //Regex to identify html tags inside job description;

  const description = (job.jobDescription).replace(htmlRegex, ''); //Removes html tags inside the job description string

  return (
    <div className="p-5 flex flex-col max-w-screen-lg h-1/4 m-10 bg-slate-300 rounded-lg">
      <div className='mb-2 border-b-2 border-slate-900'>
        <p className='text-xl'>{ job.jobTitle }</p>
      </div>
      <div className='mb-2 border-b-2 border-slate-500'>       
        <h3>{ job.companyName }</h3>
      </div>
        <h3>Description</h3>
      <div className='h-44 overflow-auto'>
        <p className='leading-8'>{ description }</p>
      </div>
    </div>
  )
};

export default JobCard;