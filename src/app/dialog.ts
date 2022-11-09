import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  template: `
    <div>
      <div style="display: flex; flex-direction: row; justify-content: space-between;">
        <h2>Create New Object</h2>
      </div>
    </div>

    <div>
      <label matInput for="input">Example Input</label>
      <input matInput id="input" type="text">
    </div>


    <div>
      <button (click)="dialog.close()" style="margin-right: 1em;">Cancel</button>
      <button (click)="createNode()">Create</button>
    </div>
  `,
  styles: [``]
})
export class DialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialog: MatDialogRef<DialogComponent>) {
  }

  createNode() {
    this.dialog.close();
  }

}
