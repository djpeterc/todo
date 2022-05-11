import { Component, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  todoForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl('')
  });

  onSubmit(): void {

  }
}
