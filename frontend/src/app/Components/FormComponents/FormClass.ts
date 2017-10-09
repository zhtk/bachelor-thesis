import {OnInit} from '@angular/core'
import {FrontEndClass} from "../ComponentsCore/MainClasses/FrontEndClass";

/*
  Klasa "abstrakcyjna" korzeń drzewa kontrolek formularzy
 */
export class FormClass extends FrontEndClass implements RenderFromJSON{
  visible: boolean;

  renderJSON(specification: any): void {
    throw new Error('Method not implemented.');
  }

  public id:string;
  public required:boolean;
  public disabled:boolean;

  constructor()
  {
    super();
    this.required = false;
    this.disabled = false;
  }

}
