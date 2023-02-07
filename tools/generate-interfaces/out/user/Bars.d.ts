import { Selection } from '../Selection'
export interface Bars extends Selection {
  server_time: number
  happy: Happy
  life: Happy
  energy: Happy
  nerve: Happy
  chain: Chain
}
interface Chain {
  current: number
  maximum: number
  timeout: number
  modifier: number
  cooldown: number
}
interface Happy {
  current: number
  maximum: number
  increment: number
  interval: number
  ticktime: number
  fulltime: number
}
