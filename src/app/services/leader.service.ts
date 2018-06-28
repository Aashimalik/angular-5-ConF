import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { Http, Response } from '@angular/http';
import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { RestangularModule, Restangular } from 'ngx-restangular';

@Injectable()
export class LeaderService {


 constructor(private http: Http,
    private restangular: Restangular,
    private processHTTPMsgService: ProcessHttpmsgService) { }

  getLeaders(): Observable<Leader[]> {
  	return this.restangular.all('LEADERS').getList();
  }

  getLeader(): Observable<Leader> {
  	   return this.restangular.all('LEADERS').getList({featured: true})
        .map(dishes => dishes[0]);
  }

}
