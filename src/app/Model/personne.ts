import { Departement } from 'src/app/Model/departement';
export interface Personne{

    matricule: String;
    nom:String;
    prenom:String;
    adresse:String;
    mail:String;
    post:String;
    tel:String;
    fax:String;
    telmobile:String;
    pwd:String;
    logindate:Date;
    loginip:String;
    failedloginip:String;
    failedlogindate:Date;
    failedattempts:Number;
    active:Boolean;
    departement?:Departement;
    isChecked:Boolean;

    

}