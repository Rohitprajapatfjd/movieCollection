import { useState,useEffect } from "react";
import axios from "axios";
const fetchData = (path)=>{
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(false);
  
    const fetch = async()=>{
        try {
            setLoading(true);
           const response = await axios.get(path);
           setLoading(true)
           setData(response.data.results ?? response.data);
         //  console.log(response.data.results)
        } catch (error) {
          console.log("error ",error)
        }
      }
      useEffect(()=>{
        fetch()
      },[path])
      return {data,loading}
}

export default fetchData;