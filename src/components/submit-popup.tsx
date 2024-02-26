import { CheckCheck, X } from "lucide-react"

const SubmitPopup = ({ value, closePopup }: { value: string, closePopup: (result: boolean) => void }) => {
    return (
        <div className='z-[100] h-screen w-screen flex items-center justify-center fixed top-0 left-0 bg-black bg-opacity-60'>
            <div className='rounded-xl border-4 border-violet-200 shadow-2xl p-6 w-11/12 md:w-1/3 bg-white'>
                <h3 className='text-2xl font-semibold'>Wait a minute?</h3>
                <p className='mt-5 text-md font-semibold'>You stll have {value} left, are you sure you want to submit?</p>

                <div className='flex items-center justify-end'>
                    <button onClick={() => closePopup(false)} className='bg-red-600 mr-2 flex items-center justify-between hover:scale-90 transition-all min-w-[120px] text-white border-2 rounded-xl px-4 py-2 font-semibold mt-4'>
                        No <X />
                    </button>
                    <button onClick={() => closePopup(true)} className='bg-black flex items-center justify-between hover:scale-90 transition-all min-w-[120px] text-white border-2 rounded-xl px-4 py-2 font-semibold mt-4'>
                        Yes <CheckCheck />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SubmitPopup