import { Component } from '@angular/core';
import { Vencanica } from '../vencanica/vencanica';

@Component({
  selector: 'vencanice',
  templateUrl: './vencanice.html',
  styleUrls: ['vencanice.css']
})

export class VencaniceComponent {

 
 public vencanice = new Array<Vencanica>();
 brojRedova = 0;
 redovi = new Array<number>();

 putanje = new Array<string>();

  ngOnInit(): void {
    this.ucitajVencanice();
  }




ucitajVencanice(){


  for(let i = 0; i< 100; i++){
    this.vencanice.push(new Vencanica(i, 'venčanica'+(i + 1).toString(),  i*100));
    this.putanje.push("/../../assets/slike/1/1.jpg");
  }

  this.putanje[1] = "/../../assets/slike/2/1.jpg";

  this.brojRedova = Math.ceil(this.vencanice.length / 4);

  for(let i = 0; i<this.brojRedova; i= i+4)
    this.redovi.push(i);

  

}






}