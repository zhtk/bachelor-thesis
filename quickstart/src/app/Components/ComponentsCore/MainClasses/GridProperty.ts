export class GridProperty {
  class:string;
  width:number;

  constructor (size:string)
  {
    switch(size)
    {
      case  "xsmall":
        this.class = "col-12";
        break;
      case "small":
        this.class = "col-sm-12";
        break;
      case "medium":
        this.class = "col-md-12";
        break;
      case "large":
        this.class = "col-lg-12";
        break;
      case "xlarge":
        this.class = "col-xl-12";
        break;
      default:
        throw new Error('Błędny rozmiar komponentu');

    }
    this.width = 12;
  }

  setWidth(value:number)
  {
    this.width = value;
    var index = this.class.lastIndexOf("-");
    this.class = this.class.slice(0, index + 1);
    this.class += value.toString();
  }
}
