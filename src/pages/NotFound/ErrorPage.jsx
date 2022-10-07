import { useNavigate } from 'react-router-dom'
import style from './errorpage.module.css'

const ErrorPage = () => {
    const navigate = useNavigate()
  return (
    <div className={style.container}>
        <h1>404</h1>
        <h2>PAGE NOT FOUND</h2>
        <button onClick={() => navigate("/")}>Back to home page</button>
    </div>
  )
}

export default ErrorPage