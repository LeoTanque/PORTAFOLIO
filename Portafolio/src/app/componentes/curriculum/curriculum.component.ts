import { Component } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  standalone: true,
  imports: [],
  templateUrl: './curriculum.component.html',
  styleUrl: './curriculum.component.scss'
})
export class CurriculumComponent {
  education = [
    {
      title: 'Arte y Multimedia',
      institution: 'Universidad de Oxford',
      date: '2005 - 2008',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?'
    },
    // ... otros items de educación
  ];

  experience = [
    {
      title: 'Front Developer',
      company: 'Nombre de Compañía',
      date: '2005 - 2008',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?'
    },
    {
      title: 'Front Developer',
      company: 'Nombre de Compañía',
      date: '2005 - 2008',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?'
    },
    {
      title: 'Front Developer',
      company: 'Nombre de Compañía',
      date: '2005 - 2008',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?'
    },
    {
      title: 'Front Developer',
      company: 'Nombre de Compañía',
      date: '2005 - 2008',
      description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis, cumque repellat, tempora recusandae aliquam nemo esse natus impedit, nostrum temporibus veritatis eaque soluta aperiam id repudiandae fugiat deserunt! Explicabo, veritatis?'
    },
    // ... otros items de experiencia
  ];
}
