import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Authorisation } from './../../Model/authorisation';
import { AuthorisationService } from './../../Service/authorisation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authorisation',
  templateUrl: './authorisation.component.html',
  styleUrls: ['./authorisation.component.css']
})
export class AuthorisationComponent implements OnInit {
  
  public authorisations:Authorisation[];
  public editAuth;
  public deleteAuth:Authorisation;
  //pagination
  description:String;
  page = 1;
  count = 0;
  tableSize = 5;
  tableSizes = [5, 10,15,20];
  constructor(private authorisationService:AuthorisationService) { }

  ngOnInit(): void {
    this.getAllAuthorisation();
  }
  
  public getAllAuthorisation():void{
      this.authorisationService.getAllAuthorisation().subscribe(
        (response:Authorisation[])=>{this.authorisations=response},
        (error:HttpErrorResponse)=>{alert(error.message);}
      );
  }
  
  public addAuthorisation(addForm:NgForm):void{
    document.getElementById("add-auth-form").click();
    this.authorisationService.addAuthorisation(addForm.value).subscribe(
      (response : Authorisation)=>{
        console.log(response);
        this.getAllAuthorisation();
      },
      (error : HttpErrorResponse)=>{alert(error.message);}
    )
  }

  public editAuthorisation(editForm:NgForm):void{
    document.getElementById("edit-auth-form").click();
    this.authorisationService.addAuthorisation(editForm.value).subscribe(
      (response : Authorisation)=>{
        console.log(response);
        this.getAllAuthorisation();
      },
      (error : HttpErrorResponse)=>{alert(error.message);}
    )
  }

  public onOpenModal(auth:Authorisation,mode:String){
    if(mode=='delete')
    {
      this.deleteAuth=auth;
    }
    if(mode=='edit')
    {
      this.editAuth=auth;
    }
  }

  public deleteAuthortisation(id:String):void{
    document.getElementById('delete-auth-form').click();
      this.authorisationService.deleteAuthorisation(id).subscribe(
        (response : void)=>{
          console.log(response);
          this.getAllAuthorisation();
        },
        (error : HttpErrorResponse)=>{alert(error.message);}   
      )
  }
  public searchAuth(key:String):void{
    const result: Authorisation[]=[];

    for(const authorisation of this.authorisations){
      if(authorisation.code.toLowerCase().indexOf(key.toLowerCase())!==-1){
        result.push(authorisation);
      }    
    }
    this.authorisations=result;
    if(!key){
      this.getAllAuthorisation();
    }
  }

  onTableDataChange(event){
    this.page = event;
    this.getAllAuthorisation();
  }  
     onTableSizeChange(event): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllAuthorisation();
  }  
}
