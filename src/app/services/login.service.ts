import { Injectable } from '@angular/core';
import { UserFireBase } from '../../app/models';
import { Firestore, collection, query, where} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private firestore: Firestore) { }
}
