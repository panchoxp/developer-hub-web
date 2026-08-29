import {
  AfterViewInit,
  Component,
  OnDestroy,
  signal
} from '@angular/core';

import {
  NavigationEnd,
  Router
} from '@angular/router';

import {
  filter,
  Subscription
} from 'rxjs';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements AfterViewInit, OnDestroy {

  sections = [
    {
      id: 'hero',
      label: 'Inicio'
    },
    {
      id: 'about',
      label: 'Sobre mí'
    },
    {
      id: 'skills',
      label: 'Tecnologías'
    },
    {
      id: 'projects',
      label: 'Proyectos'
    }
  ];


  activeSection = signal('hero');


  private observer?: IntersectionObserver;

  private routerSubscription?: Subscription;


  constructor(
    private router: Router
  ) { }


  ngAfterViewInit(): void {

    this.routerSubscription = this.router.events
      .pipe(
        filter(
          event => event instanceof NavigationEnd
        )
      )
      .subscribe(() => {

        this.initializeObserver();

      });


    this.initializeObserver();

  }


  private initializeObserver(): void {

    // Desconectar observer anterior
    this.observer?.disconnect();


    // Obtener solamente la ruta
    // sin el fragmento #
    const currentRoute =
      this.router.url.split('#')[0];


    // Solo necesitamos observar
    // las secciones cuando estamos en Home
    if (currentRoute !== '/home') {
      return;
    }


    // Esperamos a que Home esté renderizado
    setTimeout(() => {

      const elements = this.sections
        .map(section =>
          document.getElementById(section.id)
        )
        .filter(
          (element): element is HTMLElement =>
            element !== null
        );


      if (elements.length === 0) {
        return;
      }


      this.observer = new IntersectionObserver(

        (entries) => {

          const visibleSections =
            entries.filter(
              entry => entry.isIntersecting
            );


          if (visibleSections.length === 0) {
            return;
          }


          // Seccion más cercana al centro
          const closestSection =
            visibleSections.reduce(
              (closest, current) => {

                const closestDistance =
                  Math.abs(
                    closest.boundingClientRect.top
                  );

                const currentDistance =
                  Math.abs(
                    current.boundingClientRect.top
                  );

                return currentDistance <
                  closestDistance
                  ? current
                  : closest;

              }
            );


          this.activeSection.set(
            closestSection.target.id
          );

        },


        {
          threshold: 0,

          rootMargin:
            '-40% 0px -40% 0px'
        }

      );


      elements.forEach(element => {

        this.observer?.observe(element);

      });


    });

  }


  navigateToSection(
    event: Event,
    sectionId: string
  ): void {

    event.preventDefault();

    const currentRoute =
      this.router.url.split('#')[0];


    // Si ya estamos en Home, solo se hacer scroll
    if (currentRoute === '/home') {

      const element =
        document.getElementById(sectionId);

      if (!element) {
        return;
      }

      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      return;
    }


    // Si estamos fuera de Home,
    // primero navegamos a Home
    this.router.navigate(['/home'])
      .then(() => {

        setTimeout(() => {

          const element =
            document.getElementById(sectionId);

          if (!element) {
            return;
          }

          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });

        });

      });

  }


  ngOnDestroy(): void {

    this.observer?.disconnect();

    this.routerSubscription?.unsubscribe();

  }

}