function Person(fname, lname, dob) {
	this.first_name = fname;
	this.last_name = lname;
	this.date_of_birth = dob;

	this.getFullName = function () {
		return this.first_name + " " + this.last_name;
	}

	this.getAge = () => {
		const now = new Date();
		return now.getUTCFullYear() - this.date_of_birth.getUTCFullYear();
	}

	this.setDateOfBirth = (dob) => {
		this.date_of_birth = dob;
	}
}

const zakir = new Person("Zakir", "Hussain", new Date(1996, 12, 15));
console.log(zakir.getAge());
const vikram = new Person("Vikram", "Raj", new Date(2022, 12, 14));
console.log(vikram.getFullName());

class Marker {
	constructor(brand, color) {
		this.brand = brand;
		this.color = color;
	}

	getColor() {
		return this.color;
	}

	setColor(new_color) {
		this.color = new_color;
	}
}

const red_marker = new Marker("Camlin", "#ff0000");
const blue_marker = new Marker("Camlin", '#0000ff');
blue_marker.setColor('0000fd');
console.log(red_marker.getColor());

console.log(typeof (Person), typeof (Marker), typeof (zakir));