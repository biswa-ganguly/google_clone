import Logo from "../assets/google-logo.png";
import HomeHeader from "./HomeHeader";
import SearchInput from "./SearchInput";
import Footer from "./Footer";
const Home = () => {
    return (
        <div className="h-[100vh] flex flex-col">
            <HomeHeader />
            <main className="grow flex justify-center">
                <div className="w-full px-5 flex flex-col items-center mt-44">
                    <img
                        className="w-[172px] md:w-[272px] mb-8"
                        src={Logo}
                        alt="Logo"
                    />
                    <SearchInput />
                    <div className="flex justify-evenly gap-4 text-[#3c4043] mt-20">
                        <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
                            Google Search
                        </button>
                        <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
                            Made with love
                        </button>
                        <button className="h-9 px-4 bg-[#f8f9fa] text-sm rounded-md border border-[#f8f9fa] hover:border-[#dadce0] hover:shadow-c2">
                            From Biswa
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Home;