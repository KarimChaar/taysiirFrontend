import { Departement } from './../../Model/departement';
import { DepartementService } from './../../Service/departement.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Personne } from 'src/app/Model/personne';
import {PersonneService} from '../../Service/personne.service';


@Component({
  selector: 'app-personnes',
  templateUrl: './personnes.component.html',
  styleUrls: ['./personnes.component.css']
})
export class PersonnesComponent implements OnInit {

  public personnes :Personne[];
  public editPersonne?:Personne;
  public departements:Departement[];
  public active="True";

  //pagination
  page = 1;
  count = 0;
  tableSize = 5;
  tableSizes = [5, 10,15,20];

  constructor(private personneService: PersonneService,private departementService :DepartementService) { }

  ngOnInit(): void {
    this.getPersonnes();
    this.getDepartement();
  }
  public getDepartement():void{
    this.departementService.getDepartement().subscribe(
      (response : Departement[])=>{this.departements =response;},
      (error: HttpErrorResponse)=>{alert(error.message);}
    );
  }
  public getPersonnes():void{
    this.personneService.getPersonne().subscribe(
      (response : Personne[]) => {this.personnes=response;},
      (error : HttpErrorResponse) => {alert(error.message);}
      );
  }

  public onAddPersonne(addForm :NgForm):void{
    document.getElementById("add-user-form").click();
 
    this.personneService.addPersonne(addForm.value).subscribe(
      (response : Personne)=> { console.log(response);
        this.getPersonnes();
      },
      (error : HttpErrorResponse) => {alert(error.message);}
    );
    //console.log(this.dep);
    //this.personneService.personneToDepartement(addForm.value,this.dep.depid);
  }

  public onUpdatePersonne(personne :Personne):void{
    document.getElementById("edit-user-form").click();
    this.personneService.updatePersonne(personne).subscribe(
      (response : Personne)=> { console.log(response);
        this.getPersonnes();
      },
      (error : HttpErrorResponse) => {alert(error.message);}
    );
  }

  public searchUser(key:String):void{
    const result: Personne[]=[];

    for(const personne of this.personnes){
      if(personne.nom.toLowerCase().indexOf(key.toLowerCase())!==-1
      ||personne.prenom.toLowerCase().indexOf(key.toLowerCase())!==-1){
        result.push(personne);
      }
    }
    this.personnes=result;
    if(result.length===0 || !key){
      this.getPersonnes();
    }
  }

  public setActive(p:Personne):void
  {
    if(p.active=== true)
    {
      p.active=false;
      this.onUpdatePersonne(p);
    }else
    {
      p.active=true;
      this.onUpdatePersonne(p);
    } 
  }

 onTableDataChange(event){
    this.page = event;
    this.getPersonnes();
  }  

  onTableSizeChange(event): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getPersonnes();
  }  

  public onOpenModal(personne: Personne,mode:String):void{
    const button= document.createElement('button');
    const container=document.getElementById('main-table')
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if(mode==='edit'){
      
      this.editPersonne=personne;
      button.setAttribute('data-target','#editUser');
    }
    container.appendChild(button);
    button.click();

  }

}
