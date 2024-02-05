import { Component } from '@angular/core';
import {
  DxToolbarModule,
  DxListModule,
  DxFormModule,
} from 'devextreme-angular';
import { EmpleadosService } from '../../services/empleados.service';
import { DatePipe } from '@angular/common';
import { NgIf, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';

//libreria para descargar en EXCEL
import * as XLSX from 'xlsx';

//Importar interfaz
import { asistencia } from '../../interface/asistencia';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DxToolbarModule, DatePipe, NgIf, NgFor, DxListModule, DxFormModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  codigosIngresados: string[] = [];
  empleadosIngresados: any[] = []; // Array para almacenar la información de los empleados ingresados
  codigoIngresado: string = '';
  date = new Date();
  empleado: any;
  empleadoEncontrado: boolean = false;
  codigoInvalido: boolean = false;
  codigoIngresado2: number = 0;
  //Array asistencia
  listaAsistencia: asistencia[] = [];

  data: any[] = [];

  constructor(private empleadoService: EmpleadosService) {}

  showEmpleadosDetails(code: string) {
    this.empleado = this.empleadoService.getEmployeeByCode(code);
    this.empleadoEncontrado = !!this.empleado;

    if (this.empleadoEncontrado) {
      // Agregar el código ingresado al array
      this.codigosIngresados.push(code);

      // Agregar la información del empleado al array de empleados ingresados
      //this.empleadosIngresados.push(this.empleado);
      this.empleadosIngresados = [this.empleado, ...this.empleadosIngresados];
      //this.empleadosIngresados.reverse();

      // Restablecer el estado del mensaje de error
      this.codigoInvalido = false;
    } else {
      // Marcar como código inválido y mostrar el mensaje de error
      this.codigoInvalido = true;
    }
  }
  //Exportar excel
  exportToExcel(): void {
    this.data = this.empleadosIngresados;
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.data);
    const workbook: XLSX.WorkBook = {
      Sheets: { data: worksheet },
      SheetNames: ['data'],
    };
    const excelBuffer: any = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });
    this.saveExcelFile(excelBuffer, 'empleadosIngresados');
  }

  private saveExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: 'application/octet-stream' });
    const url: string = window.URL.createObjectURL(data);
    const a: HTMLAnchorElement = document.createElement('a');
    a.href = url;
    a.download = fileName + '.xlsx';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }
  //Termina exportar excel
  onKeyPress(event: KeyboardEvent) {
    const inputElement = event.target as HTMLInputElement;
    const keyPressed = event.key;

    // Verificar si la tecla presionada es un número
    if (!/^\d$/.test(keyPressed)) {
      // Si no es un número, prevenir la acción por defecto
      event.preventDefault();
    }

    // Si se presionó "Enter"
    if (keyPressed === 'Enter') {
      this.empleadoEncontrado = false;
      // Actualizar el valor de codigoIngresado
      this.codigoIngresado = inputElement.value;
      this.showEmpleadosDetails(this.codigoIngresado);
      // Limpiar el input
      inputElement.value = '';
    }
  }

  registarAsistencia(): void {
    const horaRegistro = this.obtenerHoraActual();
    this.listaAsistencia.push({
      codigo: this.codigoIngresado2,
      horaRegistro: horaRegistro,
    });
    this.codigoIngresado2 = 1; //Reinicia el codigo despues de ingresarlo
  }

  obtenerHoraActual(): string {
    const ahora = new Date();
    const horas = ahora.getHours().toString().padStart(2, '0');
    const minutos = ahora.getMinutes().toString().padStart(2, '0');
    const segundos = ahora.getSeconds().toString().padStart(2, '0');
    return `${horas}:${minutos}:${segundos}`;
  }

  ngOnInit() {}
}
