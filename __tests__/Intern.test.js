const Intern = require('../lib/Intern');

test('creates a intern class with info', () => {
    const intern = new Intern('Lani', 3, 'lani@gmail.com', 'old school');

    expect(intern.getName()).toBe('Lani');
    expect(intern.getId()).toBe(3);
    expect(intern.getEmail()).toBe('lani@gmail.com');
    expect(intern.getSchool()).toBe('old school');
});