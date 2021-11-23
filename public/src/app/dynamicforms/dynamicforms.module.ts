import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule }  from '@angular/router';
import { HttpClientModule }  from '@angular/common/http';
import { FormsComponent } from "./forms/forms.component";
import { ControlsComponent } from "./controls/controls.component";
import { FileControlComponent } from "./controls/file/file.control.component";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  declarations: [
    FormsComponent,
    ControlsComponent,
    FileControlComponent
  ],
  exports: [
    FormsComponent,
    ControlsComponent,
    FileControlComponent,
    BrowserAnimationsModule
  ]
})
export class DynamicFormsModule { }
