export class GridProperty {
  class:string;
  width:number;

  constructor (size:string)
  {
    switch(size)
    {
      case  "xsmall":
        this.class = "col-";
        break;
      case "small":
        this.class = "col-sm-";
        break;
      case "medium":
        this.class = "col-md-";
        break;
      case "large":
        this.class = "col-lg-";
        break;
      case "xlarge":
        this.class = "col-xl-";
        break;
      default:
        throw new Error('Błędny rozmiar komponentu');

    }
    this.width = 12;
  }
}
