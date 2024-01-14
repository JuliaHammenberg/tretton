import './EmployeeCard.css'
import gitLogo from '../assets/github.png'
import twitterLogo from '../assets/twitter.png'
import linkedinLogo from '../assets/linkedin.png'


export default function EmployeeCard({ employee }) {
    const { name, office, imagePortraitUrl, linkedIn, twitter, gitHub } = employee;

    const twitterUrl = `https://twitter.com/${twitter}`;
    const gitHubUrl = `https://github.com/${gitHub}`;
    const linkedInUrl = `https://linkedin.com/${linkedIn}`;


    return (
        <div className="cardStyle">
            <img
                src={imagePortraitUrl}
                alt={`Portrait of ${name}`}
                className="imageStyle"
            />
            <div className="cardLayout">
                <div className="textItems">
                    <p>{name}</p>
                    <p>Office: {office}</p>
                </div>
                <div className='logoItems'>
                    <a href={linkedInUrl}><img className="logoStyle" src={linkedinLogo} alt="Link to Linkedin" /></a>
                    <a href={gitHubUrl}><img className="logoStyle" src={gitLogo} alt="Link to Github" /></a>
                    <a href={twitterUrl}><img className="logoStyle" src={twitterLogo} alt="Link to twitter" /></a>
                </div>
            </div>
        </div>
    );
};

