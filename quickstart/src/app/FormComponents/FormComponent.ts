import {OnInit} from '@angular/core'
/*
  Klasa "abstrakcyjna" korzeń drzewa kontrolek formularzy
 */
export class FormComponent{


  public width:number;
  public obligatory:boolean;
  public disabled:boolean;
  public grid_class:string;

  constructor()
  {
    this.width = 1;
    this.obligatory = false;
    this.disabled = false;
    this.grid_class = "col-lg-";
  }

}
