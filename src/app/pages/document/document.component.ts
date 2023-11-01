import { NgForm } from '@angular/forms';
import { DepartementService } from './../../Service/departement.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DocumentService } from './../../Service/document.service';
import { Component, OnInit } from '@angular/core';
import { Document } from 'src/app/Model/document';
import { Departement } from 'src/app/Model/departement';
import { DocumentIndexe } from 'src/app/Model/documentindexe';
import { DocumentIndexeService } from 'src/app/Service/documentindexe.service';
import { IndexeService } from 'src/app/Service/indexe.service';
import { Indexe } from 'src/app/Model/indexe';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  public documents:Document[];
  public indexes:Indexe[];
  public indexesDocument:DocumentIndexe[];
  public lengthIndexe:Number;
newdocument;
selectedIndexe;
documentIndexObj;
  public departements:Departement[];
  public documentIndexe:DocumentIndexe[];
  public deleteDocument:Document;
  public deleteIdxDocument:DocumentIndexe;
  constructor(private indexeService : IndexeService,private documentService : DocumentService,private departementService:DepartementService,private documentIndexeService: DocumentIndexeService) { }
  
  ngOnInit(): void {
    this.getDocument();
    this.getDepartement();
    this.getIndexe();
    this.getAllDocumentIndexe();
    this.getIndexeOfDocument();
   
  }
  public getAllDocumentIndexe():void{
    this.documentIndexeService.getDocumentIndexe().subscribe(
      (response : DocumentIndexe[])=>{this.indexesDocument=response;},
      (error:HttpErrorResponse)=>{alert(error.message);}
    );
  }
  public getIndexeOfDocument():void{
    this.documentIndexeService.getIndexeOfDocument(this.newdocument.nom).subscribe(
      (response :DocumentIndexe[])=> {this.documentIndexe=response;},
      (error: HttpErrorResponse)=>{alert(error.message);}
    )
  }
  public getDocument():void{
    this.documentService.getDocument().subscribe(
      (response : Document[])=>{this.documents =response;},
      (error: HttpErrorResponse)=>{alert(error.message);}
    );
  }
  public getDepartement():void{
    this.departementService.getDepartement().subscribe(
      (response:Departement[])=>{this.departements=response;},
      (error:HttpErrorResponse)=>{alert(error.message);}
    );
  }
  public getIndexe():void{
    this.indexeService.getIndexe().subscribe(
      (response : Indexe[])=>{this.indexes=response;
        this.lengthIndexe=this.indexes.length;
      
      },
      (error:HttpErrorResponse)=>{alert(error.message);}
    );
  }


  public addDocument(addForm : NgForm):void{
    document.getElementById("docform").style.display="none";
    document.getElementById("indexPart").style.display="block";
    this.newdocument=addForm.value;

    this.documentService.addDocument(addForm.value).subscribe(
      (response : Document)=>{console.log(response);
        this.getDocument();
      },
      (error:HttpErrorResponse)=>{alert(error.message);}
    );



  }
  public modals(doc : Document,mode:String){
      if (mode==='delete')
      {
        this.deleteDocument=doc;
      }
  }

  public modals2(doc: DocumentIndexe,mode:String)
  {
    if (mode==='delete')
    {
      this.deleteIdxDocument=doc;
    }
  }
  public onDeleteDoc(id:String):void{
    document.getElementById("delete-doc-form").click();
    
    this.documentService.deleteDocument(id).subscribe(
      (response : void)=>{console.log(response);
      this.getDocument();
      },
      (error : HttpErrorResponse)=>{alert(error.message);}
    );
  }

  public close(){
    document.getElementById('toggle').style.display='none';
  }

  public close2(){
    this.close();
    document.getElementById('close-permession-form').click();
  }
  
  public showDiv(){
    if (document.getElementById("toggle").style.display === 'none')
      document.getElementById("toggle").style.display = 'block';
    else
      document.getElementById("toggle").style.display = 'none';
  }
    
  public showDiv2(){
    if (document.getElementById("toggle2").style.display === 'none')
      document.getElementById("toggle2").style.display = 'block';
    else
      document.getElementById("toggle2").style.display = 'none';
  }
  public onCheck(){

    let test=false;
    let i=0;
    while (test==false)
    {
      if (this.documents[i].nom===this.newdocument.nom)
        {
          this.newdocument.docid=this.documents[i].docid;
          test=true;
        }
        i=i+1;
    }
  }
  public onAddIndexeDoc(addFormID :NgForm):void{
  this.documentIndexeService.addDocumentIndexe(addFormID.value).subscribe(
    (response : DocumentIndexe) =>{console.log(response);
      this.getIndexeOfDocument();
      console.log(addFormID.value);
    },
    (error:HttpErrorResponse)=>{alert(error.message);}
  )
  }

  public onDeleteIndexDoc(id:String):void{
    document.getElementById("delete-docidx-form").click();
    this.documentIndexeService.deleteDocumentIndexe(id).subscribe(
      (response : void)=>{console.log(response);
        this.getIndexeOfDocument();
        },
        (error : HttpErrorResponse)=>{alert(error.message);}
    );
  }

  public onDisplay(){
    document.getElementById("docform").style.display="block";
    document.getElementById("indexPart").style.display="none";

  }







  //pagination document
  page = 1;
  count = 0;
  tableSize = 5;
  tableSizes = [5, 10,15,20];

  onTableDataChange(event){
    this.page = event;
    this.getDocument();
  }  

  onTableSizeChange(event): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getDocument();
  }  
  
  
  //pagination document
  page2 = 1;
  count2 = 0;
  tableSize2 = 7;
  tableSizes2 = [5, 10,15,20];

  onTableDataChange2(event){
    this.page2 = event;
    this.getIndexe();
  }  

  onTableSizeChange2(event): void {
    this.tableSize2 = event.target.value;
    this.page2 = 1;
    this.getIndexe();
  }  

}
