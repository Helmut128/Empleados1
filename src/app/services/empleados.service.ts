import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private empleados = [
    { code: '0', nombreCompleto: 'Admin', turno: 'TODO EL DIA', entryTime: '07:00', exitTime: '21:00' },
    { code: '0001', nombreCompleto: 'Helmut Ibrahim Martinez Aragón', turno: 'Noche', entryTime: '09:00', exitTime: '18:00' },
    { code: '0002', nombreCompleto: 'Ibrahim Helmut Martinez Aragon ', turno: 'Dia', entryTime: '08:30', exitTime: '17:30' },
    { code: '0003', nombreCompleto: 'Ibrahim Helmut Martinez Aragon ', turno: 'Dia',entryTime: '08:30', exitTime: '17:30' },
    { code: '0004', nombreCompleto: 'Helmut Ibrahim Martinez Aragón', turno: 'Noche', entryTime: '09:00', exitTime: '18:00' },
  
  ];

  constructor() { }

  getEmployeeByCode(code: string) {
    return this.empleados.find(empleados => empleados.code === code);
  }
}
