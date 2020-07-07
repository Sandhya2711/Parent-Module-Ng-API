import { Component } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import * as XLSX from 'xlsx';
import { ExcelServiceService } from './excel-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private headers = new Headers({ 'Content-Type': 'multipart/form-data' });

  message: string = "Not yet uploaded";
  noOfRows = 5;
  uploadedFile: File;
  file: any;
  arrayBuffer: any;
  filelist: any;
  data: string[][];
  p: number = 1;
  element: HTMLElement;
  json;
  formData = false;

  jsonResponse: any


  constructor(private service: ExcelServiceService, private httpClient: HttpClient) {
    // this.jsonResponse = this.service.getFile();
    // console.log(this.jsonResponse);
  }

  filename: string;

  format_check() {
    var extn = this.filename.split(".").pop();
    if (extn !== "xlsx" && extn !== "xls") {
      alert("File format not supported");
      return 0;
    }
    return 1;
  }

  empty_check() {
    if (this.data.length == 0) {
      alert("Empty file");
      return 0;
    }
    return 1;

  }

  empty_rowCheck() {
    var str = "ALTERNATECONTACT";
    var flag = 0;
    for (var i = 0, len = this.data[0].length; i < len; i++) {
      // inner loop applies to sub-arrays

      if (this.data[0][i] != null && this.data[0][i].toUpperCase().localeCompare(str) != 0) {
        for (var j = 1, len1 = this.data.length; j < len1; j++) {
          //accesses each element of each sub-array in turn
          if (this.data[j][i] == null) {
            flag = 1;
            alert(this.data[0][i] + " is empty");
            break;
          }
          if (flag == 1)
            break;
        }
      }
    }
    return flag;
  }



  addfile(evt: any) {
    this.filename = (<HTMLInputElement>event.target).files[0].name;

    if (this.format_check() == 1) {
      const target: DataTransfer = <DataTransfer>(evt.target);

      const reader: FileReader = new FileReader();

      reader.onload = (e: any) => {
        const bstr: string = e.target.result;

        const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

        const wsname: string = wb.SheetNames[0];

        const ws: XLSX.WorkSheet = wb.Sheets[wsname];

        this.data = (XLSX.utils.sheet_to_json(ws, { header: 1 }));
        console.log(this.data);
        if (this.empty_check() == 1) {


          //  this.jsonResponse = this.service.validation(this.data);
          // this.jsonResponse = this.service.validation(this.data);
        this.jsonResponse=  this.service.validation(this.data);
          this.formData = true;
          // this.printErrors();
        }
      };

      reader.readAsBinaryString(target.files[0]);
      this.uploadedFile = target.files[0];
      // this.sendFile();
    }
  }




  //To Upload the file to server and getting the response back
  sendFile() {
    console.log("Uploading the file to server : " + this.uploadedFile.name);

    const excelData = new FormData();
    excelData.append('file', this.uploadedFile, this.uploadedFile.name);

    this.httpClient.post('http://localhost:8080/uploadFile', excelData, { observe: 'response' }).subscribe((response) => {

      if (response.status === 200) {

        this.message = 'File uploaded successfully';

        //Setting the response data
        this.jsonResponse = JSON.parse(JSON.stringify(response.body));

        // this.printErrors();
      } else {

        this.message = 'File not uploaded';

      }

    }

    );

  }
  public printErrors() {

    for (let row of this.jsonResponse["errorRows"]) {
      //   console.log(error);
      for(let error of row['errors']){
      let id = row['rowSrNo'] + error["errorColumn"];
      this.element = document.getElementById(id);
      //  console.log(id);  

      //   console.log(this.element);
      if (this.element != null) {
        this.element.classList.add('bg-danger');
        this.element.title = error["errorMsg"];
      }

    }
    }
  }

  



  //  this.element=document.getElementById(id);
  //  if(this.element==null)
  //  console.log(id);

  //  this.element.className="bg-danger";
  // }

  // public errorColor(id)
  // {


  // }  

}