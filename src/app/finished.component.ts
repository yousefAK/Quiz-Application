import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
    selector: 'app-finish',
    template: `
        <h1>Your Score:</h1>
        <h2>{{data.correct}}/{{data.total}}</h2>
    `,
    styleUrls: ['./app.component.css']
})
export class FinishedComponent {

    constructor(@Inject(MAT_DIALOG_DATA) private data) {
    }

}
