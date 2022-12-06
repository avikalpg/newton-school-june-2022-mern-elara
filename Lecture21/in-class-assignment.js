// You need to print the matrix Anticlock wise
// mat: contains the input matrix
function printAntiClockWise(mat) {
	// Your code here
	let anticlock = [];
	let N = mat.length;
	let i = 0;
	let j = 0;

	while (anticlock.length < N ** 2) {
		anticlock.push(mat[i][j]);
		if ((i + 1 == j) && (j < N / 2)) {
			i++;
		}
		else if ((i >= j) && (i + j < N - 1)) {
			i++;
		}
		else if ((i > j) && (i + j >= N - 1)) {
			j++;
		}
		else if ((i <= j) && (i + j > N - 1)) {
			i--;
		}
		else if ((i < j) && (i + j <= N - 1)) {
			j--;
		}
		else {
			if (anticlock.length != N ** 2)
				console.error("Unexpected", i, j, N - 1);
			break;
		}
	}
	console.log(...anticlock);
}