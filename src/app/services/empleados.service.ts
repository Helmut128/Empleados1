import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class EmpleadosService {
  private empleados = [
    {
      Code: '0',
      NombreCompleto: 'Admin',
      Turno: 'TODO EL DIA',
      EntryTime: '07:00',
      ExitTime: '21:00',
    },
    {
      Code: '000',
      NombreCompleto: 'Julian Alvarez',
      Turno: 'Noche',
      EntryTime: '09:02',
      ExitTime: '18:00',
    },
    {
      Code: '001',
      NombreCompleto: 'Helmut Ibrahim Martinez Aragón',
      Turno: 'Noche',
      EntryTime: '07:10',
      ExitTime: '18:00',
    },
    {
      Code: '002',
      NombreCompleto: 'Ibrahim Helmut Martinez Aragon ',
      Turno: 'Dia',
      EntryTime: '08:30',
      ExitTime: '17:30',
    },
    {
      Code: '003',
      NombreCompleto: 'Marcelo Martinez Aragon ',
      Turno: 'Dia',
      EntryTime: '08:10',
      ExitTime: '17:30',
    },
    {
      Code: '004',
      NombreCompleto: 'Pedro Infante',
      Turno: 'Noche',
      EntryTime: '09:23',
      ExitTime: '18:00',
    },
    {
      Code: '005',
      NombreCompleto: 'Pepe del rosario Cruz Moreno',
      Turno: 'Noche',
      EntryTime: '09:03',
      ExitTime: '18:00',
    },
    {
      Code: '006',
      NombreCompleto: 'María Fernández',
      Turno: 'Noche',
      EntryTime: '08:45',
      ExitTime: '18:00',
    },
    {
      Code: '007',
      NombreCompleto: 'Juan Pérez',
      Turno: 'Día',
      EntryTime: '08:00',
      ExitTime: '17:30',
    },
    {
      Code: '008',
      NombreCompleto: 'Ana González',
      Turno: 'Día',
      EntryTime: '07:30',
      ExitTime: '17:00',
    },
    {
      Code: '009',
      NombreCompleto: 'Luis Martínez',
      Turno: 'Noche',
      EntryTime: '09:15',
      ExitTime: '18:00',
    },
  ];

  constructor() {}

  getEmployeeByCode(code: string) {
    return this.empleados.find((empleados) => empleados.Code === code);
  }
}
