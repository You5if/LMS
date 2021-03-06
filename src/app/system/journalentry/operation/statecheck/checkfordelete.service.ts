import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SelectModel } from 'src/app/components/misc/SelectModel';
import { HttpClient } from '@angular/common/http';
import { AppGlobals } from 'src/app/app.global';
import { CommonService } from 'src/app/components/common/common.service';
import { map, catchError } from 'rxjs/operators';
import { element, elementClassProp } from '@angular/core/src/render3';
import { Http, Response } from '@angular/http';
import { AuthService } from 'src/app/components/security/auth/auth.service';
import { phInvoiceState } from '../../journalentry.model';


@Injectable({
providedIn: 'root'
})


// Definition of service class
export class CheckfordeleteService {

  

   // Constructor definition
   constructor(
       private _globals: AppGlobals,
       private httpClient: HttpClient,
       private _cf: CommonService,
       private http: Http,
       private _auth: AuthService,
     ) {
     }

    
  

    getDelete(id: number): Observable<any> {
      return this.httpClient.get<any>(this._globals.baseAPIUrl +  'JournalEntry/approve/' + id).pipe(
      map((result: any) => {
      return result;
      }), catchError(this._cf.handleError)
      );
     }

     sendState(model: phInvoiceState){
      return this.http.post(this._globals.baseAPIUrl + 'PhInvoice/updatestate',model);
   }

     
}
