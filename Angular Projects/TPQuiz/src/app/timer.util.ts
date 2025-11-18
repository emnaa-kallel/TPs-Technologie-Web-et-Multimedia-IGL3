export class Timer {
  private intervalId: any;
  constructor(
    private startValue: number,
    private tickMs: number,
    private onTick: (remaining: number) => void,
    private onFinish: () => void
  ) {}

  start() {
    let remaining = this.startValue;
    this.onTick(remaining);
    this.intervalId = setInterval(() => {
      remaining--;
      if (remaining <= 0) {
        this.onTick(0);
        this.stop();
        this.onFinish();
      } else {
        this.onTick(remaining);
      }
    }, this.tickMs);
  }

  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
    }
  }
}
