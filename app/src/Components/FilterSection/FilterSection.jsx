import { useState } from "react"
import FilterButton from "../Library/FilterButton"



const FilterSection = ({ title, options, selectedOption, setOption }) => {

    const [filterView, setFilterView] = useState('open')


    return (
        <>

            <h3
                className=" w-24 text-center font-bold shadow border-b-slate-950 bg-slate-600 py-1 rounded cursor-pointer my-2 lg:w-full"
                onClick={() => setFilterView(prevView => (prevView === 'close' ? 'open' : 'close'))}
            >
                {title}
            </h3>


            {
                filterView === 'open' && (
                    <>
                        <div className="items-center rounded-lg bg-slate-500 p-2">
                            <div
                                className="flex flex-wrap gap-10 items-center">
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

    )
}

export default FilterSection