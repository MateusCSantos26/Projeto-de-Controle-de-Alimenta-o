import { Test, TestingModule } from '@nestjs/testing';
import { ControleAlimenticioService } from './controle-alimenticio.service';

describe('ControleAlimenticioService', () => {
  let service: ControleAlimenticioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ControleAlimenticioService],
    }).compile();

    service = module.get<ControleAlimenticioService>(
      ControleAlimenticioService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
