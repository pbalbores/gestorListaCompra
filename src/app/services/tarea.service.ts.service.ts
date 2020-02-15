import { Injectable } from '@angular/core';
import { Tarea } from '../models/compraslist';

@Injectable({
  providedIn: 'root'
})
export class TareaServiceTsService {
  tareas: Tarea[] = [
    { id: 1, titulo: 'Comprar leche', cantidad: 6 },
    { id: 2, titulo: 'Comprar pan', cantidad: 1 },
    { id: 3, titulo: 'Comprar pasta de dientes', cantidad: 2 }
  ];

  constructor() { }

  getTareas() {
    return this.tareas;
  }
}
