import React, { useEffect, useState } from "react";

export default function AllContestsData(userName){
    const [data,setData] = useState([]);
    const url = `https://codeforces.com/api/user.rating?handle=${userName}`
    useEffect(()=>{
        const  calme = async()=>{
            try {
                const response = await fetch(url);
                const result = await response.json();
                // console.log(result);
                if(result){
                    setData(result['result'])
                }
            } catch (error) {
                console.error(error);
            }
        }
        calme();
    },[])
    // console.log(data);
    return data;
}