import JobsList from "@/components/JobsList";
import { GetServerSideProps } from 'next';

import { NextPage } from "next";
import { IJobs } from "@/interfaces";
import api from "@/services/api";
import { APIRequestBody } from "@/utils/APIRequestBody";

// Define the JobsPage component, Parent that will pass the jobs as props to its children
const JobsPage: NextPage<IJobs> = ({ jobs }) => <JobsList jobs={jobs} />

// Define getServerSideProps to feed JobsPage by Server Side Rendering
export const getServerSideProps: GetServerSideProps = async (): Promise<{ props:  IJobs}> => {
  try {
    const response = await api.post<IJobs>('/', APIRequestBody);
  
    const jobs = response.data.jobs.slice(0, 10);
  
    return {
      props: { jobs }
    };
    
  } catch (error) {
    console.log(error);
    return { props: { jobs: [] } }
  }
};

export default JobsPage;