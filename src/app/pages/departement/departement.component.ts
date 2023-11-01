import { PersonneService } from './../../Service/personne.service';
import { PersonnesComponent } from './../personnes/personnes.component';
import { Personne } from './../../Model/personne';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { DepartementService } from './../../Service/departement.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Departement } from 'src/app/Model/departement';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {
  public departements:Departement[];
  public personnes:Personne[];
  public names:String[];
  public editDepartement?:Departement;
  public deleteDept:Departement;
  //pagination
  page = 1;
  count = 0;
  tableSize = 5;
  tableSizes = [5, 10,15,20];

  constructor(private departementService :DepartementService,private personService :PersonneService) { }

  ngOnInit(): void {
    this.getDepartement();
    this.getPersonnes();
  }

  public getDepartement():void{
    this.departementService.getDepartement().subscribe(
      (response : Departement[])=>{this.departements =response;},
      (error: HttpErrorResponse)=>{alert(error.message);}
    );
  }

  public getPersonnes():void{
    this.personService.getPersonne().subscribe(
      (response : Personne[]) => {this.personnes=response;},
      (error : HttpErrorResponse) => {alert(error.message);}
      );
  }

  public onAddDepartement(addForm : NgForm):void{
    document.getElementById("add-dept-form").click();
    
    this.departementService.addDepartement(addForm.value).subscribe(
      (response : Departement)=> { console.log(response);
        this.getDepartement();
      },
      (error : HttpErrorResponse) => {alert(error.message);}
    );
  }

  public onUpdateDept(departement:Departement):void{
    document.getElementById("edit-dept-form").click();
    this.departementService.updatedepartement(departement).subscribe(
      (response:Departement)=>{console.log(response);
      this.getDepartement();
      },
      (error :HttpErrorResponse) =>{alert(error.message);}
    );
  }

  public onDeleteDept(id:String):void{
    document.getElementById("delete-dept-form").click();
    this.departementService.deleteDepartement(id).subscribe(
      (response : void)=>{console.log(response);
      this.getDepartement();
      },
      (error : HttpErrorResponse)=>{alert(error.message);}
    );
  }


  public searchDept(key:String):void{
    const result: Departement[]=[];

    for(const departement of this.departements){
      if(departement.nom.toLowerCase().indexOf(key.toLowerCase())!==-1){
        result.push(departement);
      }    
    }
    this.departements=result;
    if(!key){
      this.getDepartement();
  }
  }

  public onOpenModal(dept: Departement,mode:String):void{
    const button= document.createElement('button');
    const container=document.getElementById('main-table')
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if(mode==='edit'){
      
      this.editDepartement=dept;
      button.setAttribute('data-target','#editDept');
    }
    if(mode==='delete'){
      this.deleteDept=dept;
      button.setAttribute('data-target','#deleteDept')
    }
    container.appendChild(button);
    button.click();

  }

  onTableDataChange(event){
    this.page = event;
    this.getDepartement();
  }  

  onTableSizeChange(event): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getDepartement();
  }  
  
}
