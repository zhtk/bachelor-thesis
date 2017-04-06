import {OnInit} from '@angular/core'
/*
  Klasa "abstrakcyjna" korzeń drzewa kontrolek formularzy
 */
export class FormComponent implements FEComponent{
  visible: boolean;

  renderJSON(specification: any): void {
    throw new Error('Method not implemented.');
  }

  public id:number;
  public width:number;
  public required:boolean;
  public disabled:boolean;
  public grid_class:string;
  public backgroundColor:string;
  public textColor:string;

  constructor()
  {
    this.width = 1;
    this.required = false;
    this.disabled = false;
    this.grid_class = "col-lg-";
    this.backgroundColor = "white";
  }

}
