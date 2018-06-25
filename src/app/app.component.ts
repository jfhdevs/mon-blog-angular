import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuth = false;
  title = 'mon blog sous Angular ';
  lesposts = [ { titre: 'Premier post',  contenu: 'Voici un premier post.', crea: new Date(), lovecpt: 1 },
               { titre: 'Deuxième post', contenu: 'En voilà un second.',    crea: new Date(), lovecpt: 0 },
               { titre: 'Troisième post',  contenu: 'Et enfin un petit dernier ' +
               'avec un texte un peu plus long pour pouvoir texter le retour à ' +
               'la ligne automatique !',                                    crea: new Date(), lovecpt: -1 }
          ]; // posts
} // class AppComponent
