import { useEffect } from "react"
import { useSelector } from "react-redux"


const SearchMovies = () => {

  const inputData=useSelector((state)=>state.input.inputData)
  console.log("inputData", inputData);

 
    const searchFunc=async()=>{
      const res=await fetch(`https://www.omdbapi.com/?t=${inputData}&apikey=51876c6a`);
      const data=await res.json();
      console.log(data);
    }
    useEffect(()=>{
        searchFunc()
    },[])
  return (


    <div>
      klsdjflkds
    </div>
  )
}

export default SearchMovies