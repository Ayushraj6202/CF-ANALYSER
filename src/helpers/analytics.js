import Accepted from "../Data/Accepted.js";

export function getUniqueSolvedCount(submissions) {
	const solved = new Set();

	Accepted(submissions).forEach((submission) => {
		const problem = submission.problem;
		const key = `${problem.contestId || "gym"}-${problem.index}-${problem.name}`;
		solved.add(key);
	});

	return solved.size;
}

export function getAccuracy(data) {
	if (!data.length) return "0.0";
	return ((Accepted(data).length / data.length) * 100).toFixed(1);
}

export function getTopTags(tagMap) {
	return Object.entries(tagMap)
		.sort((a, b) => b[1] - a[1])
		.slice(0, 5);
}
