import { Injectable } from '@angular/core';
import { getDatabase, ref, child, get } from "firebase/database";
import { from } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor() { }

  getData() {
    const dbRef = ref(getDatabase());

    return from(get(child(dbRef, `projects`)))
  }

}
