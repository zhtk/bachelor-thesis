import {OnInit} from '@angular/core'
/*
  Klasa "abstrakcyjna" korzeń drzewa kontrolek formularzy
 */
export class FormComponent{


  public width:number;
  public required:boolean;
  public disabled:boolean;
  public grid_class:string;
  backgroundColor:string;
  textColor:string;

  constructor()
  {
    this.width = 1;
    this.required = false;
    this.disabled = false;
    this.grid_class = "col-lg-";
  }

}
