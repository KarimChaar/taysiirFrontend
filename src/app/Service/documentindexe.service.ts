import { Document } from './../Model/document';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { DocumentIndexe } from '../Model/documentindexe';

@Injectable({
    providedIn: 'root'
   })
export class DocumentIndexeService{
    private apiServerUrl=environment.apiBaseUrl;
    

    constructor(private http:HttpClient){}

    public getDocumentIndexe():Observable<DocumentIndexe[]>{
        return this.http.get<DocumentIndexe[]>(`${this.apiServerUrl}/DocumentIndexe/all`);
    }

    public getIndexeOfDocument(nom: String):Observable<DocumentIndexe[]>{
        return this.http.get<DocumentIndexe[]>(`${this.apiServerUrl}/DocumentIndexe/find/${nom}`);
    }

    public addDocumentIndexe(document : DocumentIndexe):Observable<DocumentIndexe>{
        return this.http.post<DocumentIndexe>(`${this.apiServerUrl}/DocumentIndexe/add`,document);
    }

    public updateDocumentIndexe(document : DocumentIndexe):Observable<DocumentIndexe>{
        return this.http.post<DocumentIndexe>(`${this.apiServerUrl}/DocumentIndexe/update`,document);
    } 
    


    public deleteDocumentIndexe(id:String):Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/DocumentIndexe/delete/${id}`);
    }
}