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
var førHverTest = beforeEach;
var etterHverTest = afterEach;

//expect & not
var skal = function(args) {
	var positive = expect(args);
	positive.ikke = positive.not
	return positive;
}
var xskal = xexpect;