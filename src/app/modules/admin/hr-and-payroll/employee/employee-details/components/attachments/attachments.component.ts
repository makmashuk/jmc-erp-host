import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { EmployeeDetailsService } from '../../services/employee-details.service';

@Component({
  selector: 'app-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.scss']
})
export class AttachmentsComponent implements OnInit {
  formInstance: any;
  fileInstance;
  employee_id = this._route.parent.snapshot.paramMap.get('id');

  config = {
    maxSize: 10,
    uploadConfig: {
      url: "test url",
      method: "POST",
      userRef: "test user",
    },
    formatsAllowed: ".jpg, .png, .mp4 , .pdf"
  }
   // @Private Accessors
   private _dialogRef: MatDialogRef<any>;

   // @ViewChild FORM
   @ViewChild('createForm')
   createForm: TemplateRef<any>;
 
   // @ViewChild CONFIRM MODAL
   @ViewChild('confirmationModal')
   private _confirmationModal: TemplateRef<any>;
  dataSource: any;
 

  constructor(
    private _dialog: MatDialog,

    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _employeeDetailsService: EmployeeDetailsService,
  ) { }

  ngOnInit(): void {
    this._produceForm();
  }

  handleFileInput(e){
    this.fileInstance = e;
    console.log(this.fileInstance);
  }
  // fileUploadHandler(e){
  //   console.log(e);
  // }


  handleCreateModal() {
    this._dialogRef = this._dialog.open(this.createForm, {
      width: '800px',
    });
  }

  handleSavingOperation(){
    const formInfo = this.formInstance.value;
    formInfo.employee_id = this.employee_id;
    formInfo.file = this.fileInstance[0];

    console.log(formInfo.file);
    // return;
    this._employeeDetailsService.createFileUpload(formInfo).subscribe(res => {
      // this.dataSource.push(res.data);
      // this._dialogRef.close();
      console.log(res);
      // this.handleCloseModal();
    });
  }

   // ------------------------------------------------------------------------------
  // @Private Methods
  // ------------------------------------------------------------------------------
  private _produceForm() {
    this.formInstance = this._formBuilder.group({
      file: [null, Validators.required],
      name: [null, Validators.required],
      document_type: [null, Validators.required],
      tag: [null, Validators.required],
      remark: [null, Validators.required],

    });
  }

}
