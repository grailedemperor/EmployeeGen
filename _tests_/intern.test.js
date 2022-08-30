
const Intern = require('../lib/Intern.js');


test('creates an Intern object', () => {
    const intern = new Intern('Emmanuel', 47, 'gamed@foo.com', 'CSUMB');
    
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school) .toEqual(expect.any(String));
});


test('gets employee school', () => {
    const intern = new Intern('Emmanuel', 47, 'gamed@foo.com', 'CSUMB');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});


test('gets role of employee', () => {
    const intern = new Intern('Emmanuel', 47, 'gamed@foo.com', 'CSUMB');

    expect(intern.getRole()).toEqual("Intern");
}); 