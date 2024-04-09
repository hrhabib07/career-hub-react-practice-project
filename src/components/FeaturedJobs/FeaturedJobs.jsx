import { useEffect, useState } from "react";
import Jobs from "../Jobs/Jobs";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [showAllData, setShowAllData] = useState(4);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div className='text-center my-12'>
            <h2 className='text-5xl font-bold'>Featured Jobs {jobs.length}</h2>
            <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    jobs.slice(0, showAllData).map(job => <Jobs key={job.id} job={job}></Jobs>)
                }
            </div>
            <div className={showAllData === jobs.length ? "hidden" : "my-8"}>
                <button onClick={() => { setShowAllData(jobs.length) }} className="btn btn-primary">Show All</button>
            </div>

        </div>
    );
};

export default FeaturedJobs;