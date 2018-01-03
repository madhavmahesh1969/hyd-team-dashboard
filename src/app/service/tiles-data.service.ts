import { Injectable } from '@angular/core';
import {Tile} from '../model/tile';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class TilesDataService {

  constructor(private http: Http) {}
  
    getTileData() {
        return this.http.get('assets/data/tiles_data.json')
                    .toPromise()
                    .then(res => <Tile[]> res.json().data)
                    .then(data => { console.log(data); return data; });
    }

}
