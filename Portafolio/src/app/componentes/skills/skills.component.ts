import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface Skill {
  name: string;
  percentage: string;
  className: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  technicalSkills: Skill[] = [
    { name: 'Javascript', percentage: '75%', className: 'javascript' },
    { name: 'HTML & CSS', percentage: '89%', className: 'htmlcss' },
    { name: 'Photoshop', percentage: '95%', className: 'photoshop' },
    { name: 'Wordpress', percentage: '81%', className: 'wordpress' },
    { name: 'Drupal', percentage: '55%', className: 'drupal' }
  ];

  professionalSkills: Skill[] = [
    { name: 'Comunicación', percentage: '80%', className: 'comunicacion' },
    { name: 'Trabajo en Equipo', percentage: '70%', className: 'trabajo' },
    { name: 'Creatividad', percentage: '99%', className: 'creatividad' },
    { name: 'Dedicación', percentage: '65%', className: 'dedicacion' },
    { name: 'Proyect Management', percentage: '94%', className: 'proyect' }
  ];
}
