import { Component, computed, signal } from '@angular/core';

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

  protected count = signal(0);

  protected doubleCount = computed(() => this.count() * 2);

  protected increaseCounter() {
    this.count.update((value) => value + 1);
  }

  protected decreaseCounter() {
    this.count.update((value) => value - 1);
  }

  protected resetCounter() {
    this.count.set(0);
  }
}
