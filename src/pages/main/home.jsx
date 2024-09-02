import { NavLink } from "react-router-dom";
import { Slider } from "../utils";


const slides = [
    {
        'image': '/slider/img1.jpg',
        'alt': 'books slide',
        'bg-color': 'bg-slider1',
        'title': 'Books Store',
        'content': "Dive into our vast collection of novels, biographies, and self-help books. \nNurture young minds with out range of educational and entertaining children's book.",
    },
    {
        'image': '/slider/img2.jpeg',
        'alt': 'device slide',
        'bg-color': 'bg-slider2',
        'title': 'Phone & Device',
        'content': "Explore the lates models from top brands with advanced features to keep you connected and entertained. \nProtect and personalize your devices with our collection of cases, chargers, headphones, and more.",
    },
    {
        'image': '/slider/img3.jpeg',
        'alt': 'fashion slide',
        'bg-color': 'bg-slider3',
        'title': 'Fashion Store',
        'content': 'Discover the lates trends in clothing, from casual wear to formal attire. Our collection is curated to fit every occasion. \nComplete your look with our stylish accessories, including bags, belts, scarves, and jewelry.',
    },
    {
        'image': '/slider/img4.jpg',
        'alt': 'appliance slide',
        'bg-color': 'bg-slider4',
        'title': 'Appliance Store',
        'content': 'From blenders to ovens, our kitchen appliances make cooking easier and more enjoyable. Keep your home comfortable with our selectin of air conditioners, vaccum cleaners, and more.',
    },
    {
        'image': '/slider/img5.jpeg',
        'alt': 'cake slide',
        'bg-color': 'bg-slider1',
        'title': 'Cakes Store',
        'content': 'Celebrate special moments with our delicious and beautifully decorated birthday cakes. \nTreat yourself to our range of cupcakes and pastries, perfect for any sweet tooth.',
    },
    {
        'image': '/slider/img6.jpg',
        'alt': 'utensil slide',
        'bg-color': 'bg-slider2',
        'title': 'Ustensil Store',
        'content': 'Find high-quality pots, pans, and cooking tools to enhance your culinary skills. Our range of knives, forks, and spoons, are designed for both everyday use and special occasions.',
    },
    {
        'image': '/slider/img7.jpg',
        'alt': 'wines slide',
        'bg-color': 'bg-slider4',
        'title': 'Wines Store',
        'content': 'Discover our collection of rich and robust red wines, perfect for any occasion. \nCrisp and refreshing, our whites wines are ideal for pairing with your favourite meals. Celebrate with our selection of sparkling wines.',
    },
]


function Home(){
    return (
        <section className="mx-24 mb-5 my-10">
            <section className="flex">
                <div className="flex flex-col justify-stretch items-stretch min-w-[280px]">
                    <p className="bg-custom-blue p-2 text-white font-montserrat-medium text-[14px] text-center">
                        Browse Categories
                    </p>
                    <div className="bg-custom-tan p-2 border-b border-b-gray-300 flex">
                        <NavLink to='/products/category' className="font-montserrat-regular text-[14px] grow cursor-pointer">
                            Supermarket
                        </NavLink>
                    </div>
                    <div className="bg-custom-tan p-2 border-b border-b-gray-300 flex">
                        <NavLink to='/products/category' className="font-montserrat-regular text-[14px] grow cursor-pointer">
                            Fashion
                        </NavLink>
                    </div>
                    <div className="bg-custom-tan p-2 border-b border-b-gray-300 flex">
                        <NavLink to='/products/category' className="font-montserrat-regular text-[14px] grow cursor-pointer">
                            Phone & Device
                        </NavLink>
                    </div>
                    <div className="bg-custom-tan p-2 border-b border-b-gray-300 flex">
                        <NavLink to='/products/category' className="font-montserrat-regular text-[14px] grow cursor-pointer">
                            Mug Cup
                        </NavLink>
                    </div>
                    <div className="bg-custom-tan p-2 border-b border-b-gray-300 flex">
                        <NavLink to='/products/category' className="font-montserrat-regular text-[14px] grow cursor-pointer">
                            Cake
                        </NavLink>
                    </div>
                    <div className="bg-custom-tan p-2 border-b border-b-gray-300 flex">
                        <NavLink to='/products/category' className="font-montserrat-regular text-[14px] grow cursor-pointer">
                            Appliance
                        </NavLink>
                    </div>
                    <div className="bg-custom-tan p-2 border-b border-b-gray-300 flex">
                        <NavLink to='/products/category' className="font-montserrat-regular text-[14px] grow cursor-pointer">
                            Wine
                        </NavLink>
                    </div>
                    <div className="bg-custom-tan p-2 border-b border-b-gray-300 flex">
                        <NavLink to='/products/category' className="font-montserrat-regular text-[14px] grow cursor-pointer">
                            Utensil
                        </NavLink>
                    </div>
                    <div className="bg-custom-tan p-2 border-b border-b-gray-300 flex">
                        <NavLink to='/products/category' className="font-montserrat-regular text-[14px] grow cursor-pointer">
                            Books
                        </NavLink>
                    </div>
                </div>

                <div className="border-2 border-gray-300 grow mx-2 rounded-xl overflow-hidden">
                    <Slider slides={slides} />
                </div>
            </section>
        </section>
    )
}

export default Home;