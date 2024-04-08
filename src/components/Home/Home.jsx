import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";
import JobCategoryList from "../JobCategoryList/JobCategoryList";
import TopBanner from "../TopBanner/TopBanner";


const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <JobCategoryList></JobCategoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;