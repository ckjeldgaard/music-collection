import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { toPromise } from '../shared/utils';
import { RecordEntity } from './entity/record.entity';
import { RecordDto } from './dto/record.dto';
import { RecordCreateDto } from './dto/record.create.dto';
import { toRecordDto } from '../shared/mapper';
import { RecordListDto } from './dto/record.list.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class RecordService {
  records: RecordEntity[] = [
    {
      id: 'eac400ba-3c78-11e9-b210-d663bd873d93',
      artist: 'Mastodon',
      title: 'Leviathan',
      year: 2004,
      label: 'Relapse Records',
      format: 'CD',
      country: 'USA',
      active: true,
    },
    {
      id: 'eac40736-3c78-11e9-b210-d663bd873d93',
      artist: 'Death',
      title: 'Symbolic',
      year: 1995,
      label: 'Roadrunner Records',
      format: 'CD',
      country: 'USA',
      active: true,
    },
    {
      id: 'eac408d0-3c78-11e9-b210-d663bd873d93',
      artist: 'Editors',
      title: 'The Back Room',
      year: 2005,
      label: 'Roadrunner Records',
      format: 'CD',
      country: 'United Kingdom',
      active: true,
    },
  ];

  async getOneRecord(id: string): Promise<RecordDto> {
    const record = this.records.find((record) => record.id === id);

    if (!record) {
      throw new HttpException(
        `Record item doesn't exist`,
        HttpStatus.BAD_REQUEST,
      );
    }

    return toPromise(toRecordDto(record));
  }

  async createRecord(recordDto: RecordCreateDto): Promise<RecordDto> {
    const { artist, title, year, label, format, country, comment, active } =
      recordDto;

    const todo: RecordEntity = {
      id: uuidv4(),
      artist,
      title,
      year,
      label,
      format,
      country,
      comment,
      active,
    };

    this.records.push(todo);
    return toPromise(toRecordDto(todo));
  }

  async getAllRecords(): Promise<RecordListDto> {
    return toPromise(
      new RecordListDto(
        this.records.map((record) => {
          return toRecordDto(record);
        }),
      ),
    );
  }

  async updateRecord(recordDto: RecordDto) {
    return undefined;
  }

  async destroyRecord(id: string) {
    return undefined;
  }
}
