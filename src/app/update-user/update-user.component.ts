import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {UserService} from '../user/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../user/user';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit{
  User: User;
  id: string;

  groupForm: FormGroup;
  constructor(private userService: UserService, private formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute) {
    this.groupForm = this.formBuilder.group({
      id: '',
      name: '',
      password: '',
    });
  }

  onSubmit(): void {
    const data = {
      id: this.id,
      name: this.groupForm.get('name').value,
      password: this.groupForm.get('password').value === '' ? this.User.password : this.groupForm.get('password').value
    };
    this.userService.updateUser(data);
    this.router.navigateByUrl('/getUsers');
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params.id !== undefined){
        this.userService.getUser(params.id).subscribe( user => {
          this.User = user;
          this.id = params.id;
          console.log(user);
          console.log(this.User);
        } );
      }
    });
  }

  deleteFavorites(): void{
    this.userService.removeFavorite(this.User.id);
  }


}
