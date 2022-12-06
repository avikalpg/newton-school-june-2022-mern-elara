// You need to print the matrix Anticlock wise
// mat: contains the input matrix
function printAntiClockWise(mat) {
	// Your code here
	let N = mat.length;
	let i = 0;
	let j = 0;
	let n = N ** 2;
	while (n > 0) {
		process.stdout.write(mat[i][j] + " ");
		n--;
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
			if (n != 0)
				console.error("Unexpected", i, j, N - 1);
			break;
		}
	}
}