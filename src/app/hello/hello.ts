import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss',
})
export class Hello {
  // Interpolation
  protected title = 'Welcome to Modern Angular!';
  // Property binding
  protected isDisabled = false;
  // Event binding
  onClick() {
    console.log('Button clicked!');
    this.isDisabled = !this.isDisabled;
  }
}
