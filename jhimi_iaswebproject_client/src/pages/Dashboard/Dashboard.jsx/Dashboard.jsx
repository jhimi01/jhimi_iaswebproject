import Lottie from 'lottie-react';
import celebration from '../../../../public/celebration.json'

const Dashboard = () => {
    return (
        <div className="flex items-center flex-col">
            <div>
        <Lottie loop={false} animationData={celebration}  />
        </div>
            <h1 className="text-4xl font-semibold text-slate-800 capitalize">Wllcome to admin dashboard</h1>
            <p className="text-xl text-gray-400 capitalize mt-2">here you can see all information of this website</p>
        </div>
    );
};

export default Dashboard;