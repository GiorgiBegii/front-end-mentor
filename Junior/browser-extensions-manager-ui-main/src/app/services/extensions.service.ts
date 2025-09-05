import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Extension } from '../components/extensions-list/extensions-list.component';

@Injectable({
  providedIn: 'root'
})
export class ExtensionsService {
  private jsonUrl = '/data.json';

  constructor(private http: HttpClient) {}

  getExtensions(): Observable<Extension[]> {
    return this.http.get<Extension[]>(this.jsonUrl);
  }
}
