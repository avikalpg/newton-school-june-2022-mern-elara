function myFunction() {
	let count = 1;
	for (let i = 0; i < 10; i++) {
		count += i ** 2;
	}
	console.log(count);
	let newVal = 10;
	console.log(count + newVal);
}

myFunction();

/**
 * line 1-7: myFunction 	m878	|| 	fn
 * line 9:
 * 		line 2-8: 	count	m123	|| 1		=> can be garbage collected after the execution of the myFunction() call
 * 		line 3-4: 	i		m411	|| 0 -> 10	=> can be garbage collected after the end of the for loop
 * 		line 7-8: 	newVal	m411	|| 10		=> can occupy the same memory location as "i" if the garbage collector frees up the memory occupied by i before the execution of line 7
 */

const wm1 = new WeakMap();

wm1.set(myFunction, 300);
console.log(wm1.has(myFunction));
console.log(wm1.get(myFunction));

wm1.set([1, 2, 3], 200);
console.log(wm1.has([1, 2, 3]));
console.log(wm1.get([1, 2, 3]));

const myArray = [1, 2, 3];
wm1.set(myArray, 200);
console.log(wm1.has(myArray));
console.log(wm1.get(myArray));


// emulating private members using Weakmap
{
	const privates = new WeakMap();

	function Public() {
		this.fname = "Avikalp";
		this.lame = "Gupta";
		this.hair_color = "black";
		const hiddenInfo = {
			// Private data goes here
			wallet_balance: 100,
			girl_friend: "Alexa",
		};
		privates.set(this, hiddenInfo);
	}

	Public.prototype.inquireGirlFriendThroughGovernmentInvestigator = function () {
		const hidden = privates.get(this);
		// Do stuff with private data in `me`
		// …
		console.log("My gf's name is " + hidden.girl_friend);
	};
}

let avi = new Public();
avi.inquireGirlFriendThroughGovernmentInvestigator();
console.log(privates.get(avi)); // throws error that privates is not defined
