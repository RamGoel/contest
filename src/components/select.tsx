
export type FormSelectProps = {
    label: string;
    value: string;
    handleChange: (val: string | boolean) => void;
    required: boolean;
    extraStyle?: string;
    error: string;
    touched: boolean;
    options?: { label: string; value: string, disabled?: boolean }[];
    handleTouch: (state: boolean) => void;
}
const FormSelect = ({
    label,
    value,
    handleChange,
    required,
    error,
    touched,
    options,
    handleTouch
}: FormSelectProps) => {
    return (
        <div className="flex flex-col p-2 h-[120px]">
            {label && <label className="font-semibold">{label}</label>}
            <select onFocus={() => handleTouch(true)} onBlur={() => handleTouch(false)} className="py-2 rounded-lg border-2 border-gray-300 my-1 focus-within:outline-none px-4 " value={value} required={required} onChange={(ev) => {
                handleChange(ev.target.value)
            }}>
                {
                    options?.map((item) => {
                        return <option disabled={item.disabled} value={item.value}>{item.label}</option>
                    })
                }
            </select>
            {(touched && error) && <p className="text-sm font-semibold text-red-600">{error}</p>}
        </div>
    )
}

export default FormSelect