import { testFunction1, testFunction2 } from './testFunction.js';

const mainFunction = () => {
	console.log("This is the main function");
	testFunction1();
	testFunction2();
}

mainFunction();