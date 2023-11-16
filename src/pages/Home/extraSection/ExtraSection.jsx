import banner from '../../../assets/home/chef-service.jpg'

const ExtraSection = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-content w-3/4 py-10 text-center text-neutral-content">
                <div className=" w-3/4 py-14 px-8 bg-white text-black">
                    <h1 className="mb-5 text-5xl font-bold">Bistro Boss</h1>
                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                    
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;