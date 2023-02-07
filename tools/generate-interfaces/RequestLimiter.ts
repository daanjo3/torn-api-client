import sleep from './util/sleep'

export default class RequestLimiter {
  private count = 0

  constructor() {}

  async handle() {
    this.count += 1
    if (this.count > 50) {
      console.log('Performed 50 request, sleeping for 1min to prevent IP ban.')
      await sleep(60000)
      this.count = 0
    }
  }
}
