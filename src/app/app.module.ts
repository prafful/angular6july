import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

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
    InBuiltDirectiveComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component:MotherComponent,
        pathMatch:'full'
      },
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
        path:'**',
        component:NotFoundComponentComponent,
      }
    ])
    
  ],
  providers: [],
  bootstrap: [RootComponent]
})

 export class RootModule { }
