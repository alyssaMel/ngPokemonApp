import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../../pokemon.model';
import { POKEMONS } from '../../shared/list.pokemons';
import { PokemonsService } from '../pokemons.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.scss']
})
export class DetailPokemonComponent implements OnInit {
  listOfPokemons : Pokemon [] = null;
  pokemonToDisplay : Pokemon = null;
  constructor(private route:ActivatedRoute,private router:Router,private pokemonsService:PokemonsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.pokemonToDisplay = this.pokemonsService.getSinglePokemon(id);
  }

}
