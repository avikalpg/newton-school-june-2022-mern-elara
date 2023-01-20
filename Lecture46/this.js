class Car {
	constructor(brand, model, engine_type, boot_space, num_seats) {
		this.brand = brand;
		this.model = model;
		this.engine = {
			type: engine_type,
			maxTorque: 5,
			turnedOn: false,
		};
		this.boot_space = boot_space;
		this.stearing_wheel = {
			diameter: 30,
			spokes: 3,
			horn_button: 'central',
			angle: 0
		};
		this.numSeats = num_seats;
		this.numGears = 6;
		this.numOccupants = 0;
		this.speed = 0;
	}

	start_engine() {
		this.engine.turnedOn = true;
	}

	stop_engine() {
		this.engine.turnedOn = false;
	}

	accelerate(gas_pedal_press) {
		if (this.engine.turnedOn) {
			let acceleration = (gas_pedal_press * 50) / (10 + this.speed);
			this.speed += acceleration;
		}
	}

	break(break_pedal_press) {
		let acceleration = (break_pedal_press * 2.5);
		this.speed = Math.max(0, speed - acceleration);
	}

	handbreak() {
		this.speed = Math.max(0, speed - 50);
	}

	steer(steering_angle) {
		this.stearing_wheel.angle = steering_angle;
	}

	drift_left() {
		this.steer(-90);
		this.handbreak();
	}
}

const nexus = new Car("tata", "nexus", "electric", 400, 5);

console.log(nexus.engine)
nexus.start_engine();
console.log(nexus.engine, nexus.speed);

const accelerate_interval = setInterval(() => {
	nexus.accelerate(0.8);
	console.log(nexus.speed);
}, 500);

setTimeout(() => { clearInterval(accelerate_interval) }, 6000);

// CALL/APPLY FUNCTION
function add_rider(num_riders, num_children_riders) {
	console.log(`Earlier number of riders: ${this.numOccupants} and number of seats: ${this.numSeats}`);
	this.numOccupants = Math.min(this.numSeats, this.numOccupants + num_riders) + num_children_riders;
	console.log(`Final number of occupants in the car: ${this.numOccupants}.`)
}

add_rider(4);
add_rider.call(nexus, 3, 0);
add_rider.apply(nexus, [3, 2])

add_rider(6);

const bat_mobile = new Car("Lamborgini", "Galardo", "ICE", 250, 1);
const ride_bat_mobile = add_rider.bind(bat_mobile);
ride_bat_mobile(2, 0);

console.log("before", nexus.numOccupants, bat_mobile.numOccupants);
add_rider(0, 1);
ride_bat_mobile(0, 1);
console.log("after", nexus.numOccupants, bat_mobile.numOccupants);

// these three give the same output
add_rider.call(bat_mobile, 1, 1);
add_rider.apply(bat_mobile, [1, 1]);
add_rider.bind(bat_mobile)(1, 1)