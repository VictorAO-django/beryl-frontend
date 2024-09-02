import React, { useState, useEffect } from 'react';

const hasSpecialCharacter = (password) => {
    const specialCharRegex = /[!@#$%^&*()_+\-\[\]{};':"\\|,.<>\/?]/
    return specialCharRegex.test(password)
}

const isStrongPassword = (password) =>{
    const pattern = /(?=.*\d)(?=.*[A-Z])\w{8,}/;
    return pattern.test(password)
}

export const pwdMatch = (password1, password2) =>{
    return (password1.strip() == password2.strip())
}

export const checkPasswordStrength = (password) =>{
    if (hasSpecialCharacter(password)){
        if(isStrongPassword(password)){
            return "strong"
        }
        return "medium"
    }
    return "weak"
}

export const Slider = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
        },3000);

        
        return () => clearInterval(slideInterval);
    }, [currentIndex, slides.length]);

    return (
        <div className="w-full h-full flex flex-col xs:flex-row justify-start items-center p-4" style={{backgroundColor: slides[currentIndex].bg_color}}>
            <div className="w-full max-w-lg mx-auto">
                <div className="p-4">
                    <h2 className="text-lg xs:text-2xl font-montserrat-medium xs:font-montserrat-semi text-white">
                        {slides[currentIndex].title}
                    </h2>
                    <p className="text-md text-white font-montserrat-regular my-1  xs:my-4">
                        {slides[currentIndex].content}
                    </p>
                </div>
                <div className='flex justify-center mt-0 xs:mt-4 space-x-2'>
                {slides.map((_, index) => {
                    const circleClass = index === currentIndex ? "w-3 h-3 rounded-full border-2 bg-white" : "w-3 h-3 rounded-full border-2 border-white bg-transparent"
                    return(
                        <div 
                        key={index}
                        className={circleClass}
                        ></div>
                    )
                })}
                </div>
                
            </div>

            <div className="hidden xs:flex mt-2 grow">
                <div className="relative w-[180px] h-[150px] xs:w-[200px] md:w-[280px] md:h-[280px] lg:w-[300px] lg:h-[300px] rounded-lg overflow-hidden">
                    <img 
                    src={slides[currentIndex].image}
                    alt={slides[currentIndex].alt}
                    className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    )

}