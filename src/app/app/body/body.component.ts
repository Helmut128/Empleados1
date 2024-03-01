import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { DxDataGridModule, DxButtonModule } from 'devextreme-angular';

import * as XLSX from 'xlsx';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [NgFor, NgIf, DxDataGridModule, DxButtonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css',
})
export class BodyComponent {
  excelData: any[] = [];
  columns: any[] = [];

  constructor() {}

  handleImportClick() {
    const inputElement = document.getElementById(
      'excelFileInput'
    ) as HTMLInputElement;
    inputElement.value = ''; // Restablecer el valor del input
    inputElement.click();
  }

  handleFileChange(event: any) {
    const file = event.target.files[0];

    if (file) {
      const fileReader = new FileReader();

      fileReader.onload = () => {
        const data = new Uint8Array(fileReader.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        this.excelData = XLSX.utils.sheet_to_json(sheet, { header: 2 });

        if (this.excelData.length > 0) {
          this.columns = Object.keys(this.excelData[0]);
        }
      };

      fileReader.readAsArrayBuffer(file);
    }
  }

  handleClearClick() {
    // Limpiar los datos del archivo de Excel
    this.excelData = [];
  }
}
