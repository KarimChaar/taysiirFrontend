import { Indexe } from "./indexe";

export interface DocumentIndexe{
    
    iddocid:String;
    presentation:String;
    longueur:Number;
    active:Boolean;
    obligatoire:Boolean;
    options:String;
    requetsql:String;
    champvaleur:String;
    champlibelle:String;
    document?:Document;
    indexe?:Indexe;



}