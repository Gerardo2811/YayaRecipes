import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { RecipesModule } from './recipes/recipes.module';
import { UsersModule } from './users/users.module';
import { FavoritesModule } from './favorites/favorites.module';
import { CommentsModule } from './comments/comments.module';
import { RatingModule } from './rating/rating.module';
import { CategoriesModule } from './categories/categories.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

@Module({
  imports: [
    AuthModule,
    RecipesModule,
    UsersModule,
    FavoritesModule,
    CommentsModule,
    RatingModule,
    CategoriesModule,
    ShoppingListModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
