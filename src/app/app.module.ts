import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";


import { NgModule } from '@angular/core';

import { RootComponent } from './app.component';
import { FatherComponent } from './family/father/father.component';
import { MotherComponent } from './family/mother/mother.component';
import { SonComponent } from './family/son/son.component';
import { DaughterComponent } from './family/daughter/daughter.component';
import { NuclearFamilyComponent } from './family/nuclear-family/nuclear-family.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { TaskmanagerComponent } from './todo/taskmanager/taskmanager.component';
import { InBuiltDirectiveComponentComponent } from './directive/in-built-directive-component/in-built-directive-component.component';
import { SetbgDirective } from './directive/customdirective/setbg.directive';
import { MypipecomponentComponent } from './inbuiltpipes/mypipecomponent/mypipecomponent.component';
import { SortStringPipePipe } from './inbuiltpipes/custompipe/sort-string-pipe.pipe';
import { SortNumberPipePipe } from './inbuiltpipes/custompipe/sort-number-pipe.pipe';
import { ReverseStringPipe } from './inbuiltpipes/custompipe/reverse-string.pipe';
import { SearchFilterPipe } from './inbuiltpipes/custompipe/search-filter.pipe';
import { TemplateformComponent } from './forms/templateform/templateform.component';
import { ModelformComponent } from './forms/modelform/modelform.component';
import { Consumeservice1Component } from './consumeServices/consumeservice1/consumeservice1.component';
import { Consumeservice2Component } from './consumeServices/consumeservice2/consumeservice2.component'
import {UserDetailComponent } from "./userDetail/user-detail/user-detail.component";

import {CustomLocalServiceService} from './services/custom-local-service.service';
import { ConsumeRemoteServicComponent } from './consumeServices/consume-remote-servic/consume-remote-servic.component';


const myroutes:Routes = [
  {
    path:'',
    component:TaskmanagerComponent,
    pathMatch:'full'
  },
  {
    path:'family',
    component:NuclearFamilyComponent,
    children:[
      {
        path:'father',
        component:FatherComponent
      },
      {
        path:'mother',
        component:MotherComponent
      },
      {
        path:'son',
        component:SonComponent
      },
      {
        path:'daughter',
        component:DaughterComponent
      }
    ]
  },
  {
    path:'todo',
    component:TaskmanagerComponent
  },
  {
    path:'directive',
    component:InBuiltDirectiveComponentComponent
  },
  {
    path:'inbuiltpipe',
    component:MypipecomponentComponent
  },
  {
    path:'templateform',
    component:TemplateformComponent
  },
  {
    path:'modelform',
    component:ModelformComponent
  },
  {
    path:'consumeservice1',
    component:Consumeservice1Component
  },
  {
    path:'consumeservice2',
    component:Consumeservice2Component
  },
  {
    path:'consumeremote',
    component:ConsumeRemoteServicComponent,
    children:[
      {
        path:':id',
        component:UserDetailComponent
      }
    ]
  },

  {
    path:'**',
    component:NotFoundComponentComponent,
  }
]




@NgModule({
  declarations: 
  [
    RootComponent,
    FatherComponent,
    MotherComponent,
    SonComponent,
    DaughterComponent,
    NuclearFamilyComponent,
    NotFoundComponentComponent,
    TaskmanagerComponent,
    InBuiltDirectiveComponentComponent,
    SetbgDirective,
    MypipecomponentComponent,
    SortStringPipePipe,
    SortNumberPipePipe,
    ReverseStringPipe,
    SearchFilterPipe,
    TemplateformComponent,
    ModelformComponent,
    Consumeservice1Component,
    Consumeservice2Component,
    ConsumeRemoteServicComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(myroutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CustomLocalServiceService],
  bootstrap: [RootComponent]
})

 export class RootModule { }
