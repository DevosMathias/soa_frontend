import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../user/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  groupForm: FormGroup;
  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router) {
    this.groupForm = this.formBuilder.group({
      name: '',
      password: '',
    });
  }

  onSubmit(): void {
    const data = {
      name: this.groupForm.get('name').value,
      password: this.groupForm.get('password').value,
    };
    this.userService.addUser(data);
    this.router.navigateByUrl('/getUsers');
  }

  ngOnInit(): void {
  }

}
