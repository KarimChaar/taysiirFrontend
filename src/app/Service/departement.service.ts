import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
import { Departement } from '../Model/departement';

@Injectable({
    providedIn: 'root'
   })
export class DepartementService{
    private apiServerUrl=environment.apiBaseUrl;

    constructor(private http:HttpClient){}

    public getDepartement():Observable<Departement[]>{
        return this.http.get<Departement[]>(`${this.apiServerUrl}/departement/all`);
    }

    public addDepartement(departement : Departement):Observable<Departement>{
        return this.http.post<Departement>(`${this.apiServerUrl}/departement/add`,departement);  
    }
    
    public updatedepartement(departement : Departement):Observable<Departement>{
      return this.http.put<Departement>(`${this.apiServerUrl}/departement/update`,departement);  
    }

    public deleteDepartement(id:String):Observable<void>{
      return this.http.delete<void>(`${this.apiServerUrl}/departement/delete/${id}`);
    }
}