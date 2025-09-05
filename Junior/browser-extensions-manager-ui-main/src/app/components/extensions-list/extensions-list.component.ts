import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Extension {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

@Component({
  selector: 'app-extensions-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './extensions-list.component.html',
  styleUrl: './extensions-list.component.css'
})
export class ExtensionsListComponent {
  @Input() set extensions(value: Extension[]) {
    this._extensions = value;
    this.backupExtensions = [...value]; // Make a copy
  }
  get extensions(): Extension[] {
    return this._extensions;
  }

  private _extensions: Extension[] = [];
  private backupExtensions: Extension[] = [];

  filter(by: string) {
    if (by === 'active') {
      this._extensions = this.backupExtensions.filter(e => e.isActive);
    } else if (by === 'inactive') {
      this._extensions = this.backupExtensions.filter(e => !e.isActive);
    } else {
      this._extensions = [...this.backupExtensions]; // Reset to full list
    }
  }
}
