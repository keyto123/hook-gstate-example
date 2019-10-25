import { useSub, createState, getFromPath, update } from 'hook-gstate';
import Axios from 'axios';

const INITIAL_STATE = {
    username: '',
    password: '',
    logged: false
}

createState('login', INITIAL_STATE);

const sideEffects = Object.freeze({
    login: async function(username, password) {
        await Axios.post('http://localhost:3005/login', {username, password});
        update({
            'login.logged': true
        });
        console.log(getFromPath('login.logged'));
    }
});

const actions = Object.freeze({
    updateUsername: function(username) {
        update({
            'login.username': username,
        });
    },
    updatePassword: function(password) {
        update({
            'login.password': password,
        });
    },
    login: function() {
        const username = getFromPath('login.username');
        const password = getFromPath('login.password');
        sideEffects.login(username, password);
    }
});

/**
 * 
 * @param {import('hook-gstate').kp} keysAndPath
 * @returns {[*, actions]}
 */
export default function useLogin(keysAndPath) {
    return [
        useSub('login', keysAndPath),
        actions
    ]
}
