

const Slider = () => {
    return (
        <div className="mx-3 mt-1 ">
        <div className="carousel w-full md:h-[70vh]">
<div id="slide1" className="carousel-item relative w-full">
<img src="https://i.ibb.co/RHqLtqC/OIP-11.jpg" className="w-full" />
<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
  <a href="#slide4" className="btn btn-circle">❮</a> 
  <a href="#slide2" className="btn btn-circle">❯</a>
</div>
</div> 
<div id="slide2" className="carousel-item relative w-full">
<img src="https://i.ibb.co/xHs31KT/realme-5s-2.jpg" className="w-full" />
<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
  <a href="#slide1" className="btn btn-circle">❮</a> 
  <a href="#slide3" className="btn btn-circle">❯</a>
</div>
</div> 
<div id="slide3" className="carousel-item relative w-full">
<img src="https://i.ibb.co/CKqJQyR/realme-Pad5.jpg" className="w-full" />
<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
  <a href="#slide2" className="btn btn-circle">❮</a> 
  <a href="#slide4" className="btn btn-circle">❯</a>
</div>
</div> 
<div id="slide4" className="carousel-item relative w-full">
<img src="https://i.ibb.co/n6XTP4g/realme-Watch-T1-colors-1024x542.jpg" className="w-full" />
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