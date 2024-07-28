import './services.css'
import { useAuth } from '../store/auth';

export const Services = () => {

    const {services} = useAuth();
    console.log("here are the services", services);
    return(
        
        <div className='main-container'>

            <div className='title-services'>
                <h1>Services</h1>
            </div>

            <div className="container-services grid grid-three-cols">

                {services.map((currElem, index) => {
                        
                const { provider, price, description, service} = currElem;

                return(
                    
                    <div className="card" key={index}>
                        <div className="card-image">
                            <img 
                                src="/images/login image.png" 
                                alt="image about services card"
                                width={300}
                                height={300}
                                />
                        </div>

                        <div className='card-deatils'>
                            <div className='grid grid-two-cols'>
                                <p>{provider}</p>
                                <p>{price}</p>
                            </div>
                            <h2>{service}</h2>
                            <p>{description}</p>
                        </div>
                    </div>
                );

                })}
                
            </div>
        </div>
    );
};