import PropTypes from 'prop-types';
import { CiLocationOn, CiDollar } from "react-icons/ci";
import { Link } from 'react-router-dom';


const Jobs = ({ job }) => {
    const { id, job_title, company_name, remote_or_onsite, job_type, location, salary } = job;
    return (
        <div className="card w-96 bg-base-100 shadow-xl text-left">
            <div className="card-body">
                <h2 className="card-title">{job_title}</h2>
                <p>{company_name}</p>
                <div className="flex gap-1"> <div className='border rounded text-purple-500 p-2  border-purple-500 text-center'>
                    {remote_or_onsite}
                </div>
                    <div className='border rounded text-purple-500 p-2  border-purple-500 text-center'>
                        {job_type}
                    </div></div>

                <div className='flex gap-4'>
                    <div className='flex items-center gap-1'>
                        <CiLocationOn></CiLocationOn>
                        <span>{location}</span>
                    </div>
                    <div className='flex items-center gap-1'>
                        <CiDollar></CiDollar>
                        <span>{salary}</span>
                    </div>
                </div>

                <div className="card-actions justify-start">
                    <Link to={`/job/${id}`}>
                        <button className="btn btn-primary">View details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

Jobs.propTypes = {
    job: PropTypes.object.isRequired
}

export default Jobs;