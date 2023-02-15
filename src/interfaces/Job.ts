// Define the interface for a single job from the API
export interface IJob {
  jobId: string;
  jobTitle: string;
  companyName: string;
  jobDescription: string;
  skillNames: string[];
  postingDate: Date;
};

// Define the interface for the data returned by the API
export interface IJobs {
  jobs: IJob[];
}

export interface IJobCard {
  job: IJob;
}
