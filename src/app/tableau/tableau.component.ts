import { Component } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styles: [
  ]
})


export class TableauComponent {
  titre = "1.Opérations sur un tableau";
  tab = [15, 46, 0, 89, 80];
  style = 'italic';

  afficherPosition(element: number, position: number) {
    console.log(`Position : ${position + 1} - Élément : ${element}`);
  }


  convertirEnTexte(nombre: number): string {
    if (nombre === 0) {
      return 'Zéro';
    } else if (nombre === 15) {
      return 'Quinze';
    } else {
      return 'Seize ou plus';
    }
  }


  colorier(nb: number): string {
    return nb % 3 === 0 ? 'magenta' : 'bleu';
  }
// Ajoutez une méthode pour basculer le style
toggleStyle() {
  this.style = this.style === 'italic' ? 'normal' : 'italic';
}

}



