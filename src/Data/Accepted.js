export default function Accepted(allSubmission) {
  if(!allSubmission)return [];
  const correctAns = allSubmission.filter((item) => item.verdict === "OK");
  return correctAns;
}
