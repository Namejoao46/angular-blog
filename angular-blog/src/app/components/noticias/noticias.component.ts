import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-noticias',
  imports: [],
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent {

  @Input()
  photoCover:string =""
  @Input()
  cardDescription:string =""
  

  constructor() {

  }
  ngOnInit(): void{

  }

}
