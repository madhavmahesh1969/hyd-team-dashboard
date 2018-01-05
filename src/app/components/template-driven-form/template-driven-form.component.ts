import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';

@Component({
  selector: 'app-template-driven-signup-form',
  templateUrl: './template-driven-form.component.html'
})

export class TemplateDrivenFormComponent {
  value: any;
  
  submit(form) {
    this.value = form; 
  }
  constructor() {
  }

  ngOnInit() {
  }

}
