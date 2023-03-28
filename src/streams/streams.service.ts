import { Injectable } from '@nestjs/common';

@Injectable()
export class StreamsService {
  waitForMe(time: number) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(''), time);
    });
  }

  async getStreamById(id: string) {
    return await this.waitForMe(10000);
  }

  async startSream() {
    const id = 1;
    console.log('id: ', id);
    return;
  }
}
