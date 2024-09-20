import { Module } from '@nestjs/common';
import { ShoppingListController } from './shopping-list.controller';

@Module({
  controllers: [ShoppingListController]
})
export class ShoppingListModule {}
