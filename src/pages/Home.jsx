import Profile_temp from "../components/template/Home/Profile_temp";
import Leaderborard from "../components/template/Home/Leaderborard";

const Home = () => {
    return (
        <div className="min-h-screen bg-[#041218] p-5">
            <Profile_temp />

            <Leaderborard />
        </div>
    );
};

export default Home;