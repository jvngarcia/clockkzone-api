import { Controller, Get, Param } from '@nestjs/common';
import { ScrappingService } from './scrapping.service';

@Controller('localities')
export class ScrappingController {
  constructor(private readonly scrappingService: ScrappingService) {}

  @Get()
  findAll() {
    return this.scrappingService.findAll();
  }

  @Get(':search')
  findOne(@Param('search') search: string) {
    return this.scrappingService.findOne(search);
  }
}
