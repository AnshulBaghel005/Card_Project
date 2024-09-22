
import Card from './Card';

const Cards = (props) => {
  let category=props.category;
  let courses=props.cardData;

  
  function getCourses()
  {
    if(category=='All')
    {
      let allCourse=[];
      Object.values(courses).forEach(array=>{
        array.forEach(courses=>{
          allCourse.push(courses);
        })
      })
    
      return allCourse
    }
    else{
      console.log(courses[category]+"data");
      return courses[category]
      

    }
    

  }
  let cardData1=getCourses();
  //console.log(cardData1);


    
    
   
  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
    {
      cardData1.map((courseData,index)=>{
        return <Card key={index} course={courseData}/>
      })
    }
    </div>
  )
}

export default Cards