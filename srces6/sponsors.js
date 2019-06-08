const sponsors = {
    cash: [40000, 5000, 30400, 12000],
    eu: ['SRL', 'PLO', 'J&K'],
    rus: ['RusAuto', 'SBO']
};
const calcCash = ({
    cash = [],
    eu = [],
    rus = []} = {}) => {
        let total = 0;
        cash.map(item => {
            total += item
        });
        return total;
}
const money = calcCash(sponsors);

export {sponsors, money};