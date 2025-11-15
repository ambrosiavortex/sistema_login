import loginController from './controllers/loginController.js';

export function adicionarRotas(api) {
    api.use(loginController)
}