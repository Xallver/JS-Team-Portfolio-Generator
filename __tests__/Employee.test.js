const Employee = require('../lib/Employee');

test('creates the employee with info', () => {
    const employee = new Employee('Eli', 0, "eli@gmail.com", "Employee");

    expect(employee.getName()).toBe("Eli");
    expect(employee.getId()).toBe(0);
    expect(employee.getEmail()).toBe("eli@gmail.com");
    expect(employee.getRole()).toBe("Employee");
});

