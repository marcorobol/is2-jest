const conc = require('./module').conc

test('multiply 2', () => {
    expect(4).toBe(4);
});

test('concat test', () => {
    expect(conc('a','b')).toBe('ab');
});

test('concat null', () => {
    expect(conc(null,null)).toBe(0);
});


const fetch = require("node-fetch")
test('fetch', async () => {
  var r = await fetch("https://sites.google.com/unitn.it/seii-inf-org-unitn")
  expect(r.status).toEqual(200)
})