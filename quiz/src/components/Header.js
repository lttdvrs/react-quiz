import Buttons from "./Buttons"

const Header = ({ title }) => {
    return (
        <header>
            <h1>{title}</h1>
            <Buttons />
        </header>
    )
}

export default Header