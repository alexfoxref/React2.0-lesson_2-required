const employers = ['Alex', '', 'ludmila', 'Viktor', '', 'oleg', 'iNna', 'Ivan', 'Alex', 'Olga', ' Ann'];

const employersNames = employers.filter(item => {
    return item.length > 0
}).map(item => {
    return item.toLowerCase().trim()
});

export default employersNames;