 
const Manager = require('../lib/Manager.js');


test('creates a manager object', () => {
    const manager = new Manager('Emmanuel', 47, 'gamed@foo.com', 7455275444);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.number).toEqual(expect.any(Number));
});

  
test('gets managers number', () => {
    const manager = new Manager('Emmanuel', 47, 'gamed@foo.com', 7455275444);
    
    expect(manager.getNumber()).toEqual(expect.any(Number));
});


test('gets role of employee', () => {
    const manager = new Manager('Emmanuel', 47, 'gamed@foo.com', 7455275444);

    expect(manager.getRole()).toEqual("Manager");
}); 