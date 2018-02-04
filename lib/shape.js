
import {Color, Vector2} from './math';
export default class Shape {
   constructor() {
       this.color = new Color();
       this.position = new Vector2();
       this.size - new Vector(10,10);
   }

   draw(context) {
       context.fillStyle = this.color.toHex();

       context.fillRect(this.position.x, this.position.y,
                       this.size.x, this.size.y);
   }
} 
