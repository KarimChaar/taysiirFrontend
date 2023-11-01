import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    /*{ path: '/icons', title: 'Icons',  icon:'ni-planet text-blue', class: '' },*/
   /* { path: '/login', title: 'Login',  icon:'ni-key-25 text-info', class: '' },*/
    { path: '/search', title: 'Search for a document',  icon:'fa fa-search', class: '' },
    { path: '/approval', title: 'document approval',  icon:'fa fa-check-circle', class: '' },
    { path: '/browsing', title: 'browsing',  icon:'ni ni-archive-2', class: '' },
    { path: '/archive', title: 'Archive document',  icon:'fas fa-file-archive', class: '' },
    
];
export const ROUTES1: RouteInfo[]=[
{path:'/document',title:'Document Data',icon:'fa fa-archive',class:''},
{path:'/indexe',title:'Indexing Management', icon:'fa fa-archive',class:''},
{path:'/security',title:'Permission management', icon:'fa fa-low-vision',class:''}

]
export const ROUTES2:RouteInfo[]=[
  { path: '/personnes', title: 'Users',icon:'fa fa-user',class:''},
  { path: '/departement', title: 'Administrations',icon:'fa fa-building' ,class:''},
  { path: '/groupe',    title: 'Groups' , icon:'fa fa-users', class:''}
]


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public menuItems1:any[];
  public menuItems2:any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });

   this.menuItems1=ROUTES1.filter(menuItems1 => menuItems1);
   this.router.events.subscribe((event)=>{
     this.isCollapsed=true;
   });

   this.menuItems2=ROUTES2.filter(menuItems2 => menuItems2);
   this.router.events.subscribe((event)=>{
     this.isCollapsed=true;
   })
  }
}
