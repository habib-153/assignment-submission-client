
import Img from './banner.webp'
import './../../Layout/Root.css'
const Banner = () => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 mt-8  items-center gap-4'>
            <div className='p-4 space-y-3'>
                <h2 className='text-center text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#37c44e] to-violet-500'>Online <br /> Group-Study</h2>
                <p  className='text_color text-[15px]'>
                Online group-study is a way of learning with other students from all over the world, using the power of technology and the internet. You can join or create study groups, chat with other students, share your screens or cameras, set study goals, and track your progress. You can also access tutor help, mindfulness sessions, community events, and gamification features
                </p>

            </div>
            <div>
                <img className='md:rounded-3xl w-full object-cover' src={Img} alt="banner Img" />
            </div>
        </div>
    );
};

export default Banner;