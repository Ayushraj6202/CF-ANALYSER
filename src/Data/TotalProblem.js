export default function TotalProblem(userName) {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://codeforces.com/api/user.status?handle=${userName}&from=1`
        );
        const result = await response.json();

        if (response.ok && result.result.length) {
          return result.result;
        } else {
          console.error("Total Problem Error:", result.comment || "No data found");
        }
      } catch (error) {
        console.error("Total Problem Fetch error:", error);
      }
    };
      return fetchData();
}
