import { Component, OnInit, Input} from '@angular/core';
import {  Router } from '@angular/router';
import { FaceSnap } from '../../core/model/face-snap.model';
import { FaceSnapsService } from '../../core/services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap! : FaceSnap;


  buttonText! : string;

  constructor(private faceSnapsService: FaceSnapsService,
              private router: Router){}

  ngOnInit() {
    
    this.buttonText = 'Oh snap!'
    
    
  }
  onSnapp(){
    // if (this.buttonText ==='Oh snap!') {
    //   this.faceSnapsService.snapFaceSnapsById(this.faceSnap.id, 'snap');
    //   this.buttonText = 'Oops, unSnap!' ;
      
    // } else {
    //   this.faceSnapsService.snapFaceSnapsById(this.faceSnap.id, 'unsnap');
    //   this.buttonText ='Oh snap!';
    // }
    

     
  }
  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);

  }




}
