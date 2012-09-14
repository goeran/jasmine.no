/*
    Utvider jasmine spec dsl til å støtte norsk språk.
    Dette gjør at det er mulig å skrive jasmine specene på norsk.
*/

//describe
var beskriv = describe;
var xbeskriv = xdescribe;
var når = describe;
var xnår = xdescribe;

//it
var da = it;
var xda = xit;

//beforeEach
førHverTest = beforeEach;
etterHverTest = afterEach;