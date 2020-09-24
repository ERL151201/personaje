import { Injectable } from '@angular/core';

@Injectable()
export class PersonajesService{

    private personajes:Personaje[] = [
        {
          nombre: "Kratos",
          bio: "Kratos es un personaje de videojuegos de la serie God of War de Santa Monica Studio, que se basó en la mitología griega, antes de pasar a la mitología nórdica. Kratos, también conocido como el Fantasma de Esparta, apareció por primera vez en el videojuego God of War de 2005, lo que llevó al desarrollo de ocho juegos con el personaje como protagonista. Kratos también aparece como protagonista en series de cómics publicados en 2010 y 2018, así como las franquicias de tres novelas que recuentan los eventos de tres de los juegos. El personaje fue expresado por Terrence C. Carson desde 2005 hasta 2013, Christopher Judge asumió el papel en la continuación de 2018, titulado God of War.",
          img: "assets/img/kratos.png",
          aparicion: "2005-22-03",
          casa:"Midgard"
        },
        {
          nombre: "Atreus",
          bio: "Atreus es un personaje ficticio del universo de God of War creado por Santa Monica Studio. Es hijo del protagonista Kratos, y su primera aparición fue en el videojuego God of War de 2018.",
          img: "assets/img/atreus.jpg",
          aparicion: "2018-20-04",
          casa:"Midgard"
        },
        {
          nombre: "Crash Bandicoot",
          bio: "Crash Bandicoot es el personaje principal y el protagonista principal de la serie de videojuegos Crash Bandicoot. Fue introducido en el videojuego del año 1996 Crash Bandicoot. Crash es un bandicut oriental que fue mejorado genéticamente por el principal antagonista de la serie, el Doctor Neo Cortex, y luego escapó del castillo de Cortex después de un experimento fallido en el Cortex Vortex. A lo largo de la serie, Crash actúa como la principal oposición contra Cortex y sus malvados planes para la dominación mundial. Si bien Crash tiene varias maniobras defensivas a su disposición",
          img: "assets/img/crash.png",
          aparicion: "1996-12-04",
          casa: "Isla Wumpa"
        },
        {
          nombre: "Aku Aku",
          bio: "Aku Aku (アク アク en Japón), es un personaje ficticio de la saga de videojuegos Crash Bandicoot. Es el guardián de las islas Wumpa y la figura paterna de Crash Bandicoot y sus amigos.",
          img: "assets/img/aku.png",
          aparicion: "1996-12-04",
          casa:"Isla Wumpa"
        },
        {
          nombre: "Connor RK800",
          bio: "El Androide RK800, mejor conocido como Connor es un prototipo diseñado para servir como un avanzado asistente de casos policiales que involucren Androides divergentes y es, junto a Markus y Kara, uno de los protagonistas de Detroit: Become Human.",
          img: "assets/img/Connor.png",
          aparicion: "2018-05-25",
          casa: "Ciudad de Detroit"
        },
        {
          nombre: "Spider-Man",
          bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
          img: "assets/img/spiderman.png",
          aparicion: "1962-08-01",
          casa: "Marvel"
        },
        {
          nombre: "Ezio Auditore",
          bio: "Ezio Auditore da Firenze (República de Florencia, Italia; 24 de junio de 1459 — ibídem, 30 de noviembre de 1524) es un personaje ficticio de la saga de videojuegos de ficción histórica Assassin's Creed, protagonista de los videojuegos Assassin's Creed II1​ (y sus spin-offs Assassin's Creed II: Discovery y Assassin's Creed: Project Legacy), Assassin's Creed: Brotherhood,2​ y Assassin's Creed: Revelations, de las novelas Assassin's Creed: Renaissance, Assassin's Creed: Brotherhood y Assassin's Creed: Revelaciones; y de las películas Assassin's Creed: Lineage, Assassin's Creed: Embers y Assassin's Creed: Ascendance.",
          img: "assets/img/ezio.png",
          aparicion: "2009-11-20",
          casa: "Ubisoft"
        }
      ];



    constructor(){
        console.log("Listo para usarse");
    }

    getPersonajes():Personaje[]{
        return this.personajes;
    }
      getPersonaje(idx: string){

        return this.personajes[idx];
      }
      buscarPersonajes(termino: string){

        let personajesArr:Personaje[] = [];
        termino = termino.toLowerCase();
  
        for(let personaje of this.personajes){
          
          let nombre = personaje.nombre.toLowerCase();
          
          if(nombre.indexOf(termino) >= 0){
            personajesArr.push(personaje)
          }
        }
        return personajesArr;
      }

    }


export interface Personaje{
    nombre: string;
    bio: string;
    img: string;
    aparicion: string;
    casa: string;
};
