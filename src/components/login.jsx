import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux/es/exports"
import IconPokeball from "./IconPokeball"
import { setTrainerName } from "../store/slices/trainerName.slice"
import Logo from '../images/logo.png'

const Login = () => {

    const [error, setError] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = e => {
        e.preventDefault()
        const inputText = e.target.childNodes[0].value
        if (inputText === '') {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 2000)
        } else {
            dispatch(setTrainerName(inputText))
            navigate('/pokedex')
        }
    }

    return (
        <main className="login">
            <section className="login__body">
                <figure className="login__image">
                    <img src={Logo} alt="Pokedex logo" />
                </figure>
                <h2 className="login__tittle">Hola Maestro(a) Pokémon!</h2>
                <p className="login__paragraph">¡Dame tu nombre para empezar esta aventura!</p>
                <form className="login__form" onSubmit={handleSubmit}>
                    <input type="text" placeholder="Nombre del entrenador..." />
                    <input type="submit" value="Start" />
                </form>
                {error && <p className="error">Introduzca al menos un carácter</p>}
            </section>
            <section className="login__footer">
                <div className="footer__redBlock"></div>
                <div className="footer__blackBlock"></div>
                <IconPokeball pokeballLayout={''} />
            </section>
        </main>
    )
}

export default Login