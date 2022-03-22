import { ISelection } from "../ISelection";
export interface IRevives extends ISelection {
  revives: Revives;
}
interface Revives {
  '1470247': _1470247;
  '1635899': _1470247;
  '1714343': _1470247;
  '1964611': _1470247;
  '1974235': _1470247;
  '2043900': _1470247;
  '2046197': _1470247;
  '2147781': _1470247;
  '2155842': _1470247;
  '2450521': _1470247;
  '2574867': _1470247;
  '2600449': _1470247;
  '2627423': _1470247;
  '2720551': _1470247;
  '2759751': _1470247;
  '2767636': _1470247;
  '2798127': _1470247;
  '2919812': _1470247;
  '2966742': _1470247;
  '3543152': _1470247;
  '3543168': _1470247;
  '4046598': _1470247;
  '4046599': _1470247;
  '4046606': _1470247;
  '4046629': _4046629;
  '4046640': _1470247;
  '4047108': _1470247;
  '4047144': _1470247;
  '4047145': _1470247;
  '4047565': _1470247;
  '4047624': _1470247;
  '4047633': _1470247;
  '4047735': _1470247;
  '4047750': _1470247;
  '4048161': _1470247;
  '4048513': _1470247;
  '4050070': _1470247;
  '4050071': _1470247;
  '4050084': _1470247;
  '4054268': _1470247;
  '4320231': _1470247;
  '5296166': _1470247;
  '5296168': _1470247;
  '5349225': _1470247;
  '5406910': _1470247;
  '5470989': _1470247;
}
interface _4046629 {
  timestamp: number;
  result: string;
  chance: number;
  reviver_id: number;
  reviver_name: string;
  reviver_faction: number;
  reviver_factionname?: any;
  target_id: number;
  target_name: string;
  target_faction: number;
  target_factionname: string;
  target_hospital_reason: string;
  target_early_discharge: number;
  target_last_action: Targetlastaction;
}
interface _1470247 {
  timestamp: number;
  result: string;
  chance: number;
  reviver_id: number;
  reviver_name: string;
  reviver_faction: number;
  reviver_factionname: string;
  target_id: number;
  target_name: string;
  target_faction: number;
  target_factionname: string;
  target_hospital_reason: string;
  target_early_discharge: number;
  target_last_action: Targetlastaction;
}
interface Targetlastaction {
  status: string;
  timestamp: number;
}