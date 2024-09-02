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

    const bgColor = slides[currentIndex].bgColor
    const containerStyle = "w-full h-full flex justify-start items-center" + bgColor

    return (
        <div className={"w-full h-full flex justify-start items-center p-4 bg-slider1"}>
            <div className="w-full max-w-lg mx-auto">
                <div className="p-4">
                    <h2 className="text-2xl font-montserrat-semi text-white">
                        {slides[currentIndex].title}
                    </h2>
                    <p className="text-lg text-white font-montserrat-regular my-4">
                        {slides[currentIndex].content} {bgColor}
                    </p>
                </div>
                <div className='flex justify-center mt-4 space-x-2'>
                {slides.map((_, index) => {
                    const Active = index === currentIndex
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

            <div className="mt-2 grow">
                <div className="relative w-[300px] h-[300px] rounded-lg overflow-hidden">
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