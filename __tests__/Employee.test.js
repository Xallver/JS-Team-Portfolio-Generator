const Employee = require('../lib/Employee');

test('creates the employee with info', () => {
    const employee = new Employee('Eli', 1, "eli@gmail.com", "Elighub");

    expect(employee.name).toBe('Eli');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe("eli@gmail.com");
    expect(employee.github).toBe("Elighub");
});
