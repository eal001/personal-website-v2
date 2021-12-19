export class Particle {

    x : string;
    y : string;
    color : string;
    key : string;

    constructor(x: string, y: string, color: string, key: number){
        this.x = x;
        this.y = y;
        this.color = color;
        this.key = 'particleNumber' + key;
    }

    render() {
        return (
            <div className='particle' key={this.key} style={ { backgroundColor: this.color, top: this.x, left: this.y} }></div>
        )
    }
}