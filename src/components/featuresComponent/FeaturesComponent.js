// import React from 'react';
// import BFooterImg from '../../assets/images/BFooterImg.jpeg';
import ListComponent from '../customInputs/listComponent/ListComponent';
import Button from '../button';
import { ButtonSize, ButtonState } from '../button/enum';

const FeaturesComponent = (props) => {
  return (
    <div>
      <section className="bg-black font-sora">
        <div className="w-full p-24 flex mx-auto gap-12">
          <div className="">
            <img src={props.image} className="object-contain" />
          </div>
          <div className="w-4/5 h-full">
            <h3 className="text-white font-sora font-semibold text-iv">{props.header}</h3>
            <div>
              <ListComponent list="1111" />
            </div>
            <div className="flex gap-6">
              <Button variant={ButtonSize.SECONDARY} size={ButtonSize.md} value="Book a demo" />
              <Button variant={ButtonState.TRANSPARENT} size={ButtonSize.md} value="Sign Up" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturesComponent;
