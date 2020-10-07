import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent {

  @Input() title: string;
  @Input() pictures: string[] = [''];
  @Input() subtitles: string[] = [''];
  
  currentPicture: number = 0;

  nextPicture () {
    this.currentPicture++;
  }

  previosPicture() {
    this.currentPicture--;
  }

  firstPicure() {
    this.currentPicture = 0;
  }

  lastPicture() {
    this.currentPicture = this.pictures.length -1;
  }

  isLastPicture():boolean{
    return this.currentPicture === this.pictures.length -1;
  }

}
