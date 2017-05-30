import {
  Component, Input, OnInit, ViewChildren, ViewContainerRef, ViewChild,
  ReflectiveInjector, ComponentFactoryResolver,
  QueryList, ElementRef, TemplateRef,
} from '@angular/core'

import { Router } from '@angular/router'
import {TextBox} from "./Components/FormComponents/TextBox/TextBox";
import {ComponentCreator} from "./Components/ComponentsCore/ComponentCreator";
import { LAYOUT } from './500plus/mock-form'
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Component
({
  selector: 'created-submissions',
  //templateUrl: '../pages/test.html',
  template: 
  `
  <table class="table table-striped">
    <thead>
      <tr>
        <th>Nazwa wniosku</th>
        <th>Data</th>
        <th>Status</th>
        <th>Podgląd</th>
        <th>Ustaw status</th>
      </tr>
    </thead>
    <tbody>
      <tr *ngFor="let elem of subList">
        <td>{{ elem.typ }}</td>
        <td>{{ readable(elem.data) }}</td>
        <td>{{ parseVal(elem.status) }}</td>
        <td>
          <button class="btn btn-info" (click)="preview(elem.typ, elem.id)">Kliknij tutaj</button>
        </td>
        <td>
          <button class="btn btn-success" (click)="accept(elem.typ, elem.id)">Zaakceptuj</button>
        </td>
        <td>
          <button class="btn btn-danger" (click)="deny(elem.typ, elem.id)">Odrzuć</button>
        </td>
      </tr>
    </tbody>
  </table>
  `
})
export class ApproveSubmissionsComponent implements OnInit
{
  
  private readableName(subName: string) {
    //TODO przydałoby się mapowanie na backendzie
    switch (subName) {
      case "500plus":
        return "Wniosek o przyznanie 500+"
      
      default:
        return subName;
    }
  }

  private subList: { typ: string, data: string, status: string/*, id?: string*/ }[] = []

  constructor(private http: Http, private router: Router) {}

  ngOnInit(): void {
    this.http.get('/api/read/plus500-lista/')
      .toPromise()
      .then(res => res.json())
      .then(res => {
        console.log(res)
        //console.log(JSON.parse(res))
        this.subList = res; //JSON.parse(res);
      });
  }

  private parseVal(arg: string) {
    switch (arg) {
      case "0":
        return "Czeka na rozpatrzenie"
      
      case "1":
        return "Rozpatrzony pozytywnie"

      case "-1":
        return "Rozpatrzony negatywnie"

      default:
        return "Błąd wartości"
    }
  }

  private readable(date: string) {
    if (date.indexOf('.'))
      return date.slice(0, date.indexOf('.'));
    else
      return date;
  }

  private preview(type: string, id: string) {
    // routuj czy cokolwiek
    //window.location.href = "/preview/" + type + "/" + id;
    this.router.navigateByUrl('/preview/' + type + '/' + id);
  }

}
