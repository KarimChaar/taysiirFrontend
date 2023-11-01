import { Document } from './../Model/document';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
   })
export class DocumentService{
    private apiServerUrl=environment.apiBaseUrl;
    

    constructor(private http:HttpClient){}

    public getDocument():Observable<Document[]>{
        return this.http.get<Document[]>(`${this.apiServerUrl}/document/all`);
    }

    public addDocument(document : Document):Observable<Document>{
        return this.http.post<Document>(`${this.apiServerUrl}/document/add`,document);
    }

    public updateDocument(document : Document):Observable<Document>{
        return this.http.post<Document>(`${this.apiServerUrl}/document/update`,document);
    } 

    public deleteDocument(id:String):Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/document/delete/${id}`);
    }
}