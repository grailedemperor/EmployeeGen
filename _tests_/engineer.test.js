const Engineer = require('../lib/Engineer.js');

 
test('creates an Engineer object', () => {
    const engineer = new Engineer('Emmanuel', 47, 'gamed@foo.com', 'grailedemperor');
    
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.git).toEqual(expect.any(String));
});


test('gets engineer github value', () => {
    const engineer = new Engineer('Emmanuel', 47, 'gamed@foo.com', 'grailedemperor');

    expect(engineer.getGit()).toEqual(expect.stringContaining(engineer.git.toString()));
});


test('gets role of employee', () => {
    const engineer = new Engineer('Emmanuel', 47, 'gamed@foo.com', 'grailedemperor');

    expect(engineer.getRole()).toEqual("Engineer");
});