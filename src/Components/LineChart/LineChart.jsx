import { BarChart, Bar, XAxis, YAxis } from 'recharts';


const LineChart = () => {

    const membershipData = [
        { month: 'January', newMembers: 45 },
        { month: 'February', newMembers: 50 },
        { month: 'March', newMembers: 55 },
        { month: 'April', newMembers: 60 },
        { month: 'May', newMembers: 70 },
        { month: 'June', newMembers: 80 },
        { month: 'July', newMembers: 90 },
        { month: 'August', newMembers: 85 },
        { month: 'September', newMembers: 75 },
        { month: 'October', newMembers: 95 }
    ];
    


    return (
        <div className='md:flex justify-center gap-12 my-16'>
            <div>
            <BarChart width={600} height={400} data={membershipData}>
                <XAxis dataKey={"month"}></XAxis>
                <YAxis dataKey={""}></YAxis>
            <Bar dataKey="newMembers"  fill="#8884d8">
            </Bar>
            </BarChart>
            </div>
            <div className='flex items-center justify-center'>
                <div className='space-y-6'>
                <h3 className='text-5xl font-bold text-white'>Our Members In This Year</h3>
                <p className=''>This year, our gym community has grown tremendously, welcoming new members each month. Starting with 45 in January and reaching 95 in October, our membership steadily increased, reflecting the dedication and enthusiasm of our members. We are thrilled to see so many people committed to their fitness journeys and proud to provide a supportive and motivating environment for everyone.</p>
            </div>
                </div>
        </div>
    );
};

export default LineChart;