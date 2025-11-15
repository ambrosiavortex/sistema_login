import './cadastro.scss';

import { useState } from 'react';

export default function Cadastro() {

    const [formData, setFormData] = useState({
        email: "",
        username: "",
        senha: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        console.log(formData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataToSend = {
        ...formData,
        };
        let response = await api.post("/cadastro/conta", dataToSend);
    };


    return(
        <main>
            <div className='cadastro-page'>

                <div className='cadastro-main-block'>
                    <div className='cadastro-block-content'> 

                        <div className='cadastro-presentation'>
                            Cadastro
                        </div>

                        <form onSubmit={handleSubmit} className='cadastro-input-fields'>
                            
                            <div>
                                <label>Nome de usuário</label> <br/>
                                <input type='text' name='username' value={formData.username} onChange={handleChange}/>
                            </div>

                            <div>
                                <label>Email</label> <br/>
                                <input type='email' name='email' value={formData.email} onChange={handleChange}/>
                            </div>

                            <div>
                                <label>Senha</label> <br/>
                                <input type='password' name='senha' value={formData.senha} onChange={handleChange}/>
                            </div>

                            <button type='submit' style={{width: "10vh"}}>Cadastrar</button>

                        </form>

                    </div>
                </div>
            </div>
        </main>
    )
}