import './Voof.css';

import { useState, useEffect } from 'react';

function Voof() {
  const [isVisibleResearch, setIsVisibleResearch] = useState(true);
  const [isVisibleDesign, setIsVisibleDesign] = useState(true);
  const [isVisibleFinalProject, setIsVisibleFinalProject] = useState(true);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleResearch = () => {
    setIsVisibleResearch(!isVisibleResearch);
  }
  const toggleDesign = () => {
    setIsVisibleDesign(!isVisibleDesign);
  }
  const toggleFinalProject = () => {
    setIsVisibleFinalProject(!isVisibleFinalProject);
    
  }
  
  
  return (
    <>
    <div className='Back'>
      <a href='/AnaPortfolio/'>
      <img src="arrowtop.svg" className='BackIcon' alt="" />
      </a>
    </div>

    <div className="BodyVoof">
      <div className="SmallerSection">
        <img src="Voof/Image1.png" alt="Voof" id="FirstImageBig" className="ImageBig"/>
        <div className='MainText'>
          <h1>Voof</h1>
          <div className='MainHolder'>
            <div className="FirstText">
              <p>
              Currently, anxiety and stress have become prevalent issues affecting people of all ages. In education and job search the pressure that everyone is put under, especially teenagers and young adults, by an increasingly competitive and demanding society, leads to an increase in the demand for help and support regarding mental health.
              </p>
              <p>The social expectation of making new friendships, climbing the ladder in life, dealing with financial problems among others, are just some of the stresses in a sea full of uncertainties. Due to that, there is a need to create strategies and support systems to promote the mental well-being of the population.
              </p>
              <p>Because of this we decided to address issues related to well-being and mental health and create an innovative psychological support tool. And Voof was created.
              </p>
            </div>
            <div className='MainSideHolder'>
              <div className="SecondText">
                <div className="Context">
                  <h2 id="Context">Context:</h2>
                  <p>University group project</p>
                </div>
                <div className="MyRole">
                  <h2>My Role:</h2>
                  <p>
                  Aside from working every step of the way, I took up the role of a leader on this project, assigning roles, making sure they’re done in time, and helping them if they’re not.</p>
                </div>
              </div>
            </div>
            </div>
        </div>
      
        <div className="TwoImagesVoof">
          <img  className="Image1" src="Voof/Image2.png" alt="" />
          <img className="Image2" src="Voof/Image3.png" alt="" />
        </div>
      </div>

      <div className='BiggerSection'>
        <div onClick={toggleResearch} className={`Hide ${isVisibleResearch ? '' : 'Rotated'}`}><img src="openclose.svg" alt=""/></div>
        
        <div className="SmallerSection">
          <h1>Research</h1>
          {isVisibleResearch && (
          <div className="MainResearch">
            <div className="ResearchText">
              <h2>General Research:</h2>
              <p>We researched scientific papers on the subject of stress, what causes stress and what are the known ways to reduce it. From this research we took away that Controlled breathing is a great way to deactivate the sypmathetic nervous system, which is activated with stress. Along with Physical exercise, good nutrition, good sleep and venting to a friend.</p>
            </div>
            <div className="ResearchText">
              <h2>Benchmarking Research:</h2>
              <p>We researched what was already out there working to help reduce stress. We did overall research with all projects we could find, listed out what was working and didn’t work with each, short descriptions and what stood out from each approach.</p>
            </div>

            <img src="Voof/Image4.png" alt="" className="ImageBig"/>
            <img src="Voof/Image5.png" alt="" className="ImageBig"/>
          

            <div className="ResearchText">
              <h2>User Research:</h2>
              We conducted interviews and analysed the data to characterize our target audience.
            </div>
            <img src="Voof/Image6.png" alt="" className="ImageBig"/>
          

            <div className="ResearchText">
              <h2>Pain Points:</h2>
              <p>
              People don’t have the time to use the product, they forget to use it when needed or even that they feel as though the product is too “digital” and not “real”, “humane” enough.
              </p>      
              <h2>Personas:</h2>
            </div>
            <img src="Voof/Image9.png" alt="" className="ImageBig"/>
            <div className='ResearchText'>
              <h2>User Journeys:</h2>
            </div>
            <img src="Voof/Image8.png" alt="" className="ImageBig"/>
          </div>
          )}
        </div>
      </div>

      <div className='BiggerSection'>
      
        <div onClick={toggleDesign} className={`Hide ${isVisibleDesign ? '' : 'Rotated'}`}><img src="openclose.svg" alt=""/></div>
        <div className="SmallerSection">
          <h1>Design</h1>
          {isVisibleDesign && (
            <div className="Design">
              <h2>Interaction Flow:</h2>
              <img src="Voof/Image10.png" alt="" className="ImageBig" />
              <h2>Voof Wireframes:</h2>
              <img src="Voof/Image11.png" alt="" className="ImageBig" />
              <h2>App Wireframes:</h2>
              <img src="Voof/Image12.png" alt="" className="ImageBig" />

              <div className='MainText'>
                <h2> Components:</h2>
                <div className="MainHolder">
                  <div className="Components">
                    <h3>Voof:</h3>
                    <div className="Voof">
                      <p>
                      Voof’s skin is made out of e-ink fabric (allowing to
                      display expressions);
                      </p>
                      <p>
                      Microphone;
                      </p>
                      <p>
                      Touch sensor (to check when it’s being touched);
                      </p>
                      <p>
                      Supports Wireless Charging;
                      Air pumper (to mimic breathing);
                      </p>
                      <p>
                      Vibration mechanism (to mimic heartbeat);
                      </p>
                      <p>
                      Heater (to mimic the temperature of a living being).
                      </p>
                    </div>
                  </div>
                  <div className="MyRole">
                    <h3>Bracelet:</h3>
                      <p>cEDA (continuous ElectroDermal Activity) sensor
                      which helps identify when your body is experiencing
                      signs of stress;
                      Tracks HRV (Heart Rate Variation) which tracks the
                      time between your heartbeats;
                      A downward trend over multiple nights could
                      potentially be a result of overtraining, lack of sleep,
                      stress and more;
                      Skin Temperature Sensor which helps understand
                      changes in your wellness;
                      Heart Rate Tracker which helps measure your stress
                      levels;
                      USB-C charger port.</p>
                    <h3>Charging station:</h3>
                      <p>USB-C charger port;
                      Wireless charger.</p>
                  </div>
                </div>
              </div>
              <img src="Voof/Image13.png" alt="" className="ImageBig" />
              <img src="Voof/Image14.png" alt="" className="ImageBig" />
              <img src="Voof/Image15.png" alt="" className="ImageBig" />
              <div className='UserTestingText'>
                <h2>User Testing:</h2>
                <p>Due to the hypothetical nature of this project and the fact that it is not actively being
                produced, there is no feasible way for us to implement user testing. Because of that,
                we will only be explaining how and what we would do if the project were actually being
                produced.
                To begin with, we’d distribute our product (the Voof and the bracelet) to 15 people whom
                we assessed to belong to similar archetypes as those of our personas (and inherently, our
                main target groups). Before they use the product, they’d be asked to rate their stress levels
                through a series of questions that aim to make the latter responses as objective as
                possible (by comparing to previously established high-stress scenarios and by allowing
                each person to categorize what they prioritize the most in life, as those are the things that
                will probably cause the biggest amounts of stress).
                The testing process would thus begin and occur throughout the span of 3 months.
                Every day during the testing period, at the end of the day, the tester would be prompted to
                assess themselves on their stress levels, on how accurately Voof reacted and documented
                the data, on how useful Voof was, how often the user interacted with the product (app or
                Voof itself), and lastly, they’d have a space to leave some notes and improvements. Aside
                from the notes and improvements, this assessment would comprise 4 questions, with a 0
                to 5 rating.
                After the testing period, the users would then be asked to fill the Geneva Emotional Wheel
                according to the emotions they associate with Voof.
                This way, we’d have all of the information needed to understand whether the product is
                working as intended, if the user is interacting with Voof in the expected way, and what
                needs fixing or rethinking.
                </p>
              </div>
              <h2>Style Guide</h2>
              <img src="Voof/Image16.png" alt="" className="ImageBig" />
              <img src="Voof/Image17.png" alt="" className="ImageBig" />
              <img src="Voof/Image18.png" alt="" className="ImageBig" />
              <img src="Voof/Image19.png" alt="" className="ImageBig" />
              <img src="Voof/Image20.png" alt="" className="ImageBig" />
              <img src="Voof/Image21.png" alt="" className="ImageBig" />
              <img src="Voof/Image22.png" alt="" className="ImageBig" />
              <img src="Voof/Image23.png" alt="" className="ImageBig" />
            </div>
          )}
        </div>  
      </div>

      <div className='BiggerSection'>
        <div onClick={toggleFinalProject} className={`Hide ${isVisibleFinalProject ? '' : 'Rotated'}`}><img src="openclose.svg" alt=""/></div>
        <div className="SmallerSection">
          <h1>Final Project</h1>
          {isVisibleFinalProject && (
            <div className="FinalProject">
              <h3>Voof UI:</h3>
              <img src="Voof/Image24.png" alt="" className="ImageBig" />
              <h3>App UI:</h3>
              <img src="Voof/Image25.png" alt="" className="ImageBig" />
              <div className='WhatText'>
                <h3>What I learned</h3>
                <div>
                  <p>This was my first experience with an interaction design project, and it gave me valuable insight into the process of creating and designing a product with a specific audience in mind. I learned how to benchmark against competitors and work toward finding the best solution for a given problem. Additionally, this was my first time participating in a long-term team project with such an extensive scope. As a result, I improved my time management skills and, having taken on a leadership role, learned to better assess which tasks are best suited to each team member and how to effectively manage a team overall.</p>
                </div>
                <h3>Find more here:</h3>
                <div className='moreproject'>
                  <a href="https://www.notion.so/joaoferreiradesign/Group-A6-4ef0e8dc95184d88b9ac60744cd8e71c" >Notion</a>
                  <a href="https://www.figma.com/design/xVtymFoqCdutPdkskC0Nzl/VOOF-(Copy)?node-id=333-2&t=o9ucFExJZ3mbAAa7-1" >Figma file</a>
                  <a href="https://drive.google.com/file/d/1h6tf3BIqtLxaCUx-13Pw8AOUQtXQcLMP/view" >Design file</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

    </>
  );
}

export default Voof;