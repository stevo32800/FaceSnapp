import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { FaceSnapComponent } from "./face-snap/face-snap.component";
import { FaceSnapsRoutingModule } from "./face-snaps-routing.module";
import { NewFaceSnapComponent } from "./new-face-snap/new-face-snap.component";
import { SingleFaceSnapComponentComponent } from "./single-face-snap-component/single-face-snap-component.component";

@NgModule({
declarations:[
    FaceSnapComponent,
    FaceSnapListComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponentComponent
    

],
imports:[
    ReactiveFormsModule,
    CommonModule,
    FaceSnapsRoutingModule

],
exports: [
    FaceSnapComponent,
    FaceSnapListComponent,
    NewFaceSnapComponent,
    SingleFaceSnapComponentComponent
]


})
export class FaceSnapsModule { }