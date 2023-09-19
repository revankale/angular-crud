import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from '../shared/service.service';
import { DialogPosition, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent {

  empform: FormGroup;

  education: string[] = ["Matric", "Diploma", "Graduation", "Post Graduation"]

  constructor(private fb: FormBuilder, private service: ServiceService, private dialogref: MatDialogRef<AddEditEmpComponent>, ) {
    this.empform = this.fb.group({
      firstname: '',
      lastname: '',
      email: '',
      dob: '',
      gender: '',
      education: '',
      company: '',
      exp: '',
      package: ''
    })

  }

  onFormSubmit() {
    if (this.empform.valid) {
      // console.warn(this.empform.value)
      this.service.addEmployee(this.empform.value).subscribe({
        next: (val: any) => {
          alert("Employee added successfully 0")
          this.dialogref.close(true)
        },
        error: (err: any) => {
          alert(err);
        }
      })
    }
  }


}
