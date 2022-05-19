import { RecordEntity } from '../record/entity/record.entity';
import { RecordDto } from '../record/dto/record.dto';

export const toRecordDto = (data: RecordEntity): RecordDto => {
  const { id, artist, title, year, label, format, country, comment, active } =
    data;

  const recordDto: RecordDto = {
    id,
    artist,
    title,
    year,
    label,
    format,
    country,
    comment,
    active,
  };
  return recordDto;
};
