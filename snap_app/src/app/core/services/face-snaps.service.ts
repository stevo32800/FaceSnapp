import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, switchMap } from "rxjs";
import { FaceSnap } from "../model/face-snap.model";

@Injectable({
providedIn: 'root'
})
export class FaceSnapsService {
  constructor(private http: HttpClient) {}

    faceSnaps: FaceSnap[] = [
        {
          id: 1,
          title:'montains',
          description:'Suberbe vue',
          creationDate:new Date(),
          snaps:100,
          imageUrl:'https://thelandscapephotoguy.com/wp-content/uploads/2019/01/landscape%20new%20zealand%20S-shape.jpg'
        },
        {
          id: 2,
          title:'Flowers',
          description:'Jolie photo',
          creationDate:new Date(),
          snaps:0,
          imageUrl:'https://jardinage.lemonde.fr/images/dossiers/historique/tournesol-175148.jpg',
          location:'paris'
        },
      {
        id:3,
        title:'sunset',
        description:'Belle journée',
        creationDate:new Date(),
        snaps:0,
        imageUrl:'https://cdn.futura-sciences.com/buildsv6/images/wide1920/9/3/2/9321f807a3_100799_soleil-rouge.jpg'
      }
    
      ];

    getAllFaceSnaps(): Observable<FaceSnap[]> {
       return this.http.get<FaceSnap[]>('http://localhost:3000/facesnaps'); 
    }

    getFaceSnapsById(faceSnapId:number): Observable<FaceSnap> {
      return this.http.get<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`);
    
        
    }


    snapFaceSnapsById(faceSnapId:number, snapType: 'snap' | 'unsnap') : Observable<FaceSnap> { 
       return this.getFaceSnapsById(faceSnapId).pipe(
         map(faceSnap => ({
           ...faceSnap,
           snaps: faceSnap.snaps + (snapType === 'snap' ? 1 : -1)
         })),
         switchMap(updatedFaceSnap => this.http.put<FaceSnap>(`http://localhost:3000/facesnaps/${faceSnapId}`,updatedFaceSnap))
       );
       }
      

  addFaceSnapp(formValue: {title: string, description: string, imageUrl:string, location?:string}): Observable<FaceSnap> {
 return this.getAllFaceSnaps().pipe(
   map(facesnaps => [...facesnaps].sort((a: FaceSnap, b:FaceSnap)=> a.id - b.id)),
   map(sortedFacesnaps => sortedFacesnaps[sortedFacesnaps.length -1]),
   map(previousFacesnap => ({
     ...formValue,
    snaps : 0,
    creationDate: new Date(),
    id: previousFacesnap.id +1
   })),
   switchMap(newFacesnap => this.http.post<FaceSnap>('http://localhost:3000/facesnaps', newFacesnap))
 );
  
}


}
    

