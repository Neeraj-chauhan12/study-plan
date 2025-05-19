import React from 'react'
import { Link } from 'react-router-dom'

const Educationschedule = () => {

      const programmingSubjects = [
  {
    id: 1,
    image: "https://wallpaperaccess.com/full/5673721.jpg",
    subjectname: "JavaScript",
    description: "A versatile scripting language used for web development."
  },
  {
    id: 2,
    image: "https://thumbs.dreamstime.com/z/html-programming-language-web-development-coding-concept-html-programming-language-web-development-coding-concept-101618001.jpg",
    subjectname: "Python",
    description: "A powerful, easy-to-learn language great for automation and data science."
  },
  {
    id: 3,
    image: "https://academichelp.net/wp-content/uploads/2023/06/gregwillen21_a_beautiful_graphic_of_a_developer_coding_artifici_52130a4b-94dd-4487-ac7b-c0ccabcbbdd2.png",
    subjectname: "Java",
    description: "An object-oriented programming language commonly used for enterprise applications."
  },
  {
    id: 4,
    image: "https://extension.harvard.edu/wp-content/uploads/sites/8/2020/10/computer-programming.jpg",
    subjectname: "C#",
    description: "A modern language used for developing Windows applications and games with Unity."
  },
  {
    id: 5,
    image: "https://img.freepik.com/premium-vector/concept-programming-languages-from-around-world-man-programmer-showing-program-laptop_206127-480.jpg?w=2000",
    subjectname: "PHP",
    description: "A server-side scripting language used for building dynamic websites."
  },
  {
    id: 6,
    image: "https://static.vecteezy.com/system/resources/previews/000/523/378/original/web-development-application-design-coding-and-programming-on-laptop-and-smartphone-concept-with-programming-language-and-program-code-and-layout-on-screen-vector.jpg",
    subjectname: "Rust",
    description: "A systems programming language focused on safety and"
  }
]

  return (
    <>
      
        
        <div className=' flex min-h-1/2 bg-linear-to-r/srgb from-indigo-500 to-teal-400 py-10 px-16 gap-10 md:px-10 md:gap-16 flex-wrap w-screen'>

          <Link to={'/createchedule'} className='h-72 w-60 border-4 rounded border-black'>
                    <img  className='h-40 w-full' src="https://tse1.mm.bing.net/th?id=OIP.L01owCZB3KMBqSyArtW_fAHaF7&pid=Api&P=0&h=180" alt="" />
                    <h1 className='text-2xl px-3 font-bold'>Add subject</h1>
                    <h1 className='px-3 text-sm leading-none text-gray-400'>More info</h1>

                </Link>
        
        

         {
            programmingSubjects.map(({id,image,subjectname,description})=>{
                return(
                <div className='h-80 w-60 border-4 rounded border-black' key={id}>
                    <img className='h-40 w-full' src={image} alt="" />
                    <h1 className='text-2xl px-3 font-bold'>{subjectname}</h1>
                    <h1 className='px-3 text-white'>{description}</h1>

                </div>
                )
            })
         }
          
        </div> 

      

       
       
    </>
  )
}

export default Educationschedule
