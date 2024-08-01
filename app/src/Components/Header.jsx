import { Link } from "react-router-dom"
import paths from "../Routers/paths/paths.js"
import { useState } from "react"


const Header = () => {

    const [toogleLink, setToogleLink] = useState('close')


    const handleToggleLink = () => {
        setToogleLink(prevLink => (prevLink === 'close' ? 'open' : 'close'))
    }

    return (
        <>
            <div className="flex items-center justify-between px-2 bg-slate-500">
                <Link to={paths.home}>
                    <h1 className='text-white text-2xl  text-center font-medium font-creepster'>Rick & Morty App</h1>
                </Link>


                <div onClick={handleToggleLink} className='my-2'>
                    {toogleLink === 'close' ? (
                        <img className='w-8 h-8' src="/public/menu-hamb.png" alt="hamburger menu" />) : (<img className='w-8 h-8' src="/public/x.png" alt="close menu" />
                    )}
                </div>
            </div>
            {
                toogleLink === 'open' && (
                    <>

                        <div className='bg-slate-500 px-2 mb-2'>
                            <Link>
                                <div className="flex items-center gap-1">
                                    <h2 className="font-bold text-xl text-white">Episodes</h2>
                                    <img className="w-5 h-5 mt-0.5" src="/public/tv.png" alt="tv-episode" />

                                </div>
                            </Link>

                            <Link to={paths.locationList}>
                                <div className="flex items-center pb-2 gap-1">
                                    <h2 className="font-bold text-xl text-white">Location</h2>
                                    <img className="w-5 h-5" src="/public/pin.png" alt="pin location" />
                                </div>
                            </Link>
                        </div>

                    </>
                )
            }

        </>
    )

}


export default Header
