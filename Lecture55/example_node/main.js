// const tf = require('./testFunction');

// tf.testFunction1()
// tf.testFunction2()

const { testFunction1, testFunction2 } = require('./testFunction');

const mainFunction = () => {
	console.log('This is the main function');
	testFunction1();
	testFunction2();
}
mainFunction();