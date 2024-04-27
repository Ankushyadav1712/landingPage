// import React from 'react'

import video2 from "../assets/video2.mp4";

// const Video = () => {
//   return (
//     <section className='relative flex items-center justify-between mr-10 ml-10'>
//         <div className='flex flex-col items-start w-1/3 '>
//             <h1 className='text-4xl sm:text-6xl ml-20 mb-10  bg-gradient-to-r from-emerald-500 to bg-emerald-600 text-transparent bg-clip-text lg:text-7xl  tracking-wide'> Heading</h1>
//             <p className='text-neutral-500'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo autem cum cupiditate corrupti numquam dolore iste aliquid et ex odit!</p>
//         </div>
//         <video autoPlay muted loop className='rounded-lg w-1/2 border border-emerald-500  mx-2 my-4'>
//             <source src={video2} type='video/mp4'></source>
//         </video>
        

//     </section>
//   )
// }

// export default Video





const Video = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide">
        Explore Our{" "}
        <span className=" bg-gradient-to-r from-emerald-500 to bg-emerald-600  text-transparent bg-clip-text">
          App
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <video autoPlay muted loop className='rounded-lg w-1/2 border border-emerald-500  mx-2 my-4'>
            <source src={video2} type='video/mp4'></source></video>
        </div>
        <div className="pt-12 w-full lg:w-1/3">
            <div  className="flex mb-12">

              <p className="text-md text-neutral-500">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis ducimus quam quia minima tenetur repudiandae quas sapiente esse quos soluta dolores veritatis nobis eum a repellat laudantium vitae, voluptas sint accusamus! Nostrum consequatur, libero doloribus autem tempore accusantium vero delectus? Iure pariatur maiores quo impedit vitae aspernatur molestiae, aut deserunt.</p>

              

            </div>
        </div>
      </div>
    </div>
  );
};

export default Video;


























    // <div className=' relative flex justify-between my-10 flex-wrap mr-10'>
    //     <h1 className='text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide' >Heading</h1>
    //     <p className=' w-1/3  mx-2 my-4'>
            
    //     </p>
        
    //     <video autoPlay muted loop className='rounded-lg w-1/3 border border-emerald-500  mx-2 my-4'>
    //         <source src={video2} type='video/mp4'></source>
    //     </video>
    // </div>