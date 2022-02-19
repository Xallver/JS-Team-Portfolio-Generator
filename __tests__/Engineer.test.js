const Engineer = require('../lib/Engineer');

test('creates an engineer class with info', () => {
    const engineer = new Engineer('James', 1, 'james@gmail.com', 'Jimmyhub');

    expect(engineer.getName()).toBe('James');
    expect(engineer.getId()).toBe(1);
    expect(engineer.getEmail()).toBe('james@gmail.com');
    expect(engineer.getGithub()).toBe('Jimmyhub');
});