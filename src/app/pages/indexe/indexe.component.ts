import { IndexeService } from './../../Service/indexe.service';
import { Indexe } from './../../Model/indexe';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-indexe',
  templateUrl: './indexe.component.html',
  styleUrls: ['./indexe.component.css']
})
export class IndexeComponent implements OnInit {
  
  public indexes: Indexe[];
  public editIndexe:Indexe;
  public deleteIndexe:Indexe;
  //pagination
  page = 1;
  count = 0;
  tableSize = 5;
  tableSizes = [5, 10,15,20];
  constructor(private indexeService : IndexeService) { }

  ngOnInit(): void {
    this.getIndexe();
  }
  
  public getIndexe():void{
    this.indexeService.getIndexe().subscribe(
    (response : Indexe[])=>{this.indexes=response;},
    (error :HttpErrorResponse)=>{alert(error.message);}
  );
  }

  public onAddIndexe(addForm :NgForm):void{
    document.getElementById("add-indexe-form").click();
    this.indexeService.addIndexe(addForm.value).subscribe(
      (response : Indexe)=> { console.log(response);
        this.getIndexe();
      },
      (error : HttpErrorResponse) => {alert(error.message);}
    );


  }

  public onUpdateIndexe(indexe :Indexe):void{
    document.getElementById("edit-indexe-form").click();
    this.indexeService.updateIndexe(indexe).subscribe(
      (response : Indexe)=> { console.log(response);
        this.getIndexe();
      },
      (error : HttpErrorResponse) => {alert(error.message);}
    );
  }
  public onDeleteIndexe(idxid:String): void{
    document.getElementById("delete-indexe-form").click();
    this.indexeService.deleteIndexe(idxid).subscribe(
      (response : void)=>{
        console.log(response);
        this.getIndexe();
      },
      (error : HttpErrorResponse)=>{
        alert(error.message);}
    );
  }

  public searchIndexe(key: String):void{
    const result:Indexe[]=[];

    for(const indexe of this.indexes){
      if (indexe.nom.toLowerCase().indexOf(key.toLowerCase())!==-1 
      ||indexe.type.toLowerCase().indexOf(key.toLowerCase())!==-1
      ||indexe.defaultvalue.toLowerCase().indexOf(key.toLowerCase())!==-1
      ||indexe.description.toLowerCase().indexOf(key.toLowerCase())!==-1){
        result.push(indexe);
      }
    }
    this.indexes=result;
    if(result.length===0 || !key){
      this.getIndexe();
    }
  }

  public onOpenModal(indexe: Indexe,mode:String):void{
    const button= document.createElement('button');
    const container=document.getElementById('main-table')
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');
    if(mode==='edit'){
      this.editIndexe=indexe;
      button.setAttribute('data-target','#editIndexeModal');
    }
    if(mode==='delete'){
      this.deleteIndexe=indexe;
    button.setAttribute('data-target','#deleteIndexe');
    }
    container.appendChild(button);
    button.click();

  }

  onTableDataChange(event){
    this.page = event;
    this.getIndexe();
  }  

  onTableSizeChange(event): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getIndexe();
  }  
  

 }


