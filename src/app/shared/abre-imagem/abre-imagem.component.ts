import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-abre-imagem',
  templateUrl: './abre-imagem.component.html',
  styleUrls: ['./abre-imagem.component.css']
})
export class AbreImagemComponent implements OnInit {
  @Output() imagemChange = new EventEmitter<any>();
  @Input() imagem: any;

  @Output() nomeChange = new EventEmitter<any>();
  @Input() nome: any;


  constructor() { }

  ngOnInit(): void {
  }
  fechaImage(){
    this.imagemChange.emit('');
  }

}
