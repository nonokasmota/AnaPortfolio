import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Plus from './Plus/Plus.tsx';
import LandingPage from './LandingPage/LandingPage.tsx';
import PinterestBoard from './PinterestBoard/PinterestBoard.tsx';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Voof from './Voof/Voof.tsx';
import Ana from './Ana/Ana.tsx';
import BaseWork from './BaseWorks/BaseWork.tsx';

const App = () => {
  const location = useLocation();

  return (
    <div className="content-wrapper">
      {!(location.pathname === '/AnaPortfolio/Ana') && <Plus />}
      <Routes>
        <Route path="/AnaPortfolio/" element={<LandingPage />} />
        <Route path="/AnaPortfolio/PinterestBoard" element={<PinterestBoard />} />
        <Route path="/AnaPortfolio/Voof" element={<Voof />} />
        <Route path="/AnaPortfolio/Ana" element={<Ana />} />
        <Route
          path="/AnaPortfolio/Antagonico"
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
          path="/AnaPortfolio/Rupture"
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
          path="/AnaPortfolio/Conflict"
          element={
            <BaseWork
              Title="Conflict of interest"
              Text1="Small magazine about the usage of grids in graphic design."
              Text2="This magazine explores the use of grids in graphic design by juxtaposing the work of two iconic designers: Josef Müller-Brockmann and Rosmarie Tissi."
              Text3="Their contrasting approaches to grid-based design highlight the diversity and versatility of this foundational technique."
              Image1="GraphicDesign\Conflict\Conflict-1.png"
              Image2="GraphicDesign\Conflict\Conflict-2.png"
              Image3="GraphicDesign\Conflict\Conflict-3.png"
              Image4="GraphicDesign\Conflict\Conflict-4.png"
              Image5="GraphicDesign\Conflict\Conflict-5.png"
              Context="University pair project"
              Role="All of the roles were distributed so that both me and my colleague could be a part of every step. We both did the research for the magazine, designed the item, printed, and sew."
            />
          }
        />
      </Routes>
    </div>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
