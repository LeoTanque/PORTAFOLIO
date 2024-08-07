import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Project {
  imgSrc: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './portafolio.component.html',
  styleUrl: './portafolio.component.scss'
})
export class PortafolioComponent {

  projects: Project[] = [
    { imgSrc: 'assets/img/hero.png', title: 'Diseño Creativo', description: 'Fotografía' },
    { imgSrc: 'assets/img/hero.png', title: 'Diseño Creativo', description: 'Fotografía' },
    { imgSrc: 'assets/img/hero.png', title: 'Diseño Creativo', description: 'Fotografía' },
    { imgSrc: 'assets/img/hero.png', title: 'Diseño Creativo', description: 'Fotografía' },
    { imgSrc: 'assets/img/hero.png', title: 'Diseño Creativo', description: 'Fotografía' },
    { imgSrc: 'assets/img/hero.png', title: 'Diseño Creativo', description: 'Fotografía' },
  ];

}
