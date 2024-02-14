import { Component, OnInit } from '@angular/core';
import { Dan } from '../kalendar/dan';
import { Mesec } from '../kalendar/mesec';
import { DanServis } from '../kalendar/dan.servis';
import { MesecServis } from '../kalendar/mesec.servis';

@Component({
  selector: 'zakazivanje',
  templateUrl: './zakazivanje.html',
  styleUrls: ['zakazivanje.css']
})



export class ZakazivanjeComponent implements OnInit {
 
  constructor( private ds: DanServis, private ms: MesecServis ){
  }
 
  ngOnInit(): void {
    //this.ucitajDanasnjiDatum();
  }

  danas = new Dan();
  dan = new Dan();
  mesec = new Mesec();
  
  ucitajDatum(d: Date){
   // this.danas = this.ds.ucitajDatum(d);
  //  this.mesec = this.ms.ucitajMesec(d);
  }

  ucitajDanasnjiDatum(){
  //  this.danas = this.ds.ucitajDatum(new Date());
  //  this.mesec = this.ms.ucitajMesec(new Date());
  }

 // istakniDanas(){}

  sledeciMesec(){
  //  this.mesec = this.ms.ucitajSledeciMesec(this.mesec);
  //  this.danas = this.ds.ucitajDatum(new Date(new Date().getFullYear(), this.mesec.uGodini, 1));
  //  console.log('MESEC: ' + this.mesec.naziv + ', dan: ' + this.danas.uMesecu);
  }

}
