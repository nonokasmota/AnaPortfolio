import { useEffect } from 'react';
import './BaseWork.css';
import Footer from '../Footer/Footer.tsx'

interface BaseWorkProps {
  Title: string;
  Text1: string;
  Text2: string;
  Text3: string;
  Image1: string;
  Image2: string;
  Image3: string;
  Image4: string;
  Image5: string;
  Context: string;
  Role: string;
}


const BaseWork: React.FC<BaseWorkProps> = ({ Title, Text1, Text2, Text3, Image1, Image2, Image3, Image4, Image5, Context, Role }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <div className='Back'>
      <a href='/AnaPortfolio/'>
      <img src="arrowtop.svg" className='BackIcon' alt="back" />
      </a>
    </div>
    <div className="BodyTemplate">
      <div className="SmallerSection">
        <img src={Image1} alt="Hero img" id="FirstImageBig" className="ImageBig"/>
        <div className='MainText'>
          <h1>{Title}</h1>
          <div className='MainHolder'>
            <div className="FirstText">
              <p>{Text1}</p>
              <p>{Text2}</p>
              <p>{Text3}</p>
            </div>
            <div className='MainSideHolder'>
              <div className="SecondText">
                <div className="Context">
                  <h2 id="Context">Context:</h2>
                  <p>{Context}</p>
                </div>
                <div className="MyRole">
                  <h2>My Role:</h2>
                  <p>{Role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="TwoImagesTemplate" id="FirstTwoImagesTemplate">
          <img  className="Image1" src={Image2} alt="showcase image 1" />
          <img className="Image2" src={Image3} alt="showcase image 2" />
        </div>

        <div className="TwoImagesTemplate">
          <img  className="Image3" src={Image4} alt="showcase image 3" />
          <img className="Image4" src={Image5} alt="showcase image 4" />
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default BaseWork;