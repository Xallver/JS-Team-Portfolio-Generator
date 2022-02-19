const Manager = require('../lib/Manager');

test('creates a manager class with info', () => {
    const manager = new Manager('Jasmin', 1, 'Jasmin@gmail.com', 2);

    expect(manager.getName()).toBe('Jasmin');
    expect(manager.getId()).toBe(1);
    expect(manager.getEmail()).toBe('Jasmin@gmail.com');
    expect(manager.getOfficeNumber()).toBe(2);   
    
});