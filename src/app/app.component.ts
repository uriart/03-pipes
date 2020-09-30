import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  nombre: string = 'Capitan América';
  nombre2: string = 'ferNanDo HerRera JimEnez';
  arreglo = ['Ramon' ,'Pedro', 'Alberto', 'Juan', 'Enrique', 'Alfonso', 'Maribel'];
  PI:number = Math.PI;
  porcentaje:number = 0.234;
  salario:number = 1234.5;
  fecha:Date = new Date();
  activar: boolean = true;

  idioma:string = 'fr';
  videoUrl: string = 'https://www.youtube.com/embed/e3Oe8I4yECY';

  valorPromesa = new Promise<string>( (resolve) => {
    setTimeout(() =>{
      resolve("llegó la data");
    }, 4500);
  });
  
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverin',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    }
  }


}
