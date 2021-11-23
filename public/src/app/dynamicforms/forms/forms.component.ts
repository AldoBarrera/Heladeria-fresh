import { Component, Input, OnInit, Output , EventEmitter}  from '@angular/core';
import { FormGroup }                 from '@angular/forms';

import { Controls }              from '../controls/shared/controls';
import { ControlsService } from '../controls/shared/controls.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  providers: [ ControlsService ]
})
export class FormsComponent implements OnInit {

  @Input() controls: Controls<any>[] = [];
  @Input() isEdit: any;
  @Input() idModal: any;
  @Input() isModal: any;
  @Input() isPrint: Boolean = false;
  @Input() isConfirm: any;
  @Output() onSubmitCallback = new EventEmitter();
  @Output() onCompleteForm = new EventEmitter();
  form: FormGroup;
  payLoad = '';

  constructor(private contorlsService: ControlsService) {  }

  ngOnInit() {
    this.form = this.contorlsService.toFormGroup(this.controls);
    this.onCompleteForm.emit(this.form);
  }

  onSubmit() {

      this.onSubmitCallback.emit(this.form.value);
      this.payLoad = JSON.stringify(this.form.value);
      if(!this.isEdit) {
        this.contorlsService.resetFormGroup(this.controls);
        this.form.reset();
      }
      if(this.isModal) {
        document.getElementById(this.idModal).click(); 
      } 
    
        
  }

  
}