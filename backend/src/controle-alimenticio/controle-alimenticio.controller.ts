import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ControleAlimenticioService } from './controle-alimenticio.service';
import { CreateControleAlimenticioDto } from './dto/create-controle-alimenticio.dto';

@Controller('controle-alimenticio')
export class ControleAlimenticioController {
  constructor(
    private readonly controleAlimenticioService: ControleAlimenticioService,
  ) {}

  @Post()
  create(@Body() createControleAlimenticioDto: CreateControleAlimenticioDto) {
    return this.controleAlimenticioService.create(createControleAlimenticioDto);
  }

  @Get()
  findAll() {
    return this.controleAlimenticioService.findAll();
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.controleAlimenticioService.remove(id);
  }
}
