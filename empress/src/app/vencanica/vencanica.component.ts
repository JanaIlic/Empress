import { Component, OnInit } from '@angular/core';
import { Vencanica } from './vencanica';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'vencanica/:id',
  templateUrl: './vencanica.html',
  styleUrls: ['vencanica.css']
})



export class VencanicaComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute){}

  v = new Vencanica(5, 'venčanica5',  5);
  putanje = new Array<string>();
  prikazana =1;

  ngOnInit(): void {
    var idV = this.actRoute.snapshot.paramMap.get('id');
    this.ucitajVencanicu(String(idV));
  }

 
ucitajVencanicu(id: String){
  this.v = new Vencanica(Number(id), 'venčanica'+id?.toString(), Number(id)* 100);
  this.putanje[1] = "/../../assets/slike/"+id+"/1.jpg";
  this.putanje[2] = "/../../assets/slike/"+id+"/2.jpg";
  this.putanje[3] = "/../../assets/slike/"+id+"/3.jpg";
}
  


  
  
}