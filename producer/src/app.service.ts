import { Injectable } from '@nestjs/common';
import { Semaphore } from 'await-semaphore';
@Injectable()
export class AppService {
  private readonly semaphore = new Semaphore(1);
  async getHello(): Promise<string> {
    const release = await this.semaphore.acquire(); // 락 획득

    try {
      await this.delay(5000); // 5초 대기
      console.log('repsone from Nest.js' + process.env.POD_NAME);
      return 'Sequential response from Nest.js!' + process.env.POD_NAME;
    } finally {
      release(); // 락 해제
    }
  }
  private delay(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
console.log(process.env);
