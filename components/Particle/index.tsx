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
            <div className="particle-container" key={this.key} style={ { top: this.x, left: this.y} }>
                <div className='particle'></div>
            </div>
        )
    }
}