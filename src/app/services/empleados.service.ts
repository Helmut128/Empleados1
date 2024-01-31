import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  private empleados = [
    { code: '0', nombreCompleto: 'Admin', turno: 'TODO EL DIA', entryTime: '07:00', exitTime: '21:00' },
    { code: '0000', nombreCompleto: 'Julian Alvarez', turno: 'Noche', entryTime: '09:02', exitTime: '18:00' },
    { code: '0001', nombreCompleto: 'Helmut Ibrahim Martinez Aragón', turno: 'Noche', entryTime: '07:10', exitTime: '18:00' },
    { code: '0002', nombreCompleto: 'Ibrahim Helmut Martinez Aragon ', turno: 'Dia', entryTime: '08:30', exitTime: '17:30' },
    { code: '0003', nombreCompleto: 'Shakira Martinez Aragon ', turno: 'Dia', entryTime: '08:10', exitTime: '17:30' },
    { code: '0004', nombreCompleto: 'Pedro Infante', turno: 'Noche', entryTime: '09:23', exitTime: '18:00' },
    { code: '0005', nombreCompleto: 'Pepe del rosario Cruz Moreno', turno: 'Noche', entryTime: '09:03', exitTime: '18:00' },
    { code: '0006', nombreCompleto: 'María Fernández', turno: 'Noche', entryTime: '08:45', exitTime: '18:00' },
    { code: '0007', nombreCompleto: 'Juan Pérez', turno: 'Día', entryTime: '08:00', exitTime: '17:30' },
    { code: '0008', nombreCompleto: 'Ana González', turno: 'Día', entryTime: '07:30', exitTime: '17:00' },
    { code: '0009', nombreCompleto: 'Luis Martínez', turno: 'Noche', entryTime: '09:15', exitTime: '18:00' }
  ]
  ;

  constructor() { }

  getEmployeeByCode(code: string) {
    return this.empleados.find(empleados => empleados.code === code);
  }
}
