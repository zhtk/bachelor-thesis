import {
  Component, Input, OnInit, ViewChildren, ViewContainerRef, ViewChild,
  ReflectiveInjector, ComponentFactoryResolver,
  QueryList, ElementRef, TemplateRef,
} from '@angular/core'

import { Router } from '@angular/router'
import {TextBox} from "./Components/FormComponents/TextBox/TextBox";
import {ComponentCreator} from "./Components/ComponentsCore/ComponentCreator";
import { LAYOUT } from './500plus/mock-form'
import { Http, Response, Headers, URLSearchParams, RequestOptions } from "@angular/http";
import {Observable} from "rxjs";

@Component
({
  selector: 'created-submissions',
  templateUrl: '../pages/approved-submissions.html',
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

  private subList: { typ: string, data: string, status: string } [] = [];

  constructor(private http: Http, private router: Router) {}

  ngOnInit(): void {
    this.getSubs();
  }

  private getSubs() {
    this.http.get('/api/read/plus500-lista/')
      .toPromise()
      .then(res => res.json())
      .then(res => {        
        this.subList = res;
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

  private accept(id: string) {
    this.setSumbissionStatus(id, "1"
)  }

  private deny(id: string) {
    this.setSumbissionStatus(id, "2") 
  }

  private setSumbissionStatus(id: string, status: string) {
   
    const formData = new FormData();
    formData.append('id', id);
    formData.append('status', status);

    let headers = new Headers({});
    let options = new RequestOptions({ headers });
    let url = '/api/write/plus500-ustaw/';

    this.http.post(url, formData, options)
      .toPromise()
      .then(() => this.getSubs())
      .catch(this.handleError)
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

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
