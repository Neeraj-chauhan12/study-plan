import React from 'react'

const EducationUpcoming = () => {

      const subjects = [
  {
    id: 1,
    image: "https://static.vecteezy.com/system/resources/previews/021/837/336/large_2x/ai-generated-3d-cute-student-boy-studying-papers-on-the-desk-in-room-photo.jpg",
    subject: "Mathematics",
    description: "Explore numbers, formulas, shapes, and equations."
  },
  {
    id: 2,
    image: "https://thumbs.dreamstime.com/z/boy-focused-studying-teenager-many-books-63526719.jpg",
    subject: "Science",
    description: "Discover the natural world through physics, chemistry, and biology."
  },
  {
    id: 3,
    image: "https://png.pngtree.com/png-clipart/20220125/original/pngtree-boy-studying-on-huge-book-png-image_7206898.png",
    subject: "History",
    description: "Learn about past events, civilizations, and significant figures."
  },
  {
    id: 4,
    image: "https://wallpaperaccess.com/full/3508559.jpg",
    subject: "Geography",
    description: "Study Earth's landscapes, environments, and human impact."
  },
  {
    id: 5,
    image: "https://static.vecteezy.com/system/resources/previews/021/837/336/large_2x/ai-generated-3d-cute-student-boy-studying-papers-on-the-desk-in-room-photo.jpg",
    subject: "English",
    description: "Improve reading, writing, grammar, and communication skills."
  },
  {
    id: 6,
    image: "https://thumbs.dreamstime.com/z/boy-focused-studying-teenager-many-books-63526719.jpg",
    subject: "Computer Science",
    description: "Learn about programming, data structures, and algorithms."
  },
  {
    id: 7,
    image: "https://png.pngtree.com/png-clipart/20220125/original/pngtree-boy-studying-on-huge-book-png-image_7206898.png",
    subject: "Biology",
    description: "Understand living organisms, cells, and ecosystems."
  },
  {
    id: 8,
    image: "https://tse2.mm.bing.net/th?id=OIP.ax_oP1nTuCkAHTblu4sMNQHaFP&pid=Api&P=0&h=180",
    subject: "Chemistry",
    description: "Explore matter, chemical reactions, and atomic structures."
  },
  {
    id: 9,
    image: "https://tse2.mm.bing.net/th?id=OIP.ax_oP1nTuCkAHTblu4sMNQHaFP&pid=Api&P=0&h=180",
    subject: "Physics",
    description: "Study motion, forces, energy, and the laws of nature."
  },
  {
    id: 10,
    image: "https://wallpaperaccess.com/full/3508559.jpg",
    subject: "Art",
    description: "Express creativity through drawing, painting, and design."
  }
];


  return (
    <>
      
        
        <div className=' flex bg-linear-to-r/srgb from-indigo-500 to-teal-400 min-h-1/2 py-10 px-10 gap-16 flex-wrap w-screen'>
        
        

         {
            subjects.map(({id,image,subject,description})=>{
                return(
                <div className='h-72 w-60 border-4 rounded border-black' key={id}>
                    <img className='h-40 w-full' src={image} alt="" />
                    <h1 className='text-2xl m-1 px-3 font-bold'>{subject}</h1>
                    <h1 className='px-3 text-white'>{description}</h1>

                </div>
                )
            })
         }
          
        </div> 


       
       
    </>
  )
}

export default EducationUpcoming
