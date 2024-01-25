import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zakazivanje',
  templateUrl: './zakazivanje.html',
  styleUrls: ['zakazivanje.css']
})



export class ZakazivanjeComponent implements OnInit {
 
 
  ngOnInit(): void {
    this.ucitajDatum();
    this.nedelje();
  }


  danas = new Date();
  godina = new Number();
  brDana = new Number();

  prva = new Array<number>();
  druga = new Array<number>();
  treca = new Array<number>();
  cetvrta = new Array<number>();
  peta = new Array<number>();


  trMesec = '';
  trDan = new Number();
  dan = '';
  

  ucitajDatum(){
    this.godina = this.danas.getFullYear();
    this.trDan = this.danas.getDate();
    this.ucitajMesec();
    this.ucitajDan(this.danas);
  }

  ucitajDan(dan: Date){
    switch(dan.getDay()){
      case 1: this.dan = 'ponedeljak'; break;
      case 2: this.dan = 'uto'; break;
      case 3: this.dan = 'sre'; break;
      case 4: this.dan = 'četvrtak'; break;
      case 5: this.dan = 'petak'; break;
      case 6: this.dan = 'subota'; break;
      case 7: this.dan = 'nedelja'; break;
    }
    
  }


  ucitajMesec(){

    switch(Number(this.danas.getMonth())){
      case 0: 
      this.trMesec = 'Januar'; 
      this.brDana = 31;
      break;

      case 1: 
      this.trMesec = 'Februar'; 
      if(Number(this.godina) % 4 == 0 )
        this.brDana = 28;
      else this.brDana = 29;
      break;

      case 2: 
      this.trMesec = 'Mart'; 
      this.brDana = 31;
      break;

      case 3: 
      this.trMesec = 'April'; 
      this.brDana = 30;
      break;
      
      case 4: 
      this.trMesec = 'Maj'; 
      this.brDana = 31;
      break;
      
      case 5: 
      this.trMesec = 'Jun'; 
      this.brDana = 30;
      break;

      case 6:
      this.trMesec = 'Jul';
      this.brDana = 31; 
      break;

      case 7:
      this.trMesec = 'Avgust';
      this.brDana = 31;
      break;

      case 8:
      this.trMesec = 'Septembar';
      this.brDana = 30;
      break;

      case 9:
      this.trMesec = 'Oktobar';
      this.brDana = 31;
      break;

      case 10: 
      this.trMesec = 'Novembar';
      this.brDana = 30;
      break;

      case 11:
      this.trMesec = 'Decembar';
      this.brDana = 31;
      break;
    }

  }

  nedelje(){
    var m = this.danas.getMonth();
    var d = (new Date(Number(this.godina), m, 1)).getDay() - 2;
  

    for(let i = 0; i< 7; i++){
      if(i < d)
        this.prva[i] = 0;
      else
        this.prva[i] = i - d;
    }

    for(let i = 7; i< 28; i++){
      if(i < 14)
        this.druga[i-7] = i - d;
      else if(i >= 14 && i < 21)
        this.treca[i-14] = i+ 7 - d;
      else this.cetvrta[i-21] = i + 14 -d;
    }


    for(let i = 28; i< 35; i++){
      if(i <= Number(this.brDana))
        this.peta[i- 28] = i - d;
      else 
        this.peta[i - 28] = 0;
    }

  }



}
