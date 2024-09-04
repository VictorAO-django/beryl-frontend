function Footer(){
    return(
        <footer className="bg-footer1 flex flex-col items-center">
            <div className="flex flex-col lg:flex-row items-center justify-between w-full px-5 xs:px-10 lg:px-20 py-10 ">
                <div className="text-white grow py-3 lg:py-0">
                    <p className="font-montserrat-medium text-center lg:text-start text-xl">
                        Subscribe!
                    </p>
                    <p className="text-center lg:text-start">
                        To keep in  touch with updates concerning new stock, black friday and lot more.
                    </p>
                </div>
                <div className="relative w-full lg:w-auto lg:grow">
                    <input 
                    placeholder="Email address" 
                    type="email"
                    className="p-3 w-full font-montserrat-regular focus:outline-none focus:ring-1 focus:ring-main-color rounded-lg"
                     />
                    <button className="font-montserrat-regular rounded-md m-auto px-3 bg-main-color h-[80%] absolute inset-y-0 flex items-center right-4">
                        SUBSCRIBE
                    </button>
                </div>
            </div>

            <div className="w-full px-5 xs:px-10 lg:px-20 bg-footer2 py-10">
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 justify-between items-center w-full font-montserrat-regular text-[13px] text-white">
                    <div className="flex space-x-4 md:space-x-0 md:flex-col justify-around items-center md:space-y-2">
                        <p>About Us</p>
                        <p>Feedback</p>
                        <p>Community</p>
                    </div>
                    <div className="flex space-x-4 md:space-x-0 md:flex-col justify-around items-center md:space-y-2">
                        <p>Trust, Safety & Security</p>
                        <p>Help & Support</p>
                        <p>Beryl Foundation</p>
                    </div>
                    <div className="flex space-x-4 md:space-x-0 md:flex-col justify-around items-center md:space-y-2">
                        <p>Term of service</p>
                        <p>Privacy Policy</p>
                        <p>Cookie Setting</p>
                    </div>
                    <div className="flex space-x-4 md:space-x-0 md:flex-col justify-around items-center md:space-y-2">
                        <p>Accessibility</p>
                        <p>Report a Product</p>
                        <p>Cookie Policy</p>
                    </div>

                </div>
                <p className="font-montserrat-regular text-[13px] tracking-wide text-center p-1 mt-10 border-b text-white">
                    © All Right Reserved 2024 Beryl Store
                </p>
            </div>
        </footer>
    )
};

export default Footer;