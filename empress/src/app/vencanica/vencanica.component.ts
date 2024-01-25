import { Component, OnInit } from '@angular/core';
import { Vencanica } from './vencanica';

@Component({
  selector: 'vencanica',
  templateUrl: './vencanica.html',
  styleUrls: ['vencanica.css']
})




export class VencanicaComponent implements OnInit {


  ngOnInit(): void {
    this.vencanice = [this.v1, this.v2];
  }

  v1 = new Vencanica(1, 'venčanica1', 'slika1', 0);
  v2 = new Vencanica(2, 'venčanica2', 'slika2', 0);
  vencanice = new Array<Vencanica>();
  
  
  
  
}