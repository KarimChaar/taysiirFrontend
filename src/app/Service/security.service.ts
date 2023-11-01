import { HttpClient } from '@angular/common/http';
import { Security } from './../Model/Security';
import { Observable } from 'rxjs';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn:'root'
})

export class SecurityService{
    public apiServerUrl=environment.apiBaseUrl;

    constructor(private http:HttpClient){}

    public getAllSecurity():Observable<Security[]>{
        return this.http.get<Security[]>(`${this.apiServerUrl}/security/all`);
    }

    public addSecurity(sec:Security):Observable<Security>{
        return this.http.post<Security>(`${this.apiServerUrl}/security/add`,sec);
    }

    public updateSecurity(sec:Security):Observable<Security>{
        return this.http.put<Security>(`${this.apiServerUrl}/security/update`,sec);
    }

    public deleteSecurity(id:String):Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/security/delete/${id}`);
    }
}