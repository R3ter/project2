import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { AppComponent } from './app.component';
import { PersonsComponent } from './persons/persons.component';
import { CreatepersonComponent } from './createperson/createperson.component';
import { UpdatepersonComponent } from './updateperson/updateperson.component';



/* Material */
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    CreatepersonComponent,
    UpdatepersonComponent
  ],
  imports: [
    MatTabsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
