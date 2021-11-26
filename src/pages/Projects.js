import lampshade from "../assets/lampshade.png"
import meditrack from "../assets/meditrack.png"
import whatISthat from "../assets/whatISthat.png"
import clock from "../assets/clock.png"
import drumkit from "../assets/drumkit.png"


function Projects(props) {

    
    return (
        <div class="projects-background">
            <h1 class="projects-h1">A few of my projects and builds</h1>
                <div class="projects-div">
                    <div class="projects-card">
                        <a href="https://l2qee.csb.app/"><img class="thumbnail" src={lampshade} alt="lampshade" /></a>
                        <a href="https://codesandbox.io/s/final-project-forked-l2qee">The code</a>
                    </div>
                    <div class="projects-card">
                        <a href="https://meditrack-app.herokuapp.com/"><img class="thumbnail" src={meditrack} alt="meditrack" /></a>
                        <a href="https://github.com/alengysia/meditrack">The code</a>
                    </div>
                    <div class="projects-card">
                        <a href="https://quizzical-jepsen-f43607.netlify.app/"><img class="thumbnail" src={whatISthat} alt="meditrack" /></a>
                        <a href="https://github.com/alengysia/what-is-that-frontend">The code</a>
                    </div>
                    <div class="projects-card">
                        <a href="https://gk3q4.csb.app/"><img class="thumbnail" src={clock} alt="meditrack" /></a>
                        <a href="https://codesandbox.io/s/wonderful-orla-gk3q4">The code</a>
                    </div>
                    <div class="projects-card">
                        <a href="https://reverent-engelbart-e9df11.netlify.app/"><img class="thumbnail" src={drumkit} alt="meditrack" /></a>
                        <a href="https://codesandbox.io/s/wonderful-orla-gk3q4">The code</a>
                    </div>
            </div>
        </div>
    );
}
  export default Projects;