import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { RecordListDto } from './dto/record.list.dto';
import { RecordDto } from './dto/record.dto';
import { RecordCreateDto } from './dto/record.create.dto';
import { RecordService } from './record.service';

@Controller('api/records')
export class RecordController {
  constructor(private readonly recordService: RecordService) {}

  @Get()
  async findAll(): Promise<RecordListDto> {
    return await this.recordService.getAllRecords();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<RecordDto> {
    return await this.recordService.getOneRecord(id);
  }

  @Post()
  async create(@Body() recordCreateDto: RecordCreateDto): Promise<RecordDto> {
    return await this.recordService.createRecord(recordCreateDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() recordDto: RecordDto,
  ): Promise<RecordDto> {
    return await this.recordService.updateRecord(recordDto);
  }

  @Delete(':id')
  async destroy(@Param('id') id: string): Promise<RecordDto> {
    return await this.recordService.destroyRecord(id);
  }
}
