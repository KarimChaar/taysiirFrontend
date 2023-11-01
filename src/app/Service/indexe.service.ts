
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Indexe } from '../Model/indexe';

@Injectable({
    providedIn: 'root'
   })
   export class IndexeService {
     
     private apiServerUrl=environment.apiBaseUrl;
     constructor(private http: HttpClient) { }
   
     public getIndexe():Observable<Indexe[]>{
       return this.http.get<Indexe[]>(`${this.apiServerUrl}/indexe/all`);
     }
   
     public addIndexe(indexe : Indexe):Observable<Indexe>{
       return this.http.post<Indexe>(`${this.apiServerUrl}/indexe/add`,indexe);  
     }
   
     public updateIndexe(indexe : Indexe):Observable<Indexe>{
       return this.http.put<Indexe>(`${this.apiServerUrl}/indexe/update`,indexe);  
     }

     public deleteIndexe(idxid:String):Observable<void>{
       return this.http.delete<void>(`${this.apiServerUrl}/indexe/delete/${idxid}`);
     }
   
   
   }