import { Mesec } from "./mesec";
import { Termin } from "./termin";

export class Dan{

  constructor(){}
    
  datum = new Date();
  godina = new Number();
  mesec = new Mesec();
//  trDan = new Number();
  uMesecu = new Number();
  uNedelji = '';

  termini = new Array<Termin>();
    

}