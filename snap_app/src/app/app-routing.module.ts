import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponentComponent } from "./landing-page-module/landing-page-component/landing-page-component.component";




const routes: Routes = [
    {path:'facesnaps', loadChildren: () => import('./components/face-snaps.module').then(m => m.FaceSnapsModule)},
    {path: '', component: LandingPageComponentComponent },

    

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule {}