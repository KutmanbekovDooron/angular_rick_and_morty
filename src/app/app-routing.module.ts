import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page-component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { SavePageComponent } from './pages/save-page/save-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'detail',
    component: DetailPageComponent,
  },
  {
    path: 'save',
    component: SavePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
