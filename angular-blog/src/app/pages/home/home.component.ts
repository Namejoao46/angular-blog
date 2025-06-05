import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MenuTitleComponent } from "../../components/menu-title/menu-title.component";
import { MenuBarComponent } from "../../components/menu-bar/menu-bar.component";
import { NoticiasComponent } from "../../components/noticias/noticias.component";
import { NoticiasVerticalComponent } from '../../components/noticias-vertical/noticias-vertical.component';


@Component({
  selector: 'app-home',
  imports: [MenuTitleComponent, MenuBarComponent, NoticiasComponent, NoticiasVerticalComponent ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit { // Adiciona AfterViewInit para executar código após a exibição do componente
  @ViewChild('newsRolante', { static: false }) newsRolante!: ElementRef; // Obtém uma referência ao contêiner das notícias rolantes no DOM

  scrollAmount = 0; // Variável para controlar a posição atual da rolagem
  scrollStep = 0; // Definido dinamicamente pelo tamanho de um card, evitando saltos múltiplos na rolagem

  /* ==== Método executado após a inicialização do componente ==== */
  ngAfterViewInit(): void { 
    this.definirScrollStep(); // Chama o método para definir dinamicamente o tamanho de um card
  }

  /* ==== Método para definir dinamicamente o tamanho do scrollStep ==== */
  definirScrollStep(): void {
    const primeiroCard = this.newsRolante.nativeElement.querySelector("app-noticias"); // Obtém o primeiro card de notícias
    if (primeiroCard) {
      this.scrollStep = primeiroCard.clientWidth; // Define o passo da rolagem como o tamanho exato de um card individual
    }
  }

  /* ==== Método para rolar para a direita ==== */
  scrollRight(): void {
    this.scrollAmount += this.scrollStep; // Incrementa a posição da rolagem em um card
    this.newsRolante.nativeElement.scrollTo({ left: this.scrollAmount, behavior: 'smooth' }); // Move o scroll suavemente para a direita
  }

  /* ==== Método para rolar para a esquerda ==== */
  scrollLeft(): void {
    this.scrollAmount -= this.scrollStep; // Decrementa a posição da rolagem em um card
    this.newsRolante.nativeElement.scrollTo({ left: this.scrollAmount, behavior: 'smooth' }); // Move o scroll suavemente para a esquerda
  }

  /* ==== Método para filtrar notícias por categoria ==== */
  filtrarNoticias(categoria: string): void {
    const cards = document.querySelectorAll("app-noticias"); // Obtém todos os cards de notícias no DOM

    cards.forEach(card => {
      const cardElement = card as HTMLElement; // Converte para HTMLElement para acessar `style.display`
      const CardCategory = cardElement.getAttribute("cardCategory"); // Obtém a categoria do card

      if (!categoria || categoria === "todos") {
        cardElement.style.display = "block"; // Exibe todas as notícias quando nenhuma categoria específica é selecionada
      } else {
        cardElement.style.display = CardCategory === categoria ? "block" : "none"; // Exibe apenas os cards da categoria selecionada
      }
    });
  }
}
