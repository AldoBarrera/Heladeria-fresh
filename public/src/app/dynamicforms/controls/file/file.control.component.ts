import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { Controls } from '../shared/controls';

@Component({
  selector: 'control-file',
  templateUrl: './file.control.component.html'
})
export class FileControlComponent{
  controlType = 'file';
  type: string;

  @Input() control: Controls<any>;
  @Input() form: FormGroup;
}