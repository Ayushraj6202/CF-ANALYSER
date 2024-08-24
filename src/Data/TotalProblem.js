import { useEffect, useState } from "react";

export default function TotalProblem(userName) {
  const [data, setData] = useState([]);

  const url = `https://codeforces.com/api/user.status?handle=${userName}&from=1`;
  // console.log(url);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const result = await response.json();

        if (response.ok&&result.result.length) {
          // console.log("result", result);
          setData(result['result']);
        } else {
          console.error('Error:', result.result);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };

    fetchData();
  }, []);
  // console.log(data);

  return data;
}
