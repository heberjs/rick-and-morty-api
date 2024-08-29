import { useEffect, useState } from "react"
import CharactersList from "../../Components/CharacterList/CharactersList"
import Header from "../../Components/Header/Header"
import fetchEpisodes from "../../../services/fetchEpisodes"
import retrieveCharsEpisode from "../../../services/retrieveCharsEpisode"
import DropDownSelect from "../../Components/Library/DropDownSelect/DropDownSelect"


const EpisodesList = () => {

    const [episodeNames, setEpisodeNames] = useState([])

    const [selectedEpisode, setSelectedEpisode] = useState("1")

    const [selectedEpisodeName, setSelectedEpisodeName] = useState("Pilot")

    const [charactersEpisode, setCharacterEpisode] = useState([])

    const [airDateEpisode, setairDateEpisode] = useState([])



    useEffect(() => {

        const fetchEpisodeNames = async () => {

            try {
                const allEpisodeNames = await fetchEpisodes()
                setEpisodeNames(allEpisodeNames)
            } catch (error) {

                console.error(error, error.message)

            }
        }

        fetchEpisodeNames()

    }, [])

    useEffect(() => {
        const fetchSelectedChar = async () => {

            try {
                const { charsEpisode, dataEpisode } = await retrieveCharsEpisode(selectedEpisode)

                setCharacterEpisode(charsEpisode)
                setairDateEpisode(dataEpisode)

            } catch (error) {

                console.error(error, error.message)

            }
        }

        fetchSelectedChar()

    }, [selectedEpisode])

    const handleChange = (e) => {

        const episodeSelectedIndex = e.target.value

        setSelectedEpisode(episodeSelectedIndex)
        setSelectedEpisodeName(episodeNames[episodeSelectedIndex - 1])
    }



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