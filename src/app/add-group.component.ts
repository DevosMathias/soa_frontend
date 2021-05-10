import {Component} from '@angular/core';
import {GroupService} from './group.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-add-group',
  templateUrl: './add-group.component.html'
})

export class AddGroupsComponent {
  groupForm: FormGroup;


  constructor(private groupService: GroupService, private formBuilder: FormBuilder) {
    this.groupForm = this.formBuilder.group({
      name: '',
      user1: '',
      user2: '',
      user3: '',
      user4: '',
      description: ''
    });
  }


  onSubmit(): void {
    /*const formData: any = new FormData();
    formData.append('name', this.groupForm.get('name').value);
    formData.append('user1', this.groupForm.get('user1').value);
    formData.append('user2', this.groupForm.get('user2').value);
    formData.append('user3', this.groupForm.get('user3').value);
    formData.append('user4', this.groupForm.get('user4').value);
    formData.append('description', this.groupForm.get('description').value);
    console.log(formData);¨*/
    /*const data = {name: this.groupForm.get('name').value,
      user1: this.groupForm.get('user1').value,
      user2: this.groupForm.get('user2').value,
      user3: this.groupForm.get('user3').value,
      user4: this.groupForm.get('user4').value,
      description: this.groupForm.get('description').value};*/
    const data = 'name=' + encodeURIComponent(this.groupForm.get('name').value)
      + '&user1=' + encodeURIComponent(this.groupForm.get('user1').value)
      + '&user2=' + encodeURIComponent(this.groupForm.get('user2').value)
      + '&user3=' + encodeURIComponent(this.groupForm.get('user3').value)
      + '&user4=' + encodeURIComponent(this.groupForm.get('user4').value)
      + '&description=' + encodeURIComponent(this.groupForm.get('description').value);


    this.groupService.addGroup(data);
  }
}
