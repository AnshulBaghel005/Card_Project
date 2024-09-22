import { Children, useEffect, useState } from "react";
import "./App.css";
import Filter from "./Componets/Filter";
import Navbar from "./Componets/Navbar";
import filterData, { apiUrl } from "./Data";
import Cards from "./Componets/Cards";

function App() {
  const [Data, setData] = useState([]);
  const [category, setCategory] = useState(filterData[0].title)

  useEffect(()=>{
      fetch(apiUrl).then((res)=>{
      return res.json()
    }).then((data)=>{
      setData(data.data)
    })
  },[])
 

  

  async function apiHit() {
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setData(output.data);
    } catch (error) {
      console.log("Network Error");
    }
  }
  useEffect(() => {
    apiHit();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="bg-blue-500">
        <div>
          
          <Filter category={category} setCategory={setCategory} filterData={filterData} />
        </div>
        <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center flex-wrap items-center min-h-[50vh]">
          <Cards category={category} cardData={Data} />
        </div>
      </div>
    </div>
  );
}

export default App;
