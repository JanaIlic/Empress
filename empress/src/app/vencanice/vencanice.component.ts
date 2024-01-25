import { Component } from '@angular/core';
import { Vencanica } from '../vencanica/vencanica';

@Component({
  selector: 'vencanice',
  templateUrl: './vencanice.html',
  styleUrls: ['vencanice.css']
})

export class VencaniceComponent {

  ngOnInit(): void {
    this.vencanice = [this.v1, this.v2];
  }

  v1 = new Vencanica(1, 'venčanica1', 'slika1', 0);
  v2 = new Vencanica(2, 'venčanica2', 'slika2', 0);
  vencanice = new Array<Vencanica>();


}