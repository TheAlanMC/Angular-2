import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abm',
  templateUrl: './abm.component.html',
  styleUrls: ['./abm.component.css']
})
export class AbmComponent {
  art = {
    codigo: 0,
    descripcion: '',
    precio: 0
  }

  articulos = [{ codigo: 1, descripcion: 'pernos', precio: 1.5 },
  { codigo: 2, descripcion: 'cable', precio: 15.50 },
  { codigo: 3, descripcion: 'martillos', precio: 102.30 },
  { codigo: 4, descripcion: 'tuberías', precio: 70 },
  { codigo: 5, descripcion: 'pintura', precio: 60.6 },
  ];

  hayRegistros() {
    return this.articulos.length > 0;
  }

  borrar(art: { codigo: number; }) {
    for (let x = 0; x < this.articulos.length; x++)
      if (this.articulos[x].codigo == art.codigo) {
        this.articulos.splice(x, 1);
        return;
      }
  }

  agregar() {
    for (let x = 0; x < this.articulos.length; x++)
      if (this.articulos[x].codigo == this.art.codigo) {
        alert('ya existe un articulo con dicho codigo');
        return;
      }
    this.articulos.push({
      codigo: this.art.codigo,
      descripcion: this.art.descripcion,
      precio: this.art.precio
    });
    this.art.codigo = 0;
    this.art.descripcion = '';
    this.art.precio = 0;
  }

  seleccionar(art: { codigo: number; descripcion: string; precio: number; }) {
    this.art.codigo = art.codigo;
    this.art.descripcion = art.descripcion;
    this.art.precio = art.precio;
  }

  modificar() {
    for (let x = 0; x < this.articulos.length; x++)
      if (this.articulos[x].codigo == this.art.codigo) {
        this.articulos[x].descripcion = this.art.descripcion;
        this.articulos[x].precio = this.art.precio;
        return;
      }
    alert('No existe el código de articulo ingresado');
  }
}