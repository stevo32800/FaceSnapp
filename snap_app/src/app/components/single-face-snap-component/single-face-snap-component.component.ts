import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../../core/model/face-snap.model';
import { FaceSnapsService } from '../../core/services/face-snaps.service';
import { Router} from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-single-face-snap-component',
  templateUrl: './single-face-snap-component.component.html',
  styleUrls: ['./single-face-snap-component.component.scss']
})
export class SingleFaceSnapComponentComponent implements OnInit {
  

  
  faceSnap$!: Observable<FaceSnap>;

  buttonText! : string;
  buttonText2! : string;

  constructor(private faceSnapsService: FaceSnapsService,
    private route:ActivatedRoute,
    private router: Router){}
    

  ngOnInit() {
    
    this.buttonText = 'Oh snap!'
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapsById(faceSnapId);
    this.buttonText2 = 'Back'
  }
  onSnapp(faceSnapId: number){
   if (this.buttonText ==='Oh snap!') {
     this.faceSnap$ = this.faceSnapsService.snapFaceSnapsById(faceSnapId, 'snap').pipe(
       tap(() => this.buttonText = 'Oops, unSnap!')        
       );         
      
   } else {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapsById(faceSnapId, 'unsnap').pipe(
      tap(() =>  this.buttonText ='Oh snap!')
      );
     
   }
    

     
  }
  onClickBack() {
    this.router.navigateByUrl('facesnaps');
    return  
}
}