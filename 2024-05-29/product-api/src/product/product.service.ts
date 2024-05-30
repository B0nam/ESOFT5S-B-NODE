import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './entities/product.entity';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(@InjectModel(Product.name) private productModel: Model<Product>) {}

  create(createProductDto: CreateProductDto) {
    return this.productModel.create(CreateProductDto);
  }

  findAll() {
    return this.productModel.find();
  }

  findOne(id: number) {
    return this.productModel.findById(id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productModel.findByIdAndUpdate(id, { name: updateProductDto.name, value: updateProductDto.value, quantity: updateProductDto.quantity});
  }

  remove(id: number) {
    return this.productModel.findByIdAndDelete(id);
  }
}
