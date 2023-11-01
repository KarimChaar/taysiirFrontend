import { HttpClient } from '@angular/common/http';
import { Authorisation } from './../Model/authorisation';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn:'root'
})

export class AuthorisationService{
    public apiServerUrl=environment.apiBaseUrl;

    constructor(private http:HttpClient){}

    public getAllAuthorisation():Observable<Authorisation[]>{
        return this.http.get<Authorisation[]>(`${this.apiServerUrl}/authorisation/all`);
    }

    public addAuthorisation(auth:Authorisation):Observable<Authorisation>{
        return this.http.post<Authorisation>(`${this.apiServerUrl}/authorisation/add`,auth);
    }

    public updateAuthorisation(auth:Authorisation):Observable<Authorisation>{
        return this.http.put<Authorisation>(`${this.apiServerUrl}/authorisation/update`,auth);
    }

    public deleteAuthorisation(id:String):Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/authorisation/delete/${id}`);
    }
}