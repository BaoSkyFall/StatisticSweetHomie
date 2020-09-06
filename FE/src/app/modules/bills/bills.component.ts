import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}
export interface PeriodicElement {
  date: string;
  position: number;
  total: number;

}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, date: '6/9/2020 - 9:31 PM', total: 10079, },
  { position: 2, date: '6/9/2020 - 9:31 PM', total: 40026, },
  { position: 3, date: '6/9/2020 - 9:31 PM', total: 6941, },
  { position: 4, date: '6/9/2020 - 9:31 PM', total: 90122, },
  { position: 5, date: '6/9/2020 - 9:31 PM', total: 10811, },
  { position: 6, date: '6/9/2020 - 9:31 PM', total: 120107, },
  { position: 7, date: '6/9/2020 - 9:31 PM', total: 140067, },
  { position: 8, date: '6/9/2020 - 9:31 PM', total: 159994, },
  { position: 9, date: '6/9/2020 - 9:31 PM', total: 189984, },
  { position: 10, date: '6/9/2020 - 9:31 PM', total: 201797, },
  { position: 11, date: '6/9/2020 - 9:31 PM', total: 229897, },
  { position: 12, date: '6/9/2020 - 9:31 PM', total: 24305, },
  { position: 13, date: '6/9/2020 - 9:31 PM', total: 269815, },
  { position: 14, date: '6/9/2020 - 9:31 PM', total: 280855, },
  { position: 15, date: '6/9/2020 - 9:31 PM', total: 309738, },
  { position: 16, date: '6/9/2020 - 9:31 PM', total: 32065, },
  { position: 17, date: '6/9/2020 - 9:31 PM', total: 35453, },
  { position: 18, date: '6/9/2020 - 9:31 PM', total: 39948, },
  { position: 19, date: '6/9/2020 - 9:31 PM', total: 390983, },
  { position: 20, date: '6/9/2020 - 9:31 PM', total: 40078, },
];
@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.scss']
})
export class BillsComponent implements OnInit {
  myFilter = (d: Date): boolean => {
    const today = new Date()
    // Prevent Saturday and Sunday from being selected.
    return d.getTime() < today.getTime()
  }
  displayedColumns: string[] = ['position', 'date', 'total', 'action'];

  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(public dialog: MatDialog) { }
  openDialog(): void {
    const dialogRef = this.dialog.open(BillsDiaglog, {
      width: '250px',
      data: { name: 'this.name', animal: 'this.animal' }
    })


    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    })
  }
  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }




}
@Component({
  selector: './bills-dialog.component',
  templateUrl: './bills-dialog.component.html',
})
export class BillsDiaglog {

  constructor(
    public dialogRef: MatDialogRef<BillsDiaglog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
