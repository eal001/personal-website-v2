export class Particle {

    x : string;
    y : string;
    key : string;

    constructor(x: string, y: string, key: number){
        this.x = x;
        this.y = y;
        this.key = 'particleNumber' + key;
    }

    render() {
        return (
            <div className='particle' key={this.key} style={ { top: this.y, left: this.x} }></div>
        )
    }
}