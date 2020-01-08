import { AuthenticationService } from './../../../services/auth/authentication.service';
import { Component, OnInit, Input, Output, Inject, EventEmitter } from '@angular/core';
import { FiltersListService } from '../../../services/filters/filters-list.service';
import {  MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {

  filterName;
  @Input() storeFilters;
  @Input() text;
  @Input() disabled;
  @Output() newFilter =  new EventEmitter();

  constructor(private filterListService:FiltersListService,
              public dialog: MatDialog,
              private snackBar: MatSnackBar,
              private authenticationService: AuthenticationService,
              private filtersListService:FiltersListService,
              ) { }

  // Notify when filter is created
  openSnackBar(message: string, action :string) {
    this.snackBar.open(message, action, {duration : 4000});
  }

  createFilter(result) {
    
    // Add needed properties to a copy of store filters
    let newFilter = {...this.storeFilters};
    newFilter.filters.filterName = result;
    newFilter.filters.userId = JSON.parse(localStorage.getItem('user'));
    
    this.filtersListService.createFilter(newFilter).subscribe(
      data => {
        this.newFilter.emit();
        this.openSnackBar(`${result} ${this.text.presets.SnackFilterCreated} !`,'');
      },
      error => { 
        console.log(error);
        this.authenticationService.logOut();
      });

  }

  // Modal to give the new filter a name
  openDialog(): void {
    const dialogRef = this.dialog.open(ModalContent, {
      width: '350px',
      height: '250px',
      data: {filterName: '', text:this.text}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.createFilter(result);
      }
    });
  }

  ngOnInit() {
  }

}
@Component({
  selector: 'dialog-overview-example-dialog',
  template: `<div>
                <p class='modal-title'>{{data.text.presets.modalTitle}}</p>
                <input matInput [(ngModel)]='data.filterName'/>
                <div class='modal-footer'>
                  <div class='button left' (click)="onNoClick()"><p>{{data.text.presets.close}}</p></div>
                  <div class='button'  [mat-dialog-close]="data.filterName" cdkFocusInitial><p>{{data.text.presets.ok}}</p></div>
                </div>
            </div>`,
  styleUrls: ['./dialog-box.component.css'],
})
export class ModalContent {

  constructor(
    public dialogRef: MatDialogRef<ModalContent>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}


