import axios from './Axios'

export const snakeGame = () => {
    try {
        const response = axios.post("/game")
        return response.message
    } catch (error) {
        return error
    }
}