import { ISelection } from "../ISelection";
export interface IJobpoints extends ISelection {
  jobpoints: Jobpoints;
}
interface Jobpoints {
  jobs: Jobs;
  companies: Companies;
}
interface Companies {
  '1': _1;
  '10': _1;
  '14': _1;
  '23': _1;
}
interface _1 {
  name: string;
  jobpoints: number;
}
interface Jobs {
  army: number;
  casino: number;
  law: number;
  grocer: number;
}