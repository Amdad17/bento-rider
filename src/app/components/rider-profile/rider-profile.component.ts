import { Component } from '@angular/core';

@Component({
  selector: 'app-rider-profile',
  templateUrl: './rider-profile.component.html',
  styleUrl: './rider-profile.component.css'
})
export class RiderProfileComponent {


  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}


