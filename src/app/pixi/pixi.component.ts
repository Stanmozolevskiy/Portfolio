import { AfterViewInit, Component, NgZone } from "@angular/core";

import { ImageParticleSystem } from "./image-particle-system";

@Component({
  selector: "pixi-image-particle",
  template: ` <canvas width="1200" height="1200" class="canvas" id="viewport"></canvas> `,
  styleUrls: ['./pixi.component.css'],
})
export class PixiComponent implements AfterViewInit {
  IMAGE_URL:string = "https://i.ibb.co/9qbv8xk/m-340-340.png" ||"https://i.ibb.co/GpftHS8/m-1040-1040.png";

  constructor(private zone: NgZone) {
    // The application will create a canvas element for you that you
    // can then insert into the DOM.
  }

  public ngAfterViewInit(): void {
    this.zone.runOutsideAngular((): void => {
      // ==================================================
      // Main
      // ==================================================
      
      const imageParticleSystem = new ImageParticleSystem();
      console.log(window.innerWidth);
      imageParticleSystem.setup(this.setOffset(), this.setPadding());
      imageParticleSystem.changeImage(this.IMAGE_URL);
    });
  }
  private setOffset():number{
    if(window.innerWidth >1180)
      return 1.3;
      return 1.1;
  }
  private setPadding():number{
    if(window.innerWidth >1180)
      return 200;
      return 260;
  }
}
