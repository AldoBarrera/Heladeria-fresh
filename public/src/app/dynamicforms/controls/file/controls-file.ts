import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';
import { Controls } from '../shared/controls';

export class File extends Controls<string> {
  controlType = 'file';
  type: string;

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'] || '';
  }

  modelChanged(event, controlForm) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      let fileReader = new FileReader();
      fileReader.onload = (e) => {
        this.value = fileReader.result  as string;
        controlForm.setValue(this.value);
      }
      fileReader.readAsDataURL(file);
      }
  }

  reset() {
    this.value = '';
  }
}