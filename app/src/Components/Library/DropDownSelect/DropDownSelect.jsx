


const DropDownSelect = ({ options, selectedValue, onChange }) => {




    return (

        <div className="p-2 text-sm flex justify-center">
            <select className='rounded font-semibold text-slate-500 py-1 px-1'
                name="dropDown"
                onChange={onChange}
                value={selectedValue}>

                <option className="font-semibold" value="1">Choose..</option>

                {options.map((option, index) => (
                    <option value={index + 1} key={index + 1}>Ep: {index + 1} - {option}</option>
                ))}
            </select>
        </div>


    )


}

export default DropDownSelect