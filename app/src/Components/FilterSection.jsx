import { useState } from "react"
import FilterButton from "./Library/FilterButton"



const FilterSection = ({ title, options, selectedOption, setOption }) => {

    const [filterView, setFilterView] = useState('open')


    return <>

        <h3
            className=" w-24 text-center font-bold shadow border-b-slate-950 bg-slate-600 py-1 rounded cursor-pointer"
            onClick={() => setFilterView(prevView => (prevView === 'close' ? 'open' : 'close'))}
        >
            {title}
        </h3>


        {filterView === 'open' && (
            <>
                <div className="flex flex-col items-center rounded-lg bg-slate-500 p-2">
                    <div
                        className="grid grid-cols-2 gap-2">
                        {options.map((option) => (
                            <FilterButton
                                key={option}
                                isActive={option === selectedOption}
                                onClick={() => setOption(prev => (prev === option ? "" : option))}
                                label={option}

                            />

                        ))}

                    </div>

                </div>
            </>
        )

        }




    </>
}

export default FilterSection