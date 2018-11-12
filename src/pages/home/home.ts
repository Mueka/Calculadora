import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

numberA;
numberB;
typeOfAccion;
resultado;
  constructor(public navCtrl: NavController) {

  }
performFunction(type){
	var a = parseInt(this.numberA);
	var b = parseInt(this.numberB);
	console.log(type);

	if( type == 's'){
		this.typeOfAccion = "Suma"
		this.resultado = a+b
	}
	else if(type == 'r'){
		this.typeOfAccion = "Resta"
		this.resultado = a-b
	}
	else if(type == 'm'){
		this.typeOfAccion = "Multiplicar"
		this.resultado = a*b
    }
    else if(type == 'd'){
		this.typeOfAccion = "Dividir"
		this.resultado = a/b
}
}
}
