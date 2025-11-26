import React, { useState } from "react";


const FormDinamico = () => {
    const [data, setData] = useState([{
        name: 'pepe',
        lastname: 'pepe',
        address: 'pepe str',
        age: '22'
    }]);
    const [formData, setFormData] = useState({
        name: '',
        lastname: '',
        address: '',
        age: ''
    });

    const handleSubmit = e => {
        e.preventDefault();
        console.log(formData)
        setData([...data, formData]) // -->modifica el estado formData
        console.log(data)//,me devuelve los que estaban antes de añadir el nuevo
        handleReset(e);
    }

    const handleChange = e => {
        const { name, value } = e.target // desestructuramos objeto del evento para extrar valores name y value
        setFormData({ ...formData, [name]: value }) // pasamos la info al estado
    }


    const handleReset = e => {
        e.preventDefault();
        setFormData({
            name: '',
            lastname: '',
            address: '',
            age: ''
        })
    }
    //console log de lo.....
    console.log('informacion en data -> ', data)//los actuales


    const handleClick = (contact) => {
        console.log('click')
        console.log(contact)
        console.log(data.filter(el=> el.name === contact.name && el.lastname === contact.lastname)) // filtrar a partir de condiciones.
        console.log(data.findIndex(el=> el.name === contact.name)) // buscar indice
        console.log(data.some(el=> el===contact))
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input value={formData.name} onChange={handleChange} name="name" type="text" />
                <input value={formData.lastname} onChange={handleChange} name="lastname" type="text" />
                <input value={formData.address} onChange={handleChange} name="address" type="text" />
                <input value={formData.age} onChange={handleChange} name="age" type="text" />
                <input type="submit" />
                <input type="reset" onClick={handleReset} />
            </form>
            <ul>

                {
                    data.map((el, i) => <li key={i}>
                        <div className="card" onClick={()=>handleClick(el)}>
                            <h2>
                                {el.lastname}, {el.name}. {el.age}
                            </h2>
                            <div>
                                <p>{el.address}</p>

                            </div>
                        </div>

                    </li>)
                }
            </ul>
        </>


    )

}



export default FormDinamico