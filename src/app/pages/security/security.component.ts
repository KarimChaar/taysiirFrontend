import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { SecurityService } from './../../Service/security.service';
import { Component, OnInit } from '@angular/core';
import { Security } from 'src/app/Model/Security';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.css']
})
export class SecurityComponent implements OnInit {

  constructor(private securityService:SecurityService) { }

  ngOnInit(): void {
    this.getAllSecurity();
  }
    

  public type:String;
  public securities:Security[];
  public editSec;
  public deleteSec:Security;
  //pagination
  description:String;
  page = 1;
  count = 0;
  tableSize = 5;
  tableSizes = [5, 10,15,20];
  
  
  public getAllSecurity():void{
      this.securityService.getAllSecurity().subscribe(
        (response:Security[])=>{this.securities=response},
        (error:HttpErrorResponse)=>{alert(error.message);}
      );
  }
  
  public addSecurity(addForm:NgForm):void{
    document.getElementById("add-auth-form").click();
    this.securityService.addSecurity(addForm.value).subscribe(
      (response : Security)=>{
        console.log(response);
        this.getAllSecurity();
      },
      (error : HttpErrorResponse)=>{alert(error.message);}
    )
  }

  public editSecurity(editForm:NgForm):void{
    document.getElementById("edit-auth-form").click();
    this.securityService.addSecurity(editForm.value).subscribe(
      (response : Security)=>{
        console.log(response);
        this.getAllSecurity();
      },
      (error : HttpErrorResponse)=>{alert(error.message);}
    )
  }

  public onOpenModal(auth:Security,mode:String){
    if(mode=='delete')
    {
      this.deleteSec=auth;
    }
    if(mode=='edit')
    {
      this.editSec=auth;
    }
  }

  public deleteSecurity(id:String):void{
    document.getElementById('delete-auth-form').click();
      this.securityService.deleteSecurity(id).subscribe(
        (response : void)=>{
          console.log(response);
          this.getAllSecurity();
        },
        (error : HttpErrorResponse)=>{alert(error.message);}   
      )
  }
  public searchAuth(key:String):void{
    const result: Security[]=[];

    for(const Security of this.securities){
      if(Security.nom.toLowerCase().indexOf(key.toLowerCase())!==-1){
        result.push(Security);
      }    
    }
    this.securities=result;
    if(!key){
      this.getAllSecurity();
    }
  }

  onTableDataChange(event){
    this.page = event;
    this.getAllSecurity();
  }  
     onTableSizeChange(event): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getAllSecurity();
  }  


}
