import { Component, OnInit, Renderer2 } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-model-comp',
  templateUrl: './model-comp.component.html',
  styleUrls: ['./model-comp.component.css'],
})
export class ModelCompComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(
    public modalService: BsModalService,
    private renderer: Renderer2
  ) {}

  ngOnInit() {
    this.modalService.onHide.subscribe((e) => {
      console.log('close', this.modalService.config.initialState);
    });
  }

  addAgenciesClose() {
    this.modalRef.hide();
  }

  updateFacilty() {
    alert('Please Ensure to complete document');
  }

  openNewWindow(url: string) {
    this.renderer.setProperty(window.open(url), 'opener', null);
  }

  onRowClick() {
    console.log('Row clicked');
  }

  onButtonClick(event: MouseEvent) {
    event.stopPropagation();
    console.log('Button clicked');
  }
}
