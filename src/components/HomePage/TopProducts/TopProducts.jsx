

const TopProducts = () => {
    return (
        <div className="mx-4 mt-2">
            <div className="text-center text-3xl mt-3 font-bold text-black">
                <p>Our Top Products</p>
            </div>
            <div className="carousel w-full mt-4 md:h-[80vh]">
  <div id="item1" className="carousel-item w-full">
    <img src="https://i.ibb.co/pdkSbBv/samsung-fold.gif" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://i.ibb.co/tPXCtFW/R.gif" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://i.ibb.co/ZS3ywQt/R-1.gif" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://i.ibb.co/yyPZP07/realme-Narzo-20-realme-Narzo-20-Pro.gif" className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
        </div>
    );
};

export default TopProducts;