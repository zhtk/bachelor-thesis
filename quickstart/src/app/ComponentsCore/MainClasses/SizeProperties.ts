import {GridProperty} from "./GridProperty";
export class SizeProperties {


  private xsmall:GridProperty;
  private small:GridProperty;
  private medium:GridProperty;
  private large:GridProperty;
  private xlarge:GridProperty;

  constructor ()
  {
    this.xsmall = new GridProperty("xsmall");
    this.small = new GridProperty("small");
    this.medium = new GridProperty("medium");
    this.large = new GridProperty("large");
    this.xlarge = new GridProperty("xlarge");
  }

  setXsmall(value:number)
  {
    this.xsmall.width = value;
  }

  setSmall(value:number)
  {
    this.small.width = value;
  }

  setMedium(value:number)
  {
    this.medium.width = value;
  }

  setLarge(value:number)
  {
    this.large.width = value;
  }

  setXlarge(value:number)
  {
    this.xlarge.width = value;
  }

}
