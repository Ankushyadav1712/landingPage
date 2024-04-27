import React from 'react'
import "./ActiveSlider.css";


const ActiveSlider = () => {
  return (
    <div className='flex flex-col items-center'>
        <div id="carouselExampleAutoplaying" class="carousel slide w-100 h-100" data-bs-ride="carousel">
            <div class="carousel-inner img-adjust">
                <div class="carousel-item active img-adjust " >
                    <img src="https://media.istockphoto.com/id/1322775684/photo/tiger-portrait.webp?b=1&s=170667a&w=0&k=20&c=pNIcM0Ai7JxX4tU79rr6IHImt0ZFKZDsgSsSLbzFeXM=" class="d-block w-100  " alt="..."/>
                </div>
                <div class="carousel-item img-adjust">
                    <img src="https://cdn.pixabay.com/photo/2015/03/30/20/33/heart-700141_1280.jpg" class="d-block w-100 " alt="..."/>
                </div>
                <div class="carousel-item img-adjust">
                    <img src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg" class="d-block w-100 " alt="..."/>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>








    

  )
}

export default ActiveSlider




