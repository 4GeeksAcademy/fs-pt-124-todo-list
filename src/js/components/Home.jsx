import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import FormDinamico from "./formDinamico";

//create your first component
const Home = () => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	console.log('home se ha cargado')
	//evento onSubmit recarga la pagina

	const handleSubmit = e => {
		e.preventDefault(); // --> evita que se recargue la pagina.
		console.log(e)
		console.log(email, password)
	}

	// al almacenar la info de un input necesitamos
	/*
	1. en el evento --> onChange
	2. un estado para almacenar la informacion
	3. un estado desde donde leer la informacion

	*/

	return (
		<div className="text-center">
			<form onSubmit={handleSubmit}>
				<input onChange={e=>setEmail(e.target.value)} value={email}  type="email" />
				<input onChange={e=>setPassword(e.target.value)} value={password} type="password" />
				<input type="submit" />
			</form>
<hr />
<FormDinamico />
		</div>
	);
};

export default Home;