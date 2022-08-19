import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/share';
import { PokemonInformation, pokemonTeam } from '../models';
import { Firestore, collection, addDoc, collectionData, doc, deleteDoc } from "@angular/fire/firestore";

@Injectable()
export class getPokemonInformation {
    pokemonApiUrl = 'https://pokeapi.co/api/v2/pokemon/';

    constructor(
        private http: HttpClient,
        private firestore: Firestore
    ) {}

    getInformation(request: string): Observable<PokemonInformation> {
        const pokemonUrl = this.pokemonApiUrl + request;

        const respuesta = new Observable<PokemonInformation> (observer => {
            this.http.get<PokemonInformation>(pokemonUrl)
            .subscribe (
                response => {
                    observer.next(response);
                    observer.complete();
                },
                error => {
                  observer.error(error);
                }
            )
        })

        return respuesta;
    }

    getPokemon(): Observable<pokemonTeam[]>{
        const fireUrl = collection(this.firestore, 'PokemonTeam');
        return collectionData(fireUrl, { idField: 'Id'}) as Observable<pokemonTeam[]>
    }

    savePokemonTeam( pokemonTeam: pokemonTeam ) {
        const fireUrl = collection(this.firestore, 'PokemonTeam');
        return addDoc(fireUrl, pokemonTeam);
    }

    deletePokemon(id?: string) {
        const fireUrl = doc(this.firestore, `PokemonTeam/${id}`);
        return deleteDoc(fireUrl);
    }


}