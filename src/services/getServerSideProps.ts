import { JobsProps } from '@/interfaces';
import { GetServerSideProps } from 'next';
import api from './api';

const getServerSideProps: GetServerSideProps<JobsProps> = async () => {
  const response = await api.post('/', {
    companySkills: true,
    dismissedListingHashes: [],
    fetchJobDesc: true,
    jobTitle: 'Business Analyst',
    locations: [],
    numJobs: 20,
    previousListingHashes: []
  });

  const jobs = response.data.jobs;

  return {
    props: { jobs }
  };
};

export default getServerSideProps