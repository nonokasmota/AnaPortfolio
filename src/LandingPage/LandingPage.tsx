import { useRef } from "react";
import './Landing.css';
import DraggableImage from './DragabbleImage';
import PinterestBoard from '../PinterestBoard/PinterestBoard';
import Footer from "../Footer/Footer";




function LandingPage() {
  const ref = useRef(null);
  const scrollToComponent = (ref: any) => {
    window.scrollTo({
      top: ref.current.offsetTop + 35, 
      behavior: "smooth"
    });
  };

  return (
    <>
      <DraggableImage />
      <div className='LandingDiv'>
        <h1 className='TitleLanding'>Ana Mota</h1>
        <button onClick={() => scrollToComponent(ref)} id='scrollButton'>my work ↘</button>
      </div>
      <div ref={ref}>
        <PinterestBoard />
      </div>
    </>
  );
}

export default LandingPage;