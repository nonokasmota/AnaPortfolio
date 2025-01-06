import { useState } from 'react';
import './PinterestBoard.css';
import { Link } from 'react-router-dom';


function PinterestBoard() {
  const [visibleGD, setVisibleGD] = useState(true); // GD = Graphic Design
  const [visibleUI, setVisibleUI] = useState(true); // UI = UI/UX
  const [visibleIL, setVisibleIL] = useState(true); // IL = Illustration
  const [visiblePH, setVisiblePH] = useState(true); // PH = Photography
  const [visibleALL, setVisibleALL] = useState(true); // ALL = All


  const toggleVisibilityGD = () => setVisibleGD(!visibleGD);
  const toggleVisibilityUI = () => setVisibleUI(!visibleUI);
  const toggleVisibilityIL = () => setVisibleIL(!visibleIL);
  const toggleVisibilityPH = () => setVisiblePH(!visiblePH);
  const toggleVisibilityALL = () => {
    if (!visibleGD || !visibleUI || !visibleIL || !visiblePH || !visibleALL) {
      // Ensure all categories are visible
      setVisibleGD(true);
      setVisibleUI(true);
      setVisibleIL(true);
      setVisiblePH(true);
      setVisibleALL(true);
    } else {
      // Toggle "All" off, hiding everything
      setVisibleGD(false);
      setVisibleUI(false);
      setVisibleIL(false);
      setVisiblePH(false);
      setVisibleALL(false);
    }
  };
  

  return (
      <div className='GlobalPinterestBoard' id='targetSelection'>
        <div className='Buttons'>
            <button onClick={toggleVisibilityGD} className={visibleGD ? 'clicked' : 'unclicked'}>Graphic Design</button>
            <button onClick={toggleVisibilityUI} className={visibleUI ? 'clicked': 'unclicked'}>UI/UX</button>
            <button onClick={toggleVisibilityIL} className={visibleIL ? 'clicked': 'unclicked'}>Illustration</button>
            <button onClick={toggleVisibilityPH} className={visiblePH ? 'clicked': 'unclicked'}>Photography</button>
            <button onClick={toggleVisibilityALL} className={visibleALL ? 'clicked': 'unclicked'}>All</button>
        </div>

        {!visibleUI && !visiblePH && !visibleGD && !visibleIL && (
          <div className='TextPinterestBoard'>
            <p>
              Please select one of the categories above!
            </p>
          </div>
        )}




        <div className="pinterest-board">
          {visibleGD && <div className='boxes'>
            <img src="assets/GD/OpenThumb.png" alt="Open Source folder" />
          </div>}
          {visibleUI && <div className='boxes'>
            <Link to="/AnaPortfolio/Voof">
              <img src="assets/UI/VoofThumb.png" alt="Voof" />
              <div className="tags">
                <p className="tag">&nbsp;Case Study&nbsp;</p>
                <p className="tag">↗</p>
              </div>
            </Link>
          </div>}
          {visibleUI && <div className='boxes'>
            <img src="assets/UI/BridgeThumb.png" alt="Bridge app" />
          </div>}
          {visibleUI && <div className='boxes'>
            <img src="assets/UI/GatherThumb.png" alt="Gather" />
          </div>}
          {visibleGD && <div className='boxes'>
            <Link to="/AnaPortfolio/Conflict">
              <img src="assets/GD/ConflictThumb.png" alt="Comflict of Interests" />
              <div className="tags">
                <p className="tag">↗</p>
              </div>
            </Link>
          </div>}
          {visiblePH && <div className='boxes'>
            <img src="assets/PH/BarcoThumb.png" alt="Boat" />
          </div>}
          {visibleIL && <div className='boxes'>
            <img src="assets/IL/DecayThumb.png" alt="Decay" />
          </div>}
          {visiblePH && <div className='boxes'>
            <img src="assets/PH/VinhaThumb.png" alt="Countryside" />
          </div>}
          {visibleIL && <div className='boxes'>
            <img src="assets/IL/GummiesThumb.png" alt="Gummies" />
          </div>}
          {visibleGD && <div className='boxes'>
            <img src="assets/GD/RewireThumb.png" alt="Rewire" />
          </div>}
          {visibleGD && <div className='boxes'>
            <Link to="/AnaPortfolio/Rupture"> 
              <img src="assets/GD/RuptureThumb.png" alt="Rupture Magazine" />
              <div className="tags">
                <p className="tag">↗</p>
              </div>
            </Link> 
          </div>}
          {visibleGD && (
            <div className='boxes'>
              <Link to="/AnaPortfolio/Antagonico"> 
                <img src="assets/GD/AntagonicoThumb.png" alt="Antagónico" />
                <div className="tags">
                <p className="tag">↗</p>
              </div>
              </Link>
            </div>
          )}
          {visiblePH && <div className='boxes'>
            <img src="assets/PH/LaranjaThumb.png" alt="Orange Sign" />
          </div>}
          {visibleIL && <div className='boxes'>
            <img src="assets/IL/YetiThumb.png" alt="Yeti" />
          </div>}
          {visiblePH && <div className='boxes'>
            <img src="assets/PH/FilipaThumb.png" alt="Girl" />
          </div>}




          {visibleIL && <div className='boxes'>
            <img src="assets/IL/MageThumb.png" alt="Mage" />
          </div>}
          {visibleGD && <div className='boxes'>
            <img src="assets/GD/ErrarThumb.png" alt="Errar é humano" />
          </div>}
          {visibleUI && <div className='boxes'>
            <img src="assets/UI/ViewThumb.png" alt="View Generator" />
          </div>}
          {visiblePH && <div className='boxes'>
            <img src="assets/PH/IcebergThumb.png" alt="Iceberg" />
          </div>}
          {visibleGD && <div className='boxes'>
            <img src="assets/GD/MonofolhaThumb.png" alt="Monofolha" />
          </div>}
          {visibleIL && <div className='boxes'>
            <img src="assets/IL/MontanhaThumb.png" alt="Montanha" />
          </div>}
          {visiblePH && <div className='boxes'>
            <img src="assets/PH/CasaThumb.png" alt="House" />
          </div>}
          {visibleGD && <div className='boxes'>
            <img src="assets/GD/MurderThumb.png" alt="Murder Jam" />
          </div>}
          {visibleIL && <div className='boxes'>
            <img src="assets/IL/OverThumb.png" alt="Over the Garden Wall fanart" />
          </div>}
          {visibleGD && <div className='boxes'>
            <img src="assets/GD/InfographicThumb.png" alt="Infographic" />
          </div>}
          {visiblePH && <div className='boxes'>
            <img src="assets/PH/SinalThumb.png" alt="Road Sign" />
          </div>}
          {visibleUI && <div className='boxes'>
            <img src="assets/UI/AvatarThumb.png" alt="Avatar Generator" />
          </div>}
          {visiblePH && <div className='boxes'>
            <img src="assets/PH/CasaThumb.png" alt="House" />
          </div>}
          {visibleGD && <div className='boxes'>
            <img src="assets/GD/SquaresThumb.png" alt="Squares" />
          </div>}
          {visibleIL && <div className='boxes'>
            <img src="assets/IL/SketchThumb.png" alt="Sketch" />
          </div>}
          {visibleIL && <div className='boxes'>
            <img src="assets/IL/ExplosionThumb.png" alt="Explosion" />
          </div>}
        </div>
      </div>
  );
}

export default PinterestBoard;
