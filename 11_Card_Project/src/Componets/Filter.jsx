
const Filter = (props) => {

  let filterData=props.filterData;
  let category=props.category;
  let setCategory=props.setCategory;


    function filterHandler(titleData)
    {
     
      setCategory(titleData)
      
  
     
    }

  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center'>
        {filterData.map((data1,index)=>{
            return <button onClick={()=>{
              filterHandler(data1.title)
              console.log(data1.title+"hii");
            }} className={`text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300 ${category==data1.title ?'bg-opacity-60 border-white' :"bg-opacity-40 border-transparent " }`}  key={index}>{data1.title}</button>
            
        })}
    </div>
  )
}

export default Filter