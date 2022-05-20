import React from 'react';
import chairImg from '../../../images/images/chair.png';
import bgImg from '../../../images/images/bg.png'
import Button from '../../Shared/Button/Button';
const Banner = () => {
    return (
        <div className="hero min-h-screen bg-base-100 " style={{backgroundImage: `url(${bgImg})`}} > 
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img src={chairImg}className="max-w-sm rounded-lg shadow-2xl" />
    <div className="px-12">
      <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
      <p className="py-6">Come visit our website and choose whatever package you want for your kids ,your loved ones or you yourself.</p>
      <Button>Get Started</Button>
    </div>
  </div>
</div>
    );
};

export default Banner;