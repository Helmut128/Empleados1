import { Component } from '@angular/core';
import { DxToolbarModule  } from 'devextreme-angular';
import { EmpleadosService } from '../../services/empleados.service';
import { DatePipe } from '@angular/common';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [DxToolbarModule, DatePipe, NgIf, NgFor],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  codigosIngresados: string[] = [];
  
  codigoIngresado: string = '';
  date = new Date();
  empleado: any;
  empleadoEncontrado: boolean = false;

  constructor(private empleadoService: EmpleadosService) {}

  showEmpleadosDetails(code: string){
    this.empleado = this.empleadoService.getEmployeeByCode(code);
    this.empleadoEncontrado = !!this.empleado; 
     // Agregar el código ingresado al array
  this.codigosIngresados.push(code);
  }

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
  ngOnInit() {
   
  }
}