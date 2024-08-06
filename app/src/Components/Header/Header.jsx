import { Link } from "react-router-dom";
import paths from "../../Routers/paths/paths";
import { useState } from "react";

const Header = () => {
    const [toggleLink, setToggleLink] = useState(false);

    const handleToggleLink = () => {
        setToggleLink(prevLink => !prevLink);
    };

    return (
        <header className="bg-slate-500 px-2 py-2 md:px-4 md:py-4 lg:flex items-center lg:justify-around  lg:py-8">
            <div className="flex justify-between items-center">
                <Link to={paths.home}>
                    <h1 className='text-white text-2xl md:text-5xl font-medium font-creepster'>Rick & Morty App</h1>
                </Link>

                {/* Toggle button for mobile */}
                <button
                    onClick={handleToggleLink}
                    className='my-2 lg:hidden focus:outline-none'
                    aria-label="Toggle menu"
                >
                    <img className='w-8 h-8' src={toggleLink ? "/public/x.png" : "/public/menu-hamb.png"} alt={toggleLink ? "close menu" : "open menu"} />
                </button>
            </div>

            <div className={`flex flex-col  ${toggleLink ? 'block' : 'hidden'} lg:flex`}>
                <nav className="flex flex-col lg:flex-row lg:gap-4">
                    <Link to={paths.episodeList} className="flex items-center gap-1 py-2 lg:py-0 ">
                        <h2 className="font-bold md:text-2xl lg:text-3xl text-white">Episodes</h2>
                        <img className="w-5 h-5 mt-0.5" src="/public/tv.png" alt="tv-episode" />
                    </Link>
                    <Link to={paths.locationList} className="flex items-center gap-1 py-2 lg:py-0 ">
                        <h2 className="font-bold md:text-2xl lg:text-3xl text-white ">Location</h2>
                        <img className="w-5 h-5 mt-0.5" src="/public/pin.png" alt="pin location" />
                    </Link>
                </nav>
            </div>
        </header>
    );
}

export default Header;
