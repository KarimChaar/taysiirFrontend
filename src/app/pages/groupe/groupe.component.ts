import { GroupePersonne } from './../../Model/groupepersonne';
import { Personne } from './../../Model/personne';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { GroupeService } from './../../Service/groupe.service';
import { Groupe } from './../../Model/groupe';
import { Component, OnInit } from '@angular/core';
import { PersonneService } from 'src/app/Service/personne.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-groupe',
  templateUrl: './groupe.component.html',
  styleUrls: ['./groupe.component.css']
})
export class GroupeComponent implements OnInit {
  
  public personne:Personne;
  public personneList:Array<Personne>=[];
  public groupes:Groupe[];
  public personnes:Personne[];
  public editgroupe:Groupe;
  public deletegroupe:Groupe;
  listMatriculeUsers:String[];
  listPersonneOfGroupe:Personne[];
  public groupepersonne={
    groupe:null,
    personne:null  
  };
  public newgroupe:Groupe;
  selectedPersonneList;
  newgroup:Groupe; 
  //pagination
  page = 1;
  count = 0;
  tableSize = 5;
  tableSizes = [5, 10,15,20];

  
  constructor(private groupeService:GroupeService,private personneService:PersonneService) { }

  ngOnInit(): void {
    this.getGroupe();
    this.getPersonne();
    
  }

  public getPersonne():void{
    this.personneService.getPersonne().subscribe(
      (response : Personne[])=>{
        this.personnes=response;
      },
      (error : HttpErrorResponse)=>{alert(error.message);}
    );  
  }
  public getGroupe():void{
    this.groupeService.getGroupe().subscribe(
      (response: Groupe[])=>{this.groupes=response;},
      (error :HttpErrorResponse)=>{alert(error.message);}
    );
  }
  public getGroupeByCode(code:String):void{
    this.groupeService.getGroupeByCode(code).subscribe(
      (response :Groupe)=>{this.groupepersonne.groupe=response;},
      (error : HttpErrorResponse )=>{alert(error.message);}
    );
  }
  public addGroupe(addForm:NgForm):void{
    document.getElementById("groupeForm").style.display="none";
    document.getElementById("personnePart").style.display="block";
    this.newgroup=addForm.value;
    this.groupeService.addGroupe(addForm.value).subscribe(
      (response : Groupe)=>{
        console.log(response);
        this.getGroupeByCode(this.newgroup.code);
        this.getGroupe();
      },
      (error : HttpErrorResponse)=>{alert(error.message);}
    )
  }
  public updateGroupe(groupe:Groupe):void{
    this.groupeService.updateGroupe(groupe).subscribe(
      (response : Groupe)=>{
        console.log(response);
        this.getGroupe();
      },
      (error : HttpErrorResponse)=>{alert(error.message);}
    );
  }
  public deleteGroupe(id:String):void{
    document.getElementById("delete-groupe-form").click();
    this.groupeService.deleteGroupe(id).subscribe(
      (response : void)=>{
        console.log(response);
        this.getGroupe();
      },
      (error : HttpErrorResponse)=>{alert(error.message);}      
    )
  } 
  public getMatriculeFromGroupe():void{
      this.groupeService.getMatriculePersonne(this.editgroupe.idgrp).subscribe(
        (response:String[])=>{

          this.listMatriculeUsers=response
          console.log(this.listMatriculeUsers);
          for(var i=0;i<Object.keys(this.listMatriculeUsers).length;i++){
            console.log(this.listMatriculeUsers[i]);
            this.personneService.getPersonneById(this.listMatriculeUsers[i]).subscribe(
              (respone: Personne)=>{
               this.personneList.push(respone);
              console.log(this.personneList);
              }
            ); 
          }
        },
        (error:HttpErrorResponse)=>{alert(error.message);}
      );
  }
  
  public addGroupePersonne(){
    document.getElementById('add-groupe-form').click();
    document.getElementById("groupeForm").style.display="block";
    document.getElementById("personnePart").style.display="none";
    for(var i=0;i<this.selectedPersonneList.length;i++){
    this.groupepersonne.personne=this.selectedPersonneList[i];
    this.groupeService.putGroupPersonne(this.groupepersonne).subscribe(
      (response: GroupePersonne)=>{console.log(response);},
      (error:HttpErrorResponse)=>{alert(error.message);}
    );
    }
  }
  

  public onOpenModal(grp : Groupe , mode:String):void
  {
    if(mode=='edit')
    {
      this.editgroupe=grp;
      this.personneList=[];
      this.listMatriculeUsers=[];
    }
    if(mode=='delete')
    {
      this.deletegroupe=grp;
    }
  }


   onTableDataChange(event){
  this.page = event;
  this.getGroupe();
}  
   onTableSizeChange(event): void {
  this.tableSize = event.target.value;
  this.page = 1;
  this.getGroupe();
}  
public searchGroup(key:String):void{
  const result: Groupe[]=[];

  for(const grp of this.groupes){
    if(grp.code.toLowerCase().indexOf(key.toLowerCase())!==-1){
      result.push(grp);
    }    
  }
  this.groupes=result;
  if(!key){
    this.getGroupe();
}
}

changeSelection(){
  this.selectedPersonneList=this.personnes.filter((value)=> {return value.isChecked});
  console.log(this.selectedPersonneList);
}



public onDisplay(){
  document.getElementById("groupeform").style.display="block";
  document.getElementById("personnePart").style.display="none";

}



}
