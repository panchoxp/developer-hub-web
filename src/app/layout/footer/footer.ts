import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  email = 'francisco_smfds@hotmail.es';

  emailCopied = false;


  async copyEmail(): Promise<void> {

    try {

      await navigator.clipboard.writeText(this.email);

      this.emailCopied = true;


      setTimeout(() => {
        this.emailCopied = false;
      }, 2000);


    } catch (error) {

      console.error(
        'No se pudo copiar el correo:',
        error
      );

    }

  }

}