import React from 'react';
import chairImg from '../../../images/images/chair.png';
import bgImg from '../../../images/images/bg.png'
const Banner = () => {
    return (
        <div class="hero min-h-screen bg-base-100 " style={{backgroundImage: `url(${bgImg})`}} > 
  <div class="hero-content flex-col lg:flex-row-reverse">
    <img src={chairImg}class="max-w-sm rounded-lg shadow-2xl" />
    <div className="px-12">
      <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
      <p class="py-6">Come visit our website and choose whatever package you want for your kids ,your loved ones or you yourself.</p>
      <button class="btn btn-primary font-bold text-white uppercase bg-gradient-to-r from-secondary to-primary hover:bg-gradient-to-l from-primary to-secondary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;