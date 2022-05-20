import { RecordDto } from './record.dto';

export class RecordListDto {
  public records: RecordDto[];

  constructor(records: RecordDto[]) {
    this.records = records;
  }

  get getRecords(): RecordDto[] {
    return this.records;
  }
}
