import {GridProperty} from "./GridProperty";
import {FrontEndClass} from "./FrontEndClass";
export class SizeProperties {

  parent:FrontEndClass;
  private xsmall:GridProperty;
  private small:GridProperty;
  private medium:GridProperty;
  private large:GridProperty;
  private xlarge:GridProperty;

  constructor (parent:FrontEndClass)
  {
    this.parent = parent;
    this.xsmall = new GridProperty("xsmall");
    this.small = new GridProperty("small");
    this.medium = new GridProperty("medium");
    this.large = new GridProperty("large");
    this.xlarge = new GridProperty("xlarge");
  }

  setXsmall(value:number)
  {
    this.xsmall.setWidth(value);
    this.changeSize();
  }

  setSmall(value:number)
  {
    this.small.setWidth(value);
    this.changeSize();
  }

  setMedium(value:number)
  {
    this.medium.setWidth(value);
    this.changeSize();
  }

  setLarge(value:number)
  {
    this.large.setWidth(value);
    this.changeSize();
  }

  setXlarge(value:number)
  {
    this.xlarge.setWidth(value);
    this.changeSize();
  }

  changeSize()
  {
    this.parent.grid_class = this.xsmall.class + " " + this.small.class + " " +
      this.medium.class + " " + this.large.class + " " + this.xlarge.class;
  }

}
