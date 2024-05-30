import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductError } from './exceptions/product-error.exception';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    try {
      return this.productService.create(createProductDto);
    } catch (error) {
      throw new ProductError(HttpStatus.INTERNAL_SERVER_ERROR, 'Erro interno', 'Erro interno');
    }
  }

  @Get()
  findAll() {
    try {
      return this.productService.findAll();
    } catch (error) {
      throw new ProductError(HttpStatus.INTERNAL_SERVER_ERROR, 'Erro interno', 'Erro interno');
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    try {
      return this.productService.findOne(+id);
    } catch (error) {
      throw new ProductError(HttpStatus.INTERNAL_SERVER_ERROR, 'Erro interno', 'Erro interno');
    }
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    try {
      return this.productService.update(+id, updateProductDto);
    } catch (error) {
      throw new ProductError(HttpStatus.INTERNAL_SERVER_ERROR, 'Erro interno', 'Erro interno');
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    try {
      return this.productService.remove(+id);
    } catch (error) {
      throw new ProductError(HttpStatus.INTERNAL_SERVER_ERROR, 'Erro interno', 'Erro interno');
    }
  }
}
