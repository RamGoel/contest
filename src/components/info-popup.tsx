import { CheckCheck } from "lucide-react"

const InfoPopup = ({ closePopup }: { closePopup: () => void }) => {
    return (
        <div className='z-[100] h-screen w-screen flex items-center justify-center fixed top-0 left-0 bg-black bg-opacity-60'>
            <div className='rounded-xl border-4 border-violet-200 shadow-2xl p-6 w-11/12 md:w-1/3 bg-white'>
                <h3 className='text-2xl font-semibold'>Wait! do you know?</h3>
                <p className='mt-5 text-md font-semibold'>This is a timed form of 5:00 minutes. The timer will start as soon as you start filling the form.</p>

                <p className='mt-5 text-md font-semibold'>Once the timer ends, the form will be auto submitted. All the best!</p>

                <div className='flex items-center justify-end'>
                    <button onClick={closePopup} className='bg-black flex items-center justify-between hover:scale-90 transition-all min-w-[120px] text-white border-2 rounded-xl px-4 py-2 font-semibold mt-4'>
                        Okay <CheckCheck />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default InfoPopup