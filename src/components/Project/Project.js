import { Container } from "./styles";
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                {/* <a href=" " target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a> */}
                <a href="https://apps.apple.com/in/app/catzapp-recruiter/id6453476011" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>CatzApp Recruiter Mobile Application</h3>
              <p> It is basically for Recruiters for posting the jobs and find the candidate near by. </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Native</li>
                <li>Redux</li>
                <li>Firebase</li>
                <li>Push Notification</li>
                <li>Real time Chat</li>
                <li>Deep Linking</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                {/* <a href=" " target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a> */}
                <a href="https://apps.apple.com/lc/app/catzapp-job/id6453023024" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>CatzApp Job Mobile Application</h3>
              <p>
                It is basically for job seekers for find the jobs according their skills and apply the jobs.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Native</li>
                <li>Redux</li>
                <li>Firebase</li>
                <li>Push Notification</li>
                <li>Real time Chat</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                {/* <a href=" " target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a> */}
                <a href="https://play.google.com/store/apps/details?id=com.zipaworld.app&pcampaignid=web_share" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Zipa World</h3>
              <p>
                An E-Logistics web and mobile app based on react native and react js.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Native</li>
                <li>Redux</li>
                <li>React JS</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                {/* <a href=" " target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a> */}
                <a href="https://play.google.com/store/apps/details?id=com.adama.sevatool.plus&pcampaignid=web_share" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>ADAMA India Seva Tool</h3>
              <p>This application is developed for the internal employees of ADAMA India.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Native</li>
                <li>Redux</li>
                <li>React Native Elements</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                {/* <a href=" " target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a> */}
                <a href="https://play.google.com/store/apps/details?id=com.app.Canteeny&pcampaignid=web_share" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Canteeny : First Meal Catering Management App</h3>
              <p>Canteeny helps students, teachers, and parents to schedule meal plans that will be delivered right into their schools. Canteeny allows you to browse all healthy meal plans that were prepared by dietician.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Native</li>
                <li>Redux</li>
                <li>Firebase</li>
                <li>Push Notification</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                {/* <a href=" " target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> */}
              </div>
            </header>
            <div className="body">
              <h3>Clinic B2B Application</h3>
              <p>
                Clinic B2B is basically for business to business for order the items in bulk amount.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React</li>
                <li>Typescript</li>
                <li>Html</li>
                <li>css</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                {/* <a href=" " target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a> */}
                <a href="https://apps.apple.com/in/app/dieu-cars/id6639599844" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Dieu Cars</h3>
              <p>This application is developed for the user for selling or buying number plate.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Native</li>
                <li>Redux</li>
                <li>Push Notification</li>
                <li>Firebase</li>
                <li>Real time Chat</li>
                <li>Deep Linking</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                {/* <a href=" " target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a> */}
                {/* <a href="" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> */}
              </div>
            </header>
            <div className="body">
              <h3>Cric Star</h3>
              <p>CricStar is a cricket-related platform that provides live scores, match updates. It keeps cricket enthusiasts informed about ongoing matches, player statistics, and upcoming fixtures. The platform may also offer fantasy cricket insights and expert predictions.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React Native</li>
                <li>Redux</li>
                <li>Push Notification</li>
                <li>Firebase</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
      </div>
    </Container>
  );
}

export default Project