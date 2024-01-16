import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page-component';
import { DetailPageComponent } from './pages/detail-page/detail-page.component';
import { SavePageComponent } from './pages/save-page/save-page.component';
import { LayoutAppComponent } from './layout/layout-app/layout-app.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterComponent } from './components/character/character.component';
import { FormsModule } from '@angular/forms';
import { NgIconsModule } from '@ng-icons/core';
import {
  heroBookmark,
  heroAdjustmentsHorizontal,
} from '@ng-icons/heroicons/outline';
import { heroBookmarkSolid } from '@ng-icons/heroicons/solid';
import { BrowserModule } from '@angular/platform-browser';
import { FilterDialogComponent } from './components/filter-dialog/filter-dialog.component';
import { DebounseDirective } from './dirictive/debounse.directive';
import { ScrollDirective } from './dirictive/scroll.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DetailPageComponent,
    SavePageComponent,
    LayoutAppComponent,
    FooterComponent,
    CharacterComponent,
    FilterDialogComponent,
    DebounseDirective,
    ScrollDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgIconsModule.withIcons({
      heroBookmark,
      heroBookmarkSolid,
      heroAdjustmentsHorizontal,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
