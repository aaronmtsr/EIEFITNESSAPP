import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesResolverService } from './recipes/recipes-resolver.service';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ExternallyComponent } from './externally/externally.component';
import { EternallyComponent } from './eternally/eternally.component';
import { InternallyComponent } from './internally/internally.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ScheduleComponent} from './schedule/schedule.component';
import { PhotoComponent } from './photo/photo.component';
const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipesComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      {
        path: ':id',
        component: RecipeDetailComponent,
        resolve: [RecipesResolverService],
      },
      {
        path: ':id/edit',
        component: RecipeEditComponent,
        resolve: [RecipesResolverService],
      },
    ],
  },
  { path: 'shopping-list', component: ShoppingListComponent },
  { path: 'externally', component: ExternallyComponent },
  { path: 'eternally', component: EternallyComponent },
  { path: 'internally', component: InternallyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'home', component: HomeComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'photo', component: PhotoComponent },
  { path: 'schedule', component: ScheduleComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
