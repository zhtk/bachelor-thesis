import {Component, ComponentFactoryResolver, Input, ViewChild, ViewContainerRef,} from '@angular/core'
import { FormsModule }   from '@angular/forms';
import { Router } from '@angular/router';
import { TextBox } from './TextBox/TextBox';
import {FormClass} from "./FormClass";
import {Container} from "../ComponentsCore/Interfaces/ContainerInterface";
import {ComponentCreator} from "../ComponentsCore/ComponentCreator";
import { SetterAlg } from "../ComponentsRegister";

@Component({
  selector: 'formular',
  template: `
            <form (ngSubmit)="onSubmit(empForm, $event)" [ngClass] = "grid_class" action = "{{form_action}}" method = "{{method}}" id = "{{id}}">
                <fieldset>
                    <template #target></template>
                    <input type="submit" class="btn btn-info" style="margin-left: 15px" value="Wyślij"/>
                </fieldset>
            </form>
            `
})
export class FormComponent extends FormClass implements Container
{

  @SetterAlg()
  id:string;
  @SetterAlg()
  form_action:string;
  @SetterAlg()
  method:string;
  @ViewChild('target', { read: ViewContainerRef }) target: ViewContainerRef;

  private sended: boolean = false;

  constructor(private cfr: ComponentFactoryResolver, private router: Router) {

    super();
    //this.sended = false;
    this.grid_class = "col-lg-12";
    this.form_action = "/";
    this.method = "get";
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

  public onSubmit(empForm: any, event: Event) {
    event.preventDefault();
    this.sended = true;

    if (window.confirm('Wniosek wysłany! Możesz teraz wrócić na stronę główną. Kopię wniosku znajdziesz w usłudze "Moje wnioski".'))
    {
        this.router.navigateByUrl('/main');
    }
  }
}


