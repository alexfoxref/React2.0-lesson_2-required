import employersNames from './employers';
import {sponsors, money} from './sponsors';


class MakeBusiness {
    constructor({owner, director = 'Viktor', cash, emp} = {}) {
        this.owner = owner;
        this.director = director;
        this.cash = cash;
        this.emp = emp;
    }
    sumSponsors() {
        const {eu, rus} = sponsors,
            sumSponsors = [...eu, ...rus, 'unexpected sponsor'];

        return sumSponsors;
    }
    reportResults() {
        const {eu:[srl]} = sponsors;

        console.log(`We have a business. Owner: ${this.owner}, director: ${this.director}. Our budget: ${this.cash}. And our employers: ${this.emp}`);
        console.log('And we have a sponsors: ');
        console.log(...this.sumSponsors());
        console.log(`Note. Be careful with ${srl}. It's a huge risk.`);
    }
}

const makeBusiness = new MakeBusiness({
    owner: 'Sam',
    cash: money,
    emp: employersNames
});

makeBusiness.reportResults();