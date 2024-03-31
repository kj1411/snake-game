import axios from './Axios'

export const snakeGame = async () => {
    try {
        const response = await axios.post("/game")
        console.log(response)
        return response.message
    } catch (error) {
        return error
    }
}