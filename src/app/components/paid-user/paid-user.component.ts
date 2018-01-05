import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-paid-user',
  templateUrl: './paid-user.component.html',
  styleUrls: ['./paid-user.component.scss']
})
export class PaidUserComponent implements OnInit {
  user: FormGroup;

  constructor() { }

  ngOnInit() {
    this.user = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      account: new FormGroup({
        email: new FormControl('', Validators.required),
        confirm: new FormControl('', Validators.required)
      })
    });
  }
  onSubmit(){
    console.log(this.user.value, this.user.valid);
  }

}
