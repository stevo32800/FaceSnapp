import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGard } from "../core/guards/auth.guards";
import { FaceSnapListComponent } from "./face-snap-list/face-snap-list.component";
import { NewFaceSnapComponent } from "./new-face-snap/new-face-snap.component";
import { SingleFaceSnapComponentComponent } from "./single-face-snap-component/single-face-snap-component.component";


const routes: Routes = [
    {path: 'create',component: NewFaceSnapComponent, canActivate: [AuthGard]},
    {path: ':id', component: SingleFaceSnapComponentComponent, canActivate: [AuthGard]},
    {path: '', component: FaceSnapListComponent, canActivate:[AuthGard] }
    
];

@NgModule({
imports:[RouterModule.forChild(routes)],
exports: [RouterModule]

})
export class FaceSnapsRoutingModule {}