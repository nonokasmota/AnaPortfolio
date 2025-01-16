import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Plus from './Plus/Plus.tsx';
import LandingPage from './LandingPage/LandingPage.tsx';
import PinterestBoard from './PinterestBoard/PinterestBoard.tsx';
import { HashRouter, Routes, Route, useLocation, BrowserRouter } from 'react-router-dom';
import Voof from './Voof/Voof.tsx';
import Ana from './Ana/Ana.tsx';
import BaseWork from './BaseWorks/BaseWork.tsx';
import Footer from './Footer/Footer.tsx';
import NotFound from './NotFound.tsx';

const App = () => {
  const location = useLocation();
  useEffect(() => {
    const buttons = document.querySelectorAll("button");
    
    buttons.forEach((button) => {
        // Handle touch start for mobile devices
  button.addEventListener('touchstart', () => {
    button.style.backgroundColor = '#CFC6D2'; // Change color on press
  });

  // Handle touch end for mobile devices
  button.addEventListener('touchend', () => {
    button.style.backgroundColor = '#F5EDF7'; // Revert to original color
  });

  // Handle mouse down for desktop devices
  button.addEventListener('mousedown', () => {
    button.style.backgroundColor = '#CFC6D2'; // Change color on press
  });

  // Handle mouse up for desktop devices
  button.addEventListener('mouseup', () => {
    button.style.backgroundColor = '#F5EDF7'; // Revert to original color
    });
  });

  }, []);

  return (
    <>
      <div className="content-wrapper">
        {!(location.pathname === '/Ana') && <Plus />}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/PinterestBoard" element={<PinterestBoard />} />
          <Route path="/Voof" element={<Voof />} />
          <Route path="/Ana" element={<Ana />} />
          <Route
            path="/Antagonico"
            element={
              <BaseWork
          Title="Antagónico"
          Text1="Special edition music album and respective website."
          Text2="The album Antagónico (which translates to Antagonistic in English) reflects the spirit of rebellion and societal critique embraced by Portugal's younger generations."
          Text3="This theme of rejecting the status quo serves as the driving force behind both the music and the design of this album."
          Image1="GraphicDesign\Antagonico\Antagonico-0.gif"
          Image2="GraphicDesign\Antagonico\Antagonico-1.png"
          Image3="GraphicDesign\Antagonico\Antagonico-2.png"
          Image4="GraphicDesign\Antagonico\Antagonico-3.png"
          Image5="GraphicDesign\Antagonico\Antagonico-6.png"
          Context="University group project"
          Role="Aside from working within every step of the way, I took up the role of a leader on this project. I was also part of the group in charge of designing the website."
              />
            }
          />
          <Route
            path="/Rupture"
            element={
              <BaseWork
          Title="Rupture Magazine"
          Text1="Small magazine about the usage of grids in graphic design."
          Text2="This magazine explores the use of grids in graphic design by juxtaposing the work of two iconic designers: Josef Müller-Brockmann and Rosmarie Tissi."
          Text3="Their contrasting approaches to grid-based design highlight the diversity and versatility of this foundational technique."
          Image1="GraphicDesign\Rupture\Rupture-4.png"
          Image2="GraphicDesign\Rupture\Rupture-1.png"
          Image3="GraphicDesign\Rupture\Rupture-5.png"
          Image4="GraphicDesign\Rupture\Rupture-3.png"
          Image5="GraphicDesign\Rupture\Rupture-2.png"
          Context="University pair project"
          Role="All of the roles were distributed so that both me and my colleague could be a part of every step. We both did the research for the magazine, designed the item, printed, and sew."
              />
            }
          />
          
          <Route
            path="/Conflict"
            element={
              <BaseWork
          Title="Conflict of Interest"
          Text1="Foldable pamphlet Informative pamphlet about Jan Van Toorn’s ’Design and Reflexivity’ manifesto."
          Text2="This manifesto revolves around designer's conflict of interest between serving the public interest (doing things for the general good) and following private interests of clients and media."
          Text3="This pamphlet serves as a warning about the ethical dilemmas outlined in Jan Van Toorn’s manifesto. It reminds designers of the inherent conflict of interests of their job."
          Image1="GraphicDesign\Conflict\Conflict-1.png"
          Image2="GraphicDesign\Conflict\Conflict-2.png"
          Image3="GraphicDesign\Conflict\Conflict-3.png"
          Image4="GraphicDesign\Conflict\Conflict-4.png"
          Image5="GraphicDesign\Conflict\Conflict-5.png"
          Context="University project"
          Role="This was a solo project. I did all the research, design, and production of the pamphlet by myself."
              />
            }
          />
          <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 */}
        </Routes>
      </div>
      <Footer />
    </>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
