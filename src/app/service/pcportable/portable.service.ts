import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Portable } from 'src/app/model/pcportable/portable';

@Injectable({
  providedIn: 'root'
})
export class PortableService {

  PcPortableURL: string;

  constructor(private http: HttpClient) { 
    this.PcPortableURL = 'http://localhost:8080/PcPortable';
  }

  

  addPcPortable(pcportable: Portable): Observable<Portable> {
    return this.http.post<Portable>(this.PcPortableURL, pcportable);
  }

  getAllPcPortable(): Observable<Portable[]> {
    return this.http.get<Portable[]>(this.PcPortableURL);
  }

  
  updatePcPortable(pcPortable : Portable): Observable<Portable[]> {
    return this.http.put<Portable[]>(this.PcPortableURL,pcPortable);
  }

  /*
  deletePcPortable(pcPortable : Portable): Observable<Portable[]> {
    return this.http.put<Portable[]>(this.PcPortableURL, pcPortable)
  }*/

}
