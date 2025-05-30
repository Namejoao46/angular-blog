import { Component } from '@angular/core';
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { NoticiasComponent } from "../../components/noticias/noticias.component";

@Component({
  selector: 'app-home',
  imports: [MenuTitleComponent, MenuBarComponent, NoticiasComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
