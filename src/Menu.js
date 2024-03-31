//Menu.js 
import React from "react"; 
import { snakeGame } from "./calls";
import './Menu.css'

const Menu = () => { 

    const handleStartGame = async () => {
        const res= await snakeGame()
    }

	return ( 
		<div className="wrapper"> 
			<div> 
				<input 
					onClick={handleStartGame} 
					className="start"
					type="button"
					value="start game"
				/> 
			</div> 
		</div> 
	); 
}; 

export default Menu; 
