import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-landing-page-component',
  templateUrl: './landing-page-component.component.html',
  styleUrls: ['./landing-page-component.component.scss']
})


export class LandingPageComponentComponent implements OnInit {

  userEmail!: string;
  
  

  buttonText!:string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.buttonText = 'Continuer vers Snapface'
  }
onClick() {
  this.router.navigateByUrl('facesnaps');
  return 

}
onSubmitForm(form:NgForm):void {
  console.log(form.value);


}
}
