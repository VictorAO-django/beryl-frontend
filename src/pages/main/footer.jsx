function Footer(){
    return(
        <footer className="bg-footer1 p-10 flex flex-col">
            <div className="flex items-center justify-between">
                <div>
                    <p className="">
                        Subscribe!
                    </p>
                    <p>
                        To keep in  touch with updates concerning new stock, black friday and lor more
                    </p>
                </div>
                <div>
                    <input 
                    placeholder="Email address" 
                    type="email"
                    className=""
                     />
                    <button className="font-montserrat-regular">
                        SUBSCRIBE
                    </button>
                </div>
            </div>

            <div>
                <div>
                    <p>About Us</p>
                    <p>Feedback</p>
                    <p>Community</p>
                </div>
                <div>
                    <p>Trust, Safety & Security</p>
                    <p>Help & Support</p>
                    <p>Beryl Foundation</p>
                </div>
                <div>
                    <p>Term of service</p>
                    <p>Privacy Policy</p>
                    <p>Cookie Setting</p>
                </div>
                <div>
                    <p>Accessibility</p>
                    <p>Report a Product</p>
                    <p>Cookie Policy</p>
                </div>

                <p>&#169 All Right Reserved 2024 Beryl Store</p>

            </div>
        </footer>
    )
};

export default Footer;