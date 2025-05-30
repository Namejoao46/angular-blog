import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-title',
  imports: [],
  templateUrl: './menu-title.component.html',
  styleUrls: ['./menu-title.component.css']
})
export class MenuTitleComponent {

  @Input()
  photoCover:string =""
  @Input()
  cardTitle:string ="SOLO LEVELING VENCEDOR DO ANIME AWARDS 2025"
  @Input()
  cardDescription:string =""

  constructor() {

  }

  ngOnInit(): void{
    
  }

}
