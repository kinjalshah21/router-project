import React, { useEffect,useState } from "react";
import { useLoaderData } from "react-router-dom";


function Github() {
     
    const data = useLoaderData()
    // this method works fine only but for optimization we can use loader 
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/kinjalshah21')
    //     .then((res)=>res.json())
    //     .then((data) => setData(data))
    // },[])
  return (
    <>
      <div className="flex items-center justify-center bg-gray-700 text-white">
        <div className=" text-2xl m-6"> 
        <h1 className="mb-8">Github Name: {data.name} </h1>
        <div className="flex space-x-2">
        <img src={data.avatar_url} alt="Github image" className="rounded-md w-28" />
        <div className="text-sm my-auto">
            <h4>{data.bio} </h4>
            <h4>Public repos: {data.public_repos}</h4>
            <h4>Twitter: {data.twitter_username} </h4>
        </div>
        </div>
     
        </div>
      </div>
    </>
  );
}

export default Github;

export const githubLoader = async()=>{
    const response = await fetch('https://api.github.com/users/kinjalshah21')
    return response.json()
}