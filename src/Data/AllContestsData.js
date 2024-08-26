import { useEffect, useState } from "react";

export default function AllContestsData(userName) {
//   const [data, setData] = useState([]);

//   useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://codeforces.com/api/user.rating?handle=${userName}`
        );
        const result = await response.json();

        if (response.ok) {
            return result.result;
        //   setData(result.result || []);
        } else {
          console.error("Contest Data Error:", result.comment || "No data found");
        }
      } catch (error) {
        console.error("Contest Data Fetch error:", error);
      }
    };

    if (userName) {
      return fetchData();
    }
//   }, [userName]);

  return [];
}
