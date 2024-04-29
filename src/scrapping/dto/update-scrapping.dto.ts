import { PartialType } from '@nestjs/mapped-types';
import { CreateScrappingDto } from './create-scrapping.dto';

export class UpdateScrappingDto extends PartialType(CreateScrappingDto) {}
