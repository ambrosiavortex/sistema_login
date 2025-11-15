import './login.scss';

import { useState } from 'react';

export default function Login() {

    const [formData, setFormData] = useState({
            login: "",
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
            let response = await api.post("/login", dataToSend);
        };
    
    return(
        <main>
            <div className='login-page'>
            
                <div className='login-main-block'>
                    <div className='login-block-content'> 

                        <div className='login-presentation'>

                            <div>
                                Login
                            </div>

                        </div>

                        <form onSubmit={handleSubmit} className='login-input-fields'>

                            <div>
                                <label>Nome de usuário ou Email</label> <br/>
                                <input type='text' name='login' value={formData.login} onChange={handleChange}/>
                            </div>

                            <div>
                                <label>Senha</label> <br/>
                                <input type='password' name='senha' value={formData.senha} onChange={handleChange}/>
                            </div>

                            <button type='submit' style={{width: "10vh"}}>Entrar</button>

                        </form>

                        <div>
                            Não tem login? Se cadastre clicando <a href='/cadastro'>aqui</a>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}