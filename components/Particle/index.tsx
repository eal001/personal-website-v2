export class Particle {

    x : number;
    y : number;
    speed : number;
    color : string;

    constructor(x: number, y: number, speed: number, color: string){
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.color = color;
    }

    render() {
        return (
            <div className='particle' background-color={this.color} style={ { top: this.x, left: this.y} }>

            </div>
        )
    }
}