import { useState, useEffect } from "react";

function ApiTest({ props }) {

    const [elemets, setElements] = useState([]);
    const [id, setId] = useState(props ? props.id : "");
    const [name, setName] = useState(props ? props.name : "");

    const handleSubmit = (e) => {
        e.preventDefault();
        //setId("");
        //setName("");

        async function fetchData() {
            const response = await fetch(
              'http://localhost:81/test/'+id,{
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                },
            });
            const data = await response.json();
            setElements(data);
            console.log(data);
        }
        fetchData();
    };

    useEffect(() => {
        fetch("http://localhost:81/",{
            method: "GET",
            headers: {
                "Content-type": "application/json"
            },
        }).then((resp) => resp.json())
        .then((data) => {setElements(data)})
        .catch((err) => console.log(err))
    }, [])
    
    return (
    <div>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="id">ID</label>
            <input
            type="text"
            name="id"
            placeholder="ID"
            onChange={(e) => setId(e.target.value)}
            value={id}
            />
        </div>
        <div>
            <label htmlFor="name">Nome</label>
            <input
            type="text"
            name="name"
            placeholder="Digite o seu nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
            />
        </div>
        <input type="submit" value="Testar" />
        </form>
        <div name="api_t1">{elemets.test1}</div>
        <div name="api_t2">{elemets.test2}</div>
    </div>
    );
};

export default ApiTest;