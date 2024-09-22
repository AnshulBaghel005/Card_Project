
//import { AiFillAmazonCircle } from "react-icons/ai";
const Card = ({course}) => {
    let courseData=course;
   
  return (
    <div className="w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden">
        <div>
          <img  src={courseData.image.url} alt="" />
        </div>
        {/* <div><button><FcLike /></button></div> */}
        <div className="p-4 bg-black">
    
              <p className="text-white font-semibold text-lg leading-6">{courseData.title}</p>
              <p className="mt-4 text-white">{courseData.description.length>100 ? (courseData.description.substr(0,100))+"...":(courseData.description)} </p>
        </div>
          
        </div>
    
  )
}

export default Card