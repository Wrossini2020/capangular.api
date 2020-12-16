import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Dragon } from './../../models/spacex.models';
import { SpacexService } from './../../services/spacex.service';

@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.css']
})
export class DragonsComponent implements OnInit {

  dragonList: Dragon[] = [];

  constructor(private service:SpacexService) { }

  ngOnInit(): void {
    this.service.getAllDragons()
      .subscribe((response:any) => {
        this.dragonList = response;
      
       console.log(this.dragonList);
          
      });
  }

}
