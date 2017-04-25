import {SizeProperties} from "./SizeProperties";
import {MemberInfo, Attr} from "../../ComponentsRegister";

/*
 Klasa "abstrakcyjna" korzeń drzewa wszystkich komponentow
 */
export class FrontEndClass {

  public arrayOfKeys:any;

  @Attr({info:"Czy element widzialny", default : "true", name:""})
  public visible: boolean;
  //@Attr({info:"Rozmiar elementu", default : "12", name:""})
  public size:SizeProperties;
  @Attr({info:"Kolor tla", default : "transparent", name:""})
  public backgroundColor:string;
  @Attr({info:"Kolor tekstu", default : "black", name:""})
  public textColor:string;

  public grid_class:string;
  @Attr({info:"Rodzaj kursora", default : "pointer", name:""})
  cursor:string; // Tutaj przyda sie enum

  public params:MemberInfo[];

  constructor()
  {
    this.size = new SizeProperties(this);
    this.visible = true;
    this.backgroundColor = "white";
    this.textColor = "black";
    this.grid_class="";
    //this.arrayOfKeys = Object.keys(this);
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
