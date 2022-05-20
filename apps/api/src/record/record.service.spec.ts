import { Test, TestingModule } from '@nestjs/testing';
import { RecordService } from './record.service';

describe('RecordService', () => {
  let service: RecordService;

  beforeEach(async () => {
    const testingModule: TestingModule = await Test.createTestingModule({
      providers: [RecordService],
    }).compile();

    service = testingModule.get<RecordService>(RecordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
