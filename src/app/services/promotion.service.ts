import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import { baseURL } from '../shared/baseurl';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { RestangularModule, Restangular } from 'ngx-restangular';
@Injectable()
export class PromotionService {

  
  constructor(private http: Http,
    private restangular: Restangular,
    private processHTTPMsgService: ProcessHttpmsgService) { }
 
  getPromotions(): Observable<Promotion[]> {
    return this.restangular.all('PROMOTIONS').getList();
  }

  getPromotion(id: number): Observable<Promotion> {
    return  this.restangular.one('PROMOTIONS', id).get();
  }

  getFeaturedPromotion(): Observable<Promotion> {
     return this.restangular.all('PROMOTIONS').getList({featured: true})
        .map(dishes => dishes[0]);
  }
}
