import { Component, OnInit } from '@angular/core';
import { MatDialog, PageEvent, MatTableDataSource } from '@angular/material';
import { CommonService } from 'src/app/components/common/common.service';
import { UIService } from 'src/app/components/shared/uiservices/UI.service';
import { MessageBoxService } from 'src/app/components/messagebox/message-box.service';
import { AuthService } from 'src/app/components/security/auth/auth.service';
import { StudentAttendEntryComponent } from './studentattend-entry/studentattend-entry.component';
import { StudentAttendModel } from './studentattend.model';
import { RightModel } from 'src/app/components/security/auth/rights.model';
import { RouterModule, Routes } from '@angular/router';
import { PageSortComponent } from 'src/app/components/common/pageevents/page-sort/page-sort.component';
import { StudentAttendService } from './studentattend.service';
import { SelectModel } from 'src/app/components/misc/SelectModel';
import { SelectService } from 'src/app/components/common/select.service';
import { Send } from 'src/app/send.model';
import { AppGlobals } from 'src/app/app.global';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
    selector: 'app-studentattend',
    templateUrl: './studentattend.component.html',
    styleUrls: ['./studentattend.component.scss']
  })

export class StudentAttendComponent implements OnInit {

    displayedColumns: string[] =
        ['select', 'AttDate',  'scClassName','scGroupName','fullName','AttStatus','Remarks'];
        direction: string;
        header: string;
        edit: string;
        submit:string;
        cancel:string;
        fullName:string;
        studentCode:string;
        AttDate:string;
        AttStatus:string;
        scClassName:string;
        scGroupName:string;
        Remarks:string
    dataSource: any;
    isLastPage = false;
    pTableName: string;
    pScreenId: number;
    pTableId: number;
    recordsPerPage: number;
    currentPageIndex: number;
    menuId: number;
    model: Send;
    indexes: StudentAttendModel;
    totalRecords: number;
    pageSizeOptions: number[] = [5, 10, 25, 100];

    clickedRows = new Set<StudentAttendModel>();
    selection = new SelectionModel<StudentAttendModel>(true, []);


    screenRights: RightModel = {
        amendFlag: true,
        createFlag: true,
        deleteFlag: true,
        editFlag: true,
        exportFlag: true,
        printFlag: true,
        reverseFlag: true,
        shortCloseFlag: true,
        viewFlag: true
      };
  scName: string;

    constructor(
        public dialog: MatDialog,
        private _cf: CommonService,
        private _ui: UIService,
        private _msg: MessageBoxService,
        private _auth: AuthService,
        private _select: SelectService,
        private _globals: AppGlobals,
        private studentattendservice: StudentAttendService
      ) {
        this.pTableName = 'StudentAttend';
        this.pScreenId = 74;
        this.pTableId = 74;
        this.recordsPerPage = 10;
        this.currentPageIndex = 1;
        this.menuId = 1019106011;
      }

  ngOnInit() {
      this.refreshMe();
  }

  refreshMe() {
    if(localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
      this.direction = "ltr"
      this.header = "Student attendance"
   this.AttDate="Date"
   this.AttStatus="Status"
    this.studentCode="Code"
    this.fullName="Name"
    this.scClassName="Class"
    this.scGroupName="Group"
    this.Remarks = "Remarks"
    this.edit = "Edit"
    this.submit = "Submit"
    this.cancel = "Cancel"
  }
  else if(localStorage.getItem(this._globals.baseAppName + '_language') == "16002") {
    this.direction = "rtl"
    this.header = "???????????? ????????????"
    this.fullName="??????????"
    this.AttStatus = "????????????"
    this.studentCode="??????????"
    this.scName="??????????"
    this.scClassName="??????????"
    this.scGroupName="????????????????"
    this.Remarks = "??????????????"
    this.edit = "??????????"
    this.submit = "??????????"
    this.cancel = "??????????"
  }

    this._cf.getPageData('StudentAttend', this.pScreenId, this._auth.getUserId(), this.pTableId,
      this.recordsPerPage, this.currentPageIndex, false).subscribe(
        (result) => {
          this.totalRecords = result[0].totalRecords;
          this.recordsPerPage = this.recordsPerPage;
          this.dataSource = new MatTableDataSource(result);
          this.indexes = result
        }
      );

    this._auth.getScreenRights(this.menuId).subscribe((rights: RightModel) => {
      this.screenRights = {
        amendFlag: true,
        createFlag: true,
        deleteFlag: true,
        editFlag: true,
        exportFlag: true,
        printFlag: true,
        reverseFlag: true,
        shortCloseFlag: true,
        viewFlag: true
      };
    });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  paginatoryOperation(event: PageEvent) {
    try {
      this._cf.getPageDataOnPaginatorOperation(event, this.pTableName, this.pScreenId, this._auth.getUserId(),
        this.pTableId, this.totalRecords).subscribe(
          (result: StudentAttendModel) => {
            this._ui.loadingStateChanged.next(false);
            this.totalRecords = result[0].totalRecords;
            this.recordsPerPage = event.pageSize;
            this.dataSource = result;
          }, error => {
            this._ui.loadingStateChanged.next(false);
            this._msg.showAPIError(error);
            return false;
          });
    } catch (error) {
      this._ui.loadingStateChanged.next(false);
      this._msg.showAPIError(error);
      return false;
    }
  }

  onSort = function () {
    this.dialogRef = this.dialog.open(PageSortComponent, {
      disableClose: true,
      data: this.pTableId
    });
  };

  onAdd = function () {
    this.model = {
      tableId: 74,
      recordId: 0,
      userId: 26,
      roleId: 2,
      languageId: +localStorage.getItem(this._globals.baseAppName + '_language')
    };
    if(localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
      localStorage.setItem(this._globals.baseAppName + '_Add&Edit', "Add Student Attendance");
    }else if(localStorage.getItem(this._globals.baseAppName + '_language') == "16002") {
      localStorage.setItem(this._globals.baseAppName + '_Add&Edit', "?????????? ????????");
    }
    
    this.openEntry2(this.model);
  };

  onView = (id: number) => {
    this._ui.loadingStateChanged.next(true);
    this.studentattendservice.getStudentAttendEntry(id).subscribe((result: StudentAttendModel) => {
      this._ui.loadingStateChanged.next(false);
      result.entryMode = 'V';
      result.readOnly = true;
      this.openEntry(result);
    });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  masterToggle() {
    this.isAllSelected() ?
        (this.selection.clear() ,this.clickedRows.clear()):
        (this.selection.clear(), this.dataSource.data.forEach(row => {this.selection.select(row); if (!this.clickedRows.has(row)) {

          this.clickedRows.add(row)
        }}))
  }

  onId(id: number, row:StudentAttendModel) {
    
    if (this.clickedRows.has(row)) {
      this.clickedRows.delete(row)
    }else {
      this.clickedRows.add(row)
    }

  }
  onEdit = (id: number) => {
    this.model = {
      tableId: 74,
      recordId: id,
      userId: 26,
      roleId: 2,
      languageId: +localStorage.getItem(this._globals.baseAppName + '_language')
    };
    if(localStorage.getItem(this._globals.baseAppName + '_language') == "16001") {
      localStorage.setItem(this._globals.baseAppName + '_Add&Edit', "Edit Student Attendance");
    }else if(localStorage.getItem(this._globals.baseAppName + '_language') == "16002") {
      localStorage.setItem(this._globals.baseAppName + '_Add&Edit', "?????????? ????????");
    }
    
    this.openEntry2(this.model)


  }

  onDelete = function(id: number) {
      
  };

  openEntry = function (result: StudentAttendModel) {
    if (result === undefined) {
      this.dialogRef = this.dialog.open(StudentAttendEntryComponent, {
        disableClose: true,
        maxWidth: '100vw',
        maxHeight: '100vh',
        height: '100%',
        width: '100%',
        panelClass: 'custom-dialog',
        data: {}
      });
    } else {
      this.dialogRef = this.dialog.open(StudentAttendEntryComponent, {
        disableClose: false,
        maxWidth: '100vw',
        maxHeight: '100vh',
        height: '100%',
        width: '100%',
        panelClass: 'custom-dialog',
        data: result
      });
    }
    this.dialogRef.afterClosed().subscribe(() => {
      this.refreshMe();
    });
  };
  openEntry2 = function (result: Send) {
    if (result === undefined) {
      this.dialogRef = this.dialog.open(StudentAttendEntryComponent, {
        disableClose: true,
        
        data: {}
      });
    } else {
      this.dialogRef = this.dialog.open(StudentAttendEntryComponent, {
        disableClose: true,
        data: result
      });
    }
    this.dialogRef.afterClosed().subscribe(() => {
      this.refreshMe();
    });
  };
}
