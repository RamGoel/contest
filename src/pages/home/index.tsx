import { ArrowRight, DonutIcon } from "lucide-react"
import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <div className="h-screen bg-violet-800 w-screen flex items-center justify-center">
            <div>
                <DonutIcon color="white" size={'40'} className="text-center mx-auto my-3" />
                <p className="font-semibold text-white text-center tracking-[7px] text-sm md:text-md">A INITIATIVE BY <span className="font-bold">SPRITEERA</span></p>
                <h1 className="text-7xl font-bold text-white tracking-wider text-center">WAIT!! <span className=" text-violet-400">SURVEY</span></h1>
                <div className="flex items-center justify-center mt-5">
                    <Link to={'/form'} className="">
                        <button className="px-5 tracking-wider py-3 hover:scale-95 font-semibold flex items-center justify-between min-w-[200px] transition-transform bg-zinc-800 shadow-lg border-white text-white rounded-md">
                            Attempt Survey <ArrowRight />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage