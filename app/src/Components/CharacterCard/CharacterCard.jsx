import { Link } from "react-router-dom"



function CharacterCard({ character }) {



    return <>

        <Link to={`/rickandmorty/${character.id}`}>
            <div className=" flex flex-col items-center justify-center p-2 border-4 border-slate-700 rounded-lg mt-2 lg:w-[300px] md:w-[250px] ml-1">
                <h2 className='text-yellow-200 font-bold font-sans text-2xl p-1 text-center mb-2'>{character.name}</h2>

                <img className="rounded-3xl w-full lg:w-[300px] border-opacity-20 border-cyan-950" src={character.image} alt="character image" />


                <p className={`${character.status === 'Alive' ? 'text-green-500' : character.status === 'Dead' ? 'text-red-600' : character.status === 'unknown' ? 'text-gray-400' : 'text-white'} text-2xl font-bold p-1 text-center`}>{character.status}</p>
                <p className='text-white font-semibold p-1 text-center text-xl'>{character.location.name}</p>

            </div>
        </Link >
    </>

}


export default CharacterCard