
import Shape from './lib/shape';
import {PURPLE, PINK} from './lib/colors';

const context = document.getElementById('screen').getContext('2d');

const rect = new Shape();
rect.color.copy(PURPLE);
rect.size.set(200,60);
rect.position.set(20,10);

rect.draw(context);

const square = new Shape();
rect.color.copy(PINK);
rect.size.set(60,60);
rect.position.set(150,200);

square.draw(context);

