/* eslint-disable @typescript-eslint/no-explicit-any */
import { ArrowRight, DonutIcon } from "lucide-react";
import { useNavigate } from "react-router-dom"
import { questionConfig } from "../form/questions.config";

const SuccessPage = ({ data }: { data: any }) => {
    const navigate = useNavigate();
    if (!data) {
        navigate('/')
    }
    return (
        <div className="h-screen w-screen bg-violet-800 flex items-center justify-center">
            <div className="text-center">
                <DonutIcon size={60} color="white" className="mx-auto my-3" />
                <h3 className="text-3xl font-bold text-white">Wohoo! survey has been submitted.</h3>
                <p className="text-lg mt-2 tracking-wider text-white font-semibold">Here are the answers that you have submitted!</p>

                <div className="px-4 py-2 border-2 rounded-xl my-5 bg-white">
                    {
                        questionConfig.map((item, index) => {
                            return <div className="text-left my-6">
                                <h4 className="text-xl text-black font-semibold mb-1">{index + 1}. {item.label}</h4>
                                <p className="text-xl text-violet-600 font-semibold ml-5 flex items-center justify-start" ><ArrowRight size={18} className="mr-2" /> {data?.[item?.dataKey]}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SuccessPage