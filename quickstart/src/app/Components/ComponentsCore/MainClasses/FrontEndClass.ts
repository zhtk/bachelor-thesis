import {SizeProperties} from "./SizeProperties";

/*
 Klasa "abstrakcyjna" korzeń drzewa wszystkich komponentow
 */
export class FrontEndClass{

  public visible: boolean;
  public size:SizeProperties;
  public backgroundColor:string;
  public textColor:string;
  public grid_class:string;

  constructor()
  {
    this.size = new SizeProperties(this);
    this.visible = true;
    this.backgroundColor = "white";
    this.textColor = "black";
    this.grid_class="";
  }

}
