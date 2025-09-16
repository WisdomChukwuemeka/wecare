import Image from "next/image"

export const Homepage = () => {
    return(
        <>
            <div>
                {/* hero section a */}
                <section>
                    <div className="bg-red-800">
                        {/* image section */}
                        <div className="aspect-4/3 xl:aspect-4/2 w-full bg-cover bg-center 
                        bg-no-repeat relative flex justify-center items-center"
                        style={{
                        backgroundImage: "url(/heroimage.png)"
                        }}>
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                            <div className="absolute ">
                            <div className="text-white text-center">
                                <h1 className="h1-text text-green-300">Health is Wealth</h1>
                                <p className="text-[0.8rem] md:text-[1.8rem] xl:text-[2rem] max-w-4xl md:max-w-3xl xl:max-4-7xl mx-auto px-8">We have professional doctors from all over the world ready to save a life</p>
                                <button className="btn mt-2 text">
                                    Get Started
                                </button>
                            </div>
                        </div>
                        </div>
                        {/* image section ends here */}

                        
                    </div>
                </section>
                {/* hero section ends here */}
            </div>
        </>
    )
}