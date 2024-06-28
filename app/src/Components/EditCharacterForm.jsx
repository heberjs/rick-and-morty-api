import { useCharacters } from "../Hooks/useCharacters"

function EditCharacterForm({ character }) {

    const { setEditCharacter, characters, setCharacters } = useCharacters()

    const handleCancelClick = () => setEditCharacter(null)

    const handleSubmit = event => {
        event.preventDefault()

        const form = event.target

        const updatedCharacter = {
            ...character,
            name: form.name.value,
            location: { ...character.location, name: form.location.value },
            status: form.status.value
        }

        const index = characters.findIndex(c => c.id === updatedCharacter.id)
        if (index !== -1) {
            const newCharacters = [...characters]
            newCharacters[index] = updatedCharacter
            setCharacters(newCharacters)
        }

        setEditCharacter(null)

    }

    return <section className='h-screen w-screen fixed top-0 left-0 flex justify-center items-center flex-col bg-black bg-opacity-70 '>
        <div className='border p-8 rounded-xl bg-slate-700  animate-jump-in animate-once'>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col mb-4 '>
                    <label htmlFor='name' className='text-white font-semibold  '>Name</label>
                    <input className="p-1" type='text' id='name' defaultValue={character.name} />
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor='location' className='text-white font-semibold'>Location</label>
                    <input className="p-1" type='text' id='location' defaultValue={character.location.name} />
                </div>
                <div className='flex flex-col mb-4'>
                    <label htmlFor='status' className='text-white font-semibold'>Status</label>
                    <input className="p-1" type='text' id='status' defaultValue={character.status} />
                </div>

                <button type='submit' className='bg-[#AEC670] hover:bg-[#AEC09A] font-semibold py-2 px-4 rounded w-full mt-4'>Save</button>
            </form>
            <button className='bg-[#AEC670] hover:bg-[#AEC09A] font-semibold py-2 px-4 rounded w-full mt-4' onClick={handleCancelClick}>Cancel</button>
        </div>
    </section>

}

export default EditCharacterForm