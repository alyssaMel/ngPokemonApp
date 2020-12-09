import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { BorderCardDirective } from '../shared/directives/border-card.directive';
import { PokemonTypeColorPipe } from '../shared/pipes/pokemon-type-color.pipe';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ListPokemonComponent, DetailPokemonComponent, BorderCardDirective,
    PokemonTypeColorPipe],
  imports: [
    CommonModule, RouterModule
  ]
})
export class PokemonsModule { }
