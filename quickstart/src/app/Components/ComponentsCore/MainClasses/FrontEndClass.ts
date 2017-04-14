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
  cursor:string; // Tutaj przyda sie enum

  constructor()
  {
    this.size = new SizeProperties(this);
    this.visible = true;
    this.backgroundColor = "white";
    this.textColor = "black";
    this.grid_class="";
  }

  setGridClass(parsed:any)
  {
    var size = parsed["size"];
    if(size.xsmall)
      this.size.setXsmall(size.xsmall);
    if(size.small)
      this.size.setSmall(size.small);
    if(size.medium)
      this.size.setMedium(size.medium);
    if(size.large)
      this.size.setLarge(size.large);
    if(size.xlarge)
      this.size.setXlarge(size.xlarge);
  }

}
