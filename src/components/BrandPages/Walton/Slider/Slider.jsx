

const Slider = () => {
    return (
        <div className="mx-3 mt-1 ">
        <div className="carousel w-full md:h-[70vh]">
<div id="slide1" className="carousel-item relative w-full">
<img src="https://i.ibb.co/3B8w910/Walton-Primo-E7-mobile-Phone-Price-BD-Specifications-Bangladesh-Reviews4.jpg" className="w-full" />
<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
  <a href="#slide4" className="btn btn-circle">❮</a> 
  <a href="#slide2" className="btn btn-circle">❯</a>
</div>
</div> 
<div id="slide2" className="carousel-item relative w-full">
<img src="https://i.ibb.co/pQfkk1j/R-3.png" className="w-full" />
<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
  <a href="#slide1" className="btn btn-circle">❮</a> 
  <a href="#slide3" className="btn btn-circle">❯</a>
</div>
</div> 
<div id="slide3" className="carousel-item relative w-full">
<img src="https://i.ibb.co/hgVc2Fr/R-14.jpg" className="w-full" />
<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
  <a href="#slide2" className="btn btn-circle">❮</a> 
  <a href="#slide4" className="btn btn-circle">❯</a>
</div>
</div> 
<div id="slide4" className="carousel-item relative w-full">
<img src="https://i.ibb.co/brR2yNg/Xbs-Qyc-WLHOQImq57.webp" className="w-full" />
<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
  <a href="#slide3" className="btn btn-circle">❮</a> 
  <a href="#slide1" className="btn btn-circle">❯</a>
</div>
</div>
</div>
    </div>
    );
};

export default Slider;