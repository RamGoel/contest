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
            <div className="text-center w-10/12 mx-auto md:w-1/3">
                <DonutIcon size={50} color="white" className="mx-auto my-3" />
                <h3 className="text-xl font-semibold text-white">Wohoo! survey has been submitted.</h3>
                <p className="text-sm mt-1 tracking-wider text-white">Here are the answers that you have submitted!</p>

                <div className="px-4 py-1 border-2 rounded-xl my-5 bg-white">
                    {
                        questionConfig.map((item, index) => {
                            return <div className="text-left my-6">
                                <h4 className="text-md text-black font-semibold mb-1">{index + 1}. {item.label}</h4>
                                <p className="text-sm text-violet-600 font-semibold ml-5 flex items-center justify-start" ><ArrowRight size={18} className="mr-2" /> {data?.[item?.dataKey] || 'Not answered'}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default SuccessPage