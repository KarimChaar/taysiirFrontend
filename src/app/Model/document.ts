import { Departement } from "./departement";

export interface Document{
    docid:String;
    nom:String;
    description:String;
    planclassement:String;
    archive:String;
    template:String;
    workflow:String;
    doctitle:String;
    reglenom:String;
    dureevie:String;
    docdep?:Departement;


}