import CharactersList from "../../Components/CharacterList/CharactersList"
import Header from "../../Components/Header/Header"

import DropDownSelect from "../../Components/Library/DropDownSelect/DropDownSelect"
import useEpisodes from "../../Hooks/useEpisodes"


const EpisodesList = () => {


    const {
        episodeNames,
        selectedEpisode,
        selectedEpisodeName,
        charactersEpisode,
        airDateEpisode,
        handleChange
    } = useEpisodes()


    return (
        <section className="bg-slate-900 justify-center min-h-screen">
            <Header />
            <div className="p-2 flex flex-col items-center text-white md:gap-4">
                <h1 className="text-white font-semibold text-3xl md:text-5xl">Episode: <span className="text-amber-200 text-3xl">{selectedEpisodeName}</span></h1>

                <h3 className="text-white md:text-xl">Air date: <span className="text-yellow-200">{airDateEpisode}</span></h3>

            </div>

            <DropDownSelect options={episodeNames} selectedValue={selectedEpisode} onChange={handleChange} />

            < CharactersList characters={charactersEpisode} />


        </section >

    )
}

export default EpisodesList






{/* <div>
                <button
                    onClick={toggleDropDown}
                    className='font-semibold text-slate-500 py-1 px-1 bg-gray-700 rounded w-[200px]'>
                    {isOpen ? `${selectedEpisodeName}` : `${selectedEpisodeName}`}
                </button>

                {isOpen && (

                    <ul
                        className="absolute bg-gray-700 text-white mt-2 rounded shadow-lg"
                        aria
                    >
                        {episodeNames.map((episode, index) => (

                            <li className="cursor-pointer text-sm px-1"
                                value={index + 1}
                                key={index}
                                onClick={handleChange}
                            >{`Ep: ${index + 1} - ${episode}`}
                            </li>
                        ))}
                    </ul>

                )}


            </div> */}