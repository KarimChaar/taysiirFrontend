import { Personne } from 'src/app/Model/personne';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
   })
   export class PersonneService {
     
     private apiServerUrl=environment.apiBaseUrl;
     constructor(private http: HttpClient) { }
   
     public getPersonne():Observable<Personne[]>{
       return this.http.get<Personne[]>(`${this.apiServerUrl}/personne/all`);
     }

     public getPersonneById(matricule:String):Observable<Personne>{
       return this.http.get<Personne>(`${this.apiServerUrl}/personne/find/${matricule}`)
     }
   
     public addPersonne(personne : Personne):Observable<Personne>{
       return this.http.post<Personne>(`${this.apiServerUrl}/personne/add`,personne);  
     }
   
     public updatePersonne(personne : Personne):Observable<Personne>{
       return this.http.put<Personne>(`${this.apiServerUrl}/personne/update`,personne);  
     }

     public personneToDepartement(personne :Personne,id:String):Observable<Personne>{
       //console.log(id);
       //console.log(personne.matricule);
       return this.http.put<Personne>(`${this.apiServerUrl}/personne/${personne.matricule}/departement/${id}`,personne);
     }
   
   
   }