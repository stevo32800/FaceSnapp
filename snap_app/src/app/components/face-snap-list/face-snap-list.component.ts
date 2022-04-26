import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval,tap, takeUntil, Subject, Observable } from 'rxjs';
import { FaceSnap } from '../../core/model/face-snap.model';
import { FaceSnapsService } from '../../core/services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  faceSnaps!: FaceSnap[];
  faceSnaps$!: Observable<FaceSnap[]>



  constructor(private faceSnapsService: FaceSnapsService) {}  
   

  ngOnInit(): void {
    
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();

  }

  }