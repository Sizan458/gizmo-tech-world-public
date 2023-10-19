

const CountDown = () => {
    return (
        <div className="mt-1 mx-4">
            <div className="hero  bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
  <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":15}}></span>
    </span>
    days
  </div> 
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":10}}></span>
    </span>
    hours
  </div> 
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":24}}></span>
    </span>
    min
  </div> 
  <div className="flex flex-col">
    <span className="countdown font-mono text-5xl">
      <span style={{"--value":55}}></span>
    </span>
    sec
  </div>
</div>
    <div className="text-4xl text-red-400 text-justify">
     
      <p className="">Get up 70% off</p>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default CountDown;