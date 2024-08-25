import Accepted from "./Accepted.js";

export default function TagsVsCount(data){
    const AllCorrect = Accepted(data);
    const count = {};
    for(let i =0;i<AllCorrect.length;i++)
    {
        const p = AllCorrect[i]['problem']['tags'];
        for(let j = 0;j<p.length;j++)
        {
            let tag = p[j];
            count[tag] = (count[tag]||0) + 1;
        }
    }
    // console.log(count);
    return count;
}   