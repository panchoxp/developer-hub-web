import { ProjectDetail } from '../models/project-detail';

export const PROJECT_DETAILS: ProjectDetail[] = [

  {
    id: 'developer-hub',

    title: 'Developer Hub',

    description:
      'Portfolio personal desarrollado con Angular y TypeScript como demostración de mis conocimientos en desarrollo de software.',

    technologies: [
      'Angular',
      'TypeScript',
      'HTML',
      'CSS',
      'Bootstrap',
      'Git',
      'GitHub'
    ],

    image: 'assets/projects/developer-hub.png',

    github: '#',

    demo: '#',

    featured: true,


    overview: {

      whatIsIt:
        'Developer Hub es un portfolio personal desarrollado para presentar mi perfil profesional, conocimientos y proyectos de desarrollo.',

      objective:
        'Construir una aplicación que no solo funcione como portfolio, sino que también permita demostrar de forma práctica mis conocimientos de desarrollo frontend y posteriormente integrar tecnologías backend.'
    },


    architecture: {

      title:
        'Una arquitectura pensada para crecer.',

      description:
        'El proyecto está organizado separando las responsabilidades de cada parte de la aplicación para facilitar el mantenimiento y la incorporación de nuevas funcionalidades.',

      areas: [

        {
          number: '01',

          name: 'CORE',

          description:
            'Contiene modelos, servicios y lógica fundamental utilizada por diferentes funcionalidades.',

          path: 'core/'
        },

        {
          number: '02',

          name: 'SHARED',

          description:
            'Contiene componentes reutilizables utilizados en diferentes partes de la aplicación.',

          path: 'shared/'
        },

        {
          number: '03',

          name: 'LAYOUT',

          description:
            'Contiene los elementos estructurales de la aplicación, como Navbar y Footer.',

          path: 'layout/'
        },

        {
          number: '04',

          name: 'FEATURES',

          description:
            'Contiene las funcionalidades específicas de la aplicación.',

          path: 'features/'
        }

      ]

    },


    development: [

      {
        number: '01',

        category: 'FUNDAMENTOS',

        title: 'Configuración inicial',

        description:
          'Creación del proyecto Angular, configuración del entorno, Bootstrap, Git y estructura inicial de la aplicación.'
      },

      {
        number: '02',

        category: 'ARQUITECTURA',

        title: 'Organización del proyecto',

        description:
          'Separación de core, shared, layout y features para establecer una estructura mantenible.'
      },

      {
        number: '03',

        category: 'FRONTEND',

        title: 'Desarrollo de la interfaz',

        description:
          'Implementación del navbar, hero, secciones informativas, habilidades y showcase de proyectos.'
      },

      {
        number: '04',

        category: 'PROJECTS',

        title: 'Sistema de proyectos',

        description:
          'Implementación de modelos, componentes reutilizables, navegación y páginas individuales para cada proyecto.'
      },

      {
        number: '05',

        category: 'FUTURO',

        title: 'Backend y persistencia',

        description:
          'Integración planificada de una API REST desarrollada con Spring Boot y una base de datos PostgreSQL.'
      }

    ],


    learnings: [

      {
        number: '01',

        title: 'Arquitectura',

        description:
          'Aprender a separar responsabilidades dentro de una aplicación Angular y organizar sus funcionalidades.'
      },

      {
        number: '02',

        title: 'Reutilización',

        description:
          'Crear componentes reutilizables para evitar duplicación y mantener una interfaz consistente.'
      },

      {
        number: '03',

        title: 'TypeScript',

        description:
          'Utilizar interfaces y tipos para mantener estructuras de datos claras y predecibles.'
      },

      {
        number: '04',

        title: 'Routing',

        description:
          'Implementar navegación entre secciones y rutas dinámicas para los proyectos.'
      },

      {
        number: '05',

        title: 'Responsive Design',

        description:
          'Construir una interfaz capaz de adaptarse a diferentes tamaños de pantalla.'
      },

      {
        number: '06',

        title: 'Git',

        description:
          'Mantener el desarrollo del proyecto versionado y organizado mediante Git y GitHub.'
      }

    ],


    status: {

      frontend: 'in-development',

      backend: 'planned',

      database: 'planned',

      mobile: 'planned'

    }

  }

];