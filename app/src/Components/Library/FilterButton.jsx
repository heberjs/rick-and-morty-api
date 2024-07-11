



const FilterButton = ({ isActive, onClick, label }) => {

    return (

        <button className={`px-2 py-1 rounded ${isActive ? 'bg-yellow-600 font-semibold' : 'bg-slate-800'}`}
            onClick={onClick}
        >{label}
        </button>

    )

}

export default FilterButton