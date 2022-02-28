import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class CharacterApiService {
  PUBLIC_KEY = '37db28a5013c99b99ff1b6dc64a352af';
  HASH = '8fc6fe1f2d82673bfdadde8ab20a7491';
  URL_API = `https:gateway.marvel.com/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private http: HttpClient) { }

  getAllCharacters():Observable<any>{
    return this.http.get<any>(this.URL_API)
    .pipe(map((data: any)=> data.data.results))
  }
}
