import resume from "../assets/resume.png"

function Contact(props) {

    
    return (
        <div class="contact-div">
            <h1>Contact Information</h1>
            <h4>My email is: avswank@gmail.com</h4>
            <h4><a href="https://www.linkedin.com/in/ashley-swank-019509213/">My Linkedin can be found here</a></h4>
            <img class="resume" src={resume} alt="resume" />
            
        </div>
    );
}
  export default Contact;