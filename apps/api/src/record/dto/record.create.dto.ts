export class RecordCreateDto {
  artist: string;
  title: string;
  year: number;
  label: string;
  format: string;
  country: string;
  comment?: string;
  active: boolean;
}
