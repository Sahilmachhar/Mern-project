import './home.css'

export const Home = () => {

    return(
        <>

            <div className="home-container grid grid-two-cols">
                <div className="content-area">
                    <p>We are happy to see you around here.</p>

                    <h2>Welcome to Sahil technical</h2>

                    <p>
                        In fermentum sollicitudin ante, sit amet eleifend purus dictum sed. Suspendisse malesuada orci non quam accumsan, sed fermentum erat facilisis. Sed quis erat scelerisque, efficitur ante ac, venenatis ex. Integer semper, augue nec sollicitudin dictum, nunc urna scelerisque libero, in hendrerit turpis eros sed ligula. Vivamus a diam non ligula aliquam
                    </p>

                    <div className='for-btn'>
                        <a href='/contact'>
                            <button className='btn'>Connect now</button>
                        </a>
                        <a href='/services'>
                            <button className='btn secondary'>Learn more</button>
                        </a>
                    </div>
                </div>

                <div className='home-image'>
                    <img 
                        src='/images/final login.png' 
                        alt='image about home page' 
                        height={400}
                        width={400}    
                    />
                </div>

            </div>
        </>
    ); 
};