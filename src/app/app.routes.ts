import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AccesoriesComponent } from './components/sections/accesories/accesories.component';
import { CellphonesComponent } from './components/sections/cellphones/cellphones.component';
import { ClothesComponent } from './components/sections/clothes/clothes.component';
import { ShoesComponent } from './components/sections/shoes/shoes.component';
import { TvComponent } from './components/sections/tv/tv.component';
import { PcComponent } from './components/sections/pc/pc.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'accesories', component: AccesoriesComponent },
    { path: 'cellphones', component: CellphonesComponent },
    { path: 'clothes', component: ClothesComponent },
    { path: 'pc', component: PcComponent },
    { path: 'shoes', component: ShoesComponent },
    { path: 'tv', component: TvComponent },
    { path: ':ids/product/:id', component: ProductComponent },
    { path: '', pathMatch: 'full', redirectTo: 'home' }

];


export const APP_ROUTING = RouterModule.forRoot(routes, { useHash: true });
