import { useState } from 'react';
import './UserForm.scss'

const UserForm = () => {
    const [company, setCompany] = useState('');
    const [position, setPosition] = useState('');
    const [status, setStatus] = useState('');
    const [deadline, setDeadline] = useState('');
    const [recruiterFollowUp, setRecruiterFollowUp] = useState('');
    const [jobDescription, setJobDescription] = useState('');

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log({
            company,
            position,
            status,
            deadline,
            recruiterFollowUp,
            jobDescription,
        });
        // Clear Form after Submission
        setCompany('');
        setPosition('');
        setStatus('');
        setDeadline('');
        setRecruiterFollowUp('');
        setJobDescription('');
        try {
            const response = await fetch('http://localhost:3000/', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                company,
                position,
                status,
                deadline,
                recruiterFollowUp,
                jobDescription,
              }),
            });
      
            if (response.ok) {
              // Handle success, e.g., show a success message or redirect
              console.log('Data submitted successfully!');
            } else {
              // Handle errors, e.g., show an error message
              console.error('Error submitting data:', response.status, response.statusText);
            }
          } catch (error: any) {
            console.error('Error:', error.message);
          }
    };

    return (
        <div className='userForm'>
        <form onSubmit={handleSubmit}>
            <label>
                Company:
                <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
            </label>
            <br />

            <label>
                Position:
                <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
            </label>
            <br />

            <label>
                Status:
                <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
            </label>
            <br />

            <label>
                Deadline:
                <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
            </label>
            <br />

            <label>
                Recruiter Follow Up:
                <input
                    type="date"
                    value={recruiterFollowUp}
                    onChange={(e) => setRecruiterFollowUp(e.target.value)}
                />
            </label>
            <br />

            <label>
                Job Description:
                <input
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                />
            </label>
            <br />

            <button type="submit">Submit</button>
        </form>
        </div>
    );
};

export default UserForm;
