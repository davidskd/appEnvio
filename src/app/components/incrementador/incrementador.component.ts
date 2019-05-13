import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent implements OnInit {

  constructor() { }

  @Input() progreso: number=50;
  @Input() leyenda: string='Leyenda';

  ngOnInit() {
  }

  cambiarValor(valor){
    if (this.progreso>=100){
      this.progreso=100;
      return;
    }

    if (this.progreso<=100){
      this.progreso=0;
      return;
    }
    this.progreso=this.progreso+valor;
  }

}



