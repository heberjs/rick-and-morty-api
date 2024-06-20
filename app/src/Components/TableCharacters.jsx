import {useCharacters} from "../Hooks/useCharacters"

function TableCharacters() {

  const { characters } = useCharacters()

  const firstTenCharacters = characters.slice(0, 10)


   return (
    <section className='flex flex-col justify-center border-2 rounded-lg shadow-lg bg-gray-800 text-white'>
      <h2 className='text-xl font-semibold py-2 text-center'>Rick and Morty Characters</h2>
      <table className='border-collapse w-full'>
        <thead>
          <tr className='bg-gray-700'>
            <th className='px-4 py-2 text-left'>Name</th>
            <th className='px-4 py-2 text-left'>Location</th>
            <th className='px-4 py-2 text-left'>Status</th>
          </tr>
        </thead>
        <tbody>
          {firstTenCharacters.map((character) => (
            <tr key={character.id} className='border-t border-gray-600'>
              <td className='px-4 py-2'>{character.name}</td>
              <td className='px-4 py-2'>{character.location.name}</td>
              <td className='px-4 py-2'>{character.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default TableCharacters