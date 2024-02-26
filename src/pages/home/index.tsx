import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <div>
            <div>
                <Link to={'/form'}>
                    Attempt Quiz
                </Link>
            </div>
        </div>
    )
}

export default HomePage