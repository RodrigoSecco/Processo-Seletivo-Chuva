import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevChuva';
  @ViewChild('resumo') resumoElement: ElementRef;

  toggleResumo() {
    const resumo = this.resumoElement.nativeElement;
    resumo.classList.toggle('expandido');
  }
}

