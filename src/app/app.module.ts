
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { APP_ROUTING } from './app.routes';
import { ClothesComponent } from './components/sections/clothes/clothes.component';
import { ShoesComponent } from './components/sections/shoes/shoes.component';
import { AccesoriesComponent } from './components/sections/accesories/accesories.component';
import { CellphonesComponent } from './components/sections/cellphones/cellphones.component';
import { PcComponent } from './components/sections/pc/pc.component';
import { TvComponent } from './components/sections/tv/tv.component';
import { SectionService } from './services/section.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    ClothesComponent,
    ShoesComponent,
    AccesoriesComponent,
    CellphonesComponent,
    PcComponent,
    TvComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule
  ],
  providers: [SectionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
