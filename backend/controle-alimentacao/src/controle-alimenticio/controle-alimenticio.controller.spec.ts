import { Test, TestingModule } from '@nestjs/testing';
import { ControleAlimenticioController } from './controle-alimenticio.controller';
import { ControleAlimenticioService } from './controle-alimenticio.service';

describe('ControleAlimenticioController', () => {
  let controller: ControleAlimenticioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ControleAlimenticioController],
      providers: [ControleAlimenticioService],
    }).compile();

    controller = module.get<ControleAlimenticioController>(
      ControleAlimenticioController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
