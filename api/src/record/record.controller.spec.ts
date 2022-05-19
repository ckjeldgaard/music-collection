import { RecordController } from './record.controller';
import { RecordService } from './record.service';
import { RecordListDto } from './dto/record.list.dto';
import { RecordDto } from './dto/record.dto';

describe('RecordController', () => {
  let recordController: RecordController;
  let recordService: RecordService;

  beforeEach(() => {
    recordService = new RecordService();
    recordController = new RecordController(recordService);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const record: RecordDto = {
        id: 'string',
        artist: 'string',
        title: 'string',
        year: 1,
        label: 'string',
        format: 'string',
        country: 'string',
        comment: 'string',
        active: true,
      };
      jest.spyOn(recordService, 'getAllRecords').mockImplementation(() => {
        return new Promise((resolve) => {
          resolve(new RecordListDto([record]));
        });
      });

      const result = await recordController.findAll();
      expect(result.getRecords[0]).toBe(record);
    });
  });
});
