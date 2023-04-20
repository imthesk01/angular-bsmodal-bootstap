import { Component,TemplateRef, OnInit, Renderer2 } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {Observable} from 'rxjs';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular 5';
  modalRef: BsModalRef;
  constructor(public modalService: BsModalService,
    private renderer: Renderer2) {}
 
  ngOnInit() {
    this.modalService.onHide.subscribe((e) => {
        console.log('close',this.modalService.config.initialState);
    });
  }

  openModal(template: TemplateRef<any>) {
    const user = {
        id: 10
      };
    this.modalRef = this.modalService.show(template, {
      initialState : user
    });
  }

  addAgenciesClose(){
    this.modalRef.hide();
  }

  openNewWindow(url: string) {
    this.renderer.setProperty(window.open(url), 'opener', null);
  }
}
