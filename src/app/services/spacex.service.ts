import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Dragon } from './../models/spacex.models';
import { DragonList } from '../models/dragon-list';

const apiURL = "https://api.spacexdata.com/v3/";

@Injectable()

export class SpacexService {

  constructor(private http:HttpClient) { }

  getDragon(id:string): Observable<Dragon> {
    return this.http.get<Dragon>(apiURL + "dragons/" + id);
  }

  getAllDragons(): Observable<Dragon[]>{
    return this.http.get<Dragon[]>(apiURL + "dragons");
  }


}
