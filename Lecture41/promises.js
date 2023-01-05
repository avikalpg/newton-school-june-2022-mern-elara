// try catch
const a = 10;
let b = 12;
try {
	console.log("a and b are defined");
	a += 3;
	console.log(a + b);
} catch (e) {
	console.log("Catch block mein aa gaye, bada maza aya");
	console.assert(typeof e === "object");
	console.debug(e);
} finally {
	console.log(`final value of a: ${a} and final value of b: ${b}`);
}

console.log("Handling multiple promises");

const resolved_promise = Promise.resolve(32);
resolved_promise.then(val => {
	console.log(val);
}).catch(e => {
	console.error(e);
})

const rejected_promise = Promise.reject("dummy");
rejected_promise.then(val => {
	console.log(val);
}).catch(e => {
	console.error(e);
})

const promise_obj = new Promise((res, rej) => res(42));
promise_obj.then(val => {
	console.log(val);
}).catch(e => {
	console.error(e);
}).finally(() => {
	console.log("after the promise - in finally");
})
console.log("after the promise");

// const timeout1 = setTimeout(() => { console.log("Print after timeout") }, 2000);
// console.log(typeof timeout1, timeout1);
// const timeout2 = setTimeout(() => { }, 1000);
// console.log(timeout2);
// const interval1 = setInterval(() => {
// 	b--;
// 	console.debug(".")
// 	if (b <= 0) clearInterval(interval1);
// }, 1000);
// console.log(interval1);

// multiple promises
const promise1 = new Promise((res, rej) => {
	setTimeout(() => {
		res(1);
	}, 2000);
});
const promise2 = Promise.reject(2);
const promise3 = Promise.resolve(3);

Promise.race([promise1, promise2, promise3]).then((val) => {
	console.log(`Resolved promise ${val}`);
}).catch(e => {
	console.error(`Rejected promise ${e}`);
})

Promise.all([promise1, promise2, promise3]).then((val) => {
	console.log(val);
}).catch((e) => {
	console.log(e);
})

Promise.allSettled([promise1, promise2, promise3]).then((val) => {
	console.log(val);
}).catch(e => {
	console.error(e);
})

promise_obj.then((val) => {
	console.log("in .then of the promise.obj: " + val);
	return val + 8;
}).then(new_val => {
	console.log("in .then.then of the promise obj: " + new_val);
	return new_val + 20;
})

// async await
async function myFunc() {
	const my_value = await promise_obj.then((val) => {
		console.log("in .then of the promise.obj: " + val);
		return val + 8;
	}).then(new_val => {
		console.log("in .then.then of the promise obj: " + new_val);
		return new_val + 20;
	});
	console.log(my_value.__proto__.constructor.name, my_value);
}
myFunc();