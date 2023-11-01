import { GroupePersonne } from './../Model/groupepersonne';
import { Personne } from './../Model/personne';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Groupe } from '../Model/groupe';

@Injectable({
    providedIn:'root'
})

export class GroupeService{
    private apiServerUrl=environment.apiBaseUrl;

    constructor(private http:HttpClient){}

    public getGroupe():Observable<Groupe[]>{
        return this.http.get<Groupe[]>(`${this.apiServerUrl}/groupe/all`);
    }

    public addGroupe(g:Groupe):Observable<Groupe>{
        return this.http.post<Groupe>(`${this.apiServerUrl}/groupe/add`,g);
    }

    public updateGroupe(g:Groupe):Observable<Groupe>{
        return this.http.put<Groupe>(`${this.apiServerUrl}/groupe/update`,g);
    }

    public deleteGroupe(id:String):Observable<void>{
        return this.http.delete<void>(`${this.apiServerUrl}/groupe/delete/${id}`);
    }

    public getGroupeByCode(code:String):Observable<Groupe>{
        return this.http.get<Groupe>(`${this.apiServerUrl}/groupe/get/${code}`);
    }
    
    public getMatriculePersonne(id:String):Observable<String[]>{
        return this.http.get<String[]>(`${this.apiServerUrl}/groupe/personne/${id}`);
    }

    public putGroupPersonne(gp:GroupePersonne):Observable<GroupePersonne>{
        return this.http.put<GroupePersonne>(`${this.apiServerUrl}/groupe/${gp.groupe.idgrp}/personne/${gp.personne.matricule}`,gp);
    }
}