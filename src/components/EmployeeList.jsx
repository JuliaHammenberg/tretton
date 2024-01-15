import gitLogo from '../assets/github.png'
import twitterLogo from '../assets/twitter.png'
import linkedinLogo from '../assets/linkedin.png'
import './EmployeeList.css'

export default function EmployeeList({ employeeList }) {

    return (
        <table className='employee-list'>
            <tbody >
                <tr className='table-header'>
                    <th >Employee</th>
                    <th>Office</th>
                    <th>Social Networks</th>
                </tr>
                {employeeList.map((employee) => (
                    <tr key={employee.name} className='row' datate>
                        <td className='first-cell'>{employee.name}</td>
                        <td className='cell'>{employee.office}</td>
                        <td className='cell'>
                            <a href={`https://linkedin.com/${employee.linkedIn}`}><img className="list-logo-style" src={linkedinLogo} alt="Link to Linkedin" /></a>
                            <a href={`https://github.com/${employee.gitHub}`}><img className="list-logo-style" src={gitLogo} alt="Link to Git" /></a>
                            <a href={`https://twitter.com/${employee.twitter}`}><img className="list-logo-style" src={twitterLogo} alt="Link to Twitter" /></a>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>

    );
};