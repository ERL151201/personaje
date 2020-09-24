import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personaje-tarjeta',
  templateUrl: './personaje-tarjeta.component.html',
  styleUrls: ['./personaje-tarjeta.component.css']
})
export class PersonajeTarjetaComponent implements OnInit {

 @Input() personaje:any= {};
 @Input() index: number;

  constructor(private router:Router) { }

  ngOnInit() {
  }
  verPersonaje(){
  console.log(this.index);
  this.router.navigate( ['/personaje', this.index]);
    
  
  }

}
