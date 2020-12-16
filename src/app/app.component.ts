import { Component, OnInit } from '@angular/core';

import { HttpErrorResponse} from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Dragon } from './models/spacex.models';
import { SpacexService } from './services/spacex.service';
import { Router, ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  dragon: Dragon = {};
  error: boolean = false;
  errorMessage: string = "";

  constructor(private service:SpacexService, private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    this.activatedRoute.queryParams.subscribe(params => {
      const idDragon = params['id'];

      if(idDragon){ 
        this.getDragon(idDragon);
      }
    });
  }

  getDragon(id: string){
    this.service.getDragon(id)
      .subscribe((response: any) => {
        this.error = false;
        this.dragon = response;
        console.log(this.dragon);
      }, (error:HttpErrorResponse) => {
        if(error.status == 404){
          this.error = true;
          this.errorMessage = "Dragon não encontrado";
        }
      });
  }

  onSubmit(form:NgForm){
    if(form.valid){
      this.service.getDragon(form.value.id)
      .subscribe((response:any) => {
          this.error = false;
          this.dragon = response;
          console.log(this.dragon);
        }, (error:HttpErrorResponse) => {
          if(error.status == 404){
            this.error = true;
            this.errorMessage = "Dragon não encontrado!";
          }
        }
      );
    }else{
      this.error = true;
      this.errorMessage = "Campo em Branco";
    }
  }

}
