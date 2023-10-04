import bgImg from '../../../assets/home/chef-service.jpg'

const AboutSection = () => {
    return (
        <div 
        className='pt-32 my-20'
        style={{
            backgroundImage:`url(${bgImg})`,
            backgroundPosition:'center',
            backgroundSize:'cover',
            height:'80vh'
        }}
        >
         <div className='bg-white text-center w-3/5 mx-auto py-16 px-20'>
            <h2 className='uppercase text-3xl mb-2'>Bistro Boss</h2>  
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorum fugiat aliquam quasi debitis, voluptates accusantium ad pariatur quis commodi enim voluptate. Placeat amet, nisi alias maxime pariatur dicta eveniet.</p>  
        </div>   
        </div>
    );
};

export default AboutSection;