import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ExtensionsListComponent } from './components/extensions-list/extensions-list.component'
import { ExtensionsService } from './services/extensions.service';

export interface Extension {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ExtensionsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  myExtensions: Extension[] = [];

  constructor(private extensionsService: ExtensionsService) {}

  ngOnInit() {
    this.extensionsService.getExtensions().subscribe(data => {
      this.myExtensions = data;
    });
  }
}
