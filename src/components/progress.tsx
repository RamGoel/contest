
const ProgressBar = ({ progress }: { progress: number }) => {
    return (
        <div className="fixed top-0 transition-all left-0 w-full">
            <div id="progress-body" className="h-[10px] w-full">
                <div id="progress-tracker" style={{ width: `${progress}%` }} className={`transition-all h-[10px] ${progress > 60 ? 'bg-green-400' : progress > 25 ? 'bg-yellow-500' : 'bg-red-600'}`}></div>
            </div>
        </div>
    )
}

export default ProgressBar