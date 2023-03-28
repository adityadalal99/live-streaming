import { Controller, Get, Param } from '@nestjs/common';
import { StreamsService } from './streams.service';

@Controller('streams')
export class StreamsController {
  constructor(private streamService: StreamsService) {}

  @Get(':id')
  async getStreamById(@Param(':id') id: string) {
    return this.streamService.getStreamById(id);
  }
}
