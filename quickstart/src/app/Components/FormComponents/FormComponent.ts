import {Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef,} from '@angular/core'
import { FormsModule }   from '@angular/forms';
import { Router } from '@angular/router';
import { TextBox } from './TextBox/TextBox';
import {FormClass} from "./FormClass";
import {Container} from "../ComponentsCore/Interfaces/ContainerInterface";
import {ComponentCreator} from "../ComponentsCore/ComponentCreator";
import { SetterAlg } from "../ComponentsRegister";
import {NgForm} from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { RequestOptions, Request, RequestMethod } from '@angular/http';

@Component({
  selector: 'formular',
  template: `
            <form name="{{ hash }}" (ngSubmit)="onSubmit($event)" [ngClass] = "grid_class" action = "{{form_action}}" method="{{method}}" id="{{id}}">
                <fieldset>
                    <template #target></template>
                    <input type="submit" class="btn btn-info" style="margin-left: 15px" value="Wyślij"/>
                </fieldset>
            </form>
            `
})
export class FormComponent extends FormClass implements Container
{

  myForm: FormGroup;
  private hash: string;

  @SetterAlg()
  id:string;
  @SetterAlg()
  form_action:string;
  @SetterAlg()
  method:string;
  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;

  private sended: boolean = false;

  constructor(private cfr: ComponentFactoryResolver, private router: Router, private http: Http) {

    super();
    //this.sended = false;
    this.grid_class = "col-lg-12";
    this.form_action = "/";
    this.method = "get";
    this.hash = Date.now().toString();
  }
  renderJSON(parsed: any): void {
    if("action" in parsed)
      this.form_action = parsed["action"];
    if("id" in parsed)
      this.id = parsed["id"];
    else
      throw new Error('Error with JSON form.');

    if("method" in parsed)
      this.method = parsed["method"];
    if("children" in parsed)
    // Stworz wszystkie komponenty i dodaj je w sobie
      this.renderChildren(parsed["children"]);

  }

  renderChildren(children: any): void {
    for(var child = 0; child < children.length; child++)
    {
      var added = ComponentCreator.insertComponent(this.cfr, this.target, children[child]["type"]);
      added.renderJSON(children[child]);
    }
  }

  public onSubmit(event: Event) {
    console.log("OTO ONSUBMIT")
    event.preventDefault();
    
    const formData = new FormData();

    let headers = new Headers({});
    let options = new RequestOptions({ headers });


    for (let el of (document.forms[this.hash]).getElementsByTagName("input"))
    {
      console.log("nazwa: " + el.name)
      console.log("wartosc: " + el.value);
      formData.append(el.name, el.value);
    }
    
    this.http.post(this.form_action, formData, options)
        .toPromise()
        .catch(this.handleError)

    this.sended = true;

    if (window.confirm('Wniosek wysłany! Możesz teraz wrócić na stronę główną. Kopię wniosku znajdziesz w usłudze "Moje wnioski".'))
    {
        this.router.navigateByUrl('/main');
    }
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
