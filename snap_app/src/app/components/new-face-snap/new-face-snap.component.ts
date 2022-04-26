import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map, Observable, tap } from 'rxjs';
import { FaceSnap } from '../../core/model/face-snap.model';
import { FaceSnapsService } from '../../core/services/face-snaps.service';

@Component({
  selector: 'app-new-face-snap',
  templateUrl: './new-face-snap.component.html',
  styleUrls: ['./new-face-snap.component.scss']
})
export class NewFaceSnapComponent implements OnInit {


  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>;
  urlRegex!:RegExp;

  constructor(private formBuilder: FormBuilder,
             private faceSnapsService: FaceSnapsService,
             private router: Router) { }

  ngOnInit(): void {
    this.urlRegex = this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm = this.formBuilder.group({
      title: [null, Validators.required],
      description: [null,Validators.required],
      imageUrl:[null,[Validators.required,Validators.pattern(this.urlRegex)]],
      location: [null]
    },
    {updateOn: 'blur'} // pour update en changeant de champs
    );
    this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map(formValue => ({
        ...formValue,
        creationDate: new Date(),
        id:0,
        snaps: 0
      }))
    )
  }

onSubmitForm(): void {
this.faceSnapsService.addFaceSnapp(this.snapForm.value).pipe(
  tap(()=> this.router.navigateByUrl('/facesnaps'))
).subscribe();

}


}
