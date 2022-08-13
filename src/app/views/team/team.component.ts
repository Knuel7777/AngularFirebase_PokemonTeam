import { Component, OnInit } from '@angular/core';
import { getPokemonInformation } from '../../services';
import { pokemonTeam } from '../../models';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  view = false;
  numPokemon : string = '';
  namePokemon : string = '';
  imgPokemon : string = '';
  myPokemonTeam : Array<pokemonTeam> = [];
  local: Array<pokemonTeam> = [];

  constructor(
    public getPokemonInformation: getPokemonInformation
  ) {
    this.local  = JSON.parse(localStorage.getItem('myTeam')!)

    if(this.local != null) {
      this.local.forEach(e => {
        var myPokemon = {
          name: e.name,
          img: e.img
        }
        this.myPokemonTeam.push(myPokemon);
      });
    }
  }

  ngOnInit(): void {
  }

  getPokemon() {
    this.getPokemonInformation.getInformation(this.numPokemon)
    .subscribe(response => {
      this.imgPokemon = response.sprites.front_default;
      this.namePokemon = response.name;
      this.view = true;
    }, error => {
      alert(error);
    })
  }

  addPokemonToMyTeam() {
    var myPokemon = {
      name: this.namePokemon,
      img: this.imgPokemon
    }

    this.myPokemonTeam.push(myPokemon);

    localStorage.setItem('myTeam', JSON.stringify(this.myPokemonTeam))

    this.namePokemon = '';
    this.imgPokemon = '';
    this.view = false;
  }

  deletePokemonToMyTeam(name: string) {
    localStorage.removeItem('myTeam');
    //localStorage.clear();

    this.myPokemonTeam = this.myPokemonTeam.filter(i => i.name !== name);

    localStorage.setItem('myTeam', JSON.stringify(this.myPokemonTeam));
  }

}
