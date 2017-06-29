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
  templateUrl: '../pages/created-submissions.html',
})
export class CreatedSubmissionsComponent implements OnInit
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

  private subList: { typ: string, data: string, status: string/*, id?: string*/ }[];

  constructor(private http: Http, private router: Router) {}

  ngOnInit(): void {
    this.subList = new Array();
    this.concatFromNewService('/api/read/plus500-lista/')
  }

  private concatFromNewService(url: string) {
    return this.http.get(url)
      .toPromise()
      .then(res => res.json())
      .then(res => {
        this.subList = this.subList.concat(res);
      });
  }

  private parseVal(arg: string) {
    switch (arg) {
      case "0":
        return "Czeka na rozpatrzenie"
      
      case "1":
        return "Rozpatrzony pozytywnie"

      case "2":
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
    this.router.navigateByUrl('/preview/' + type + '/' + id);
  }

}
