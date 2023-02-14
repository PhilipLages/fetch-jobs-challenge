export interface IJob {
  jobId: string;
  jobTitle: string;
  companyName: string;
  jobDesc: string;
  skillNames: string[];
};

export type JobsProps = {
  jobs: IJob[]
}
