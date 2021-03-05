import request from 'superagent';

const URL = 'http://localhost:3006';

export function signUpUser(email, password) {
    const response = await request
        .post(`${URL}/auth/signup`)
        .send({email, password})
            return response.body;
}

export function loginUser(email, password) {
    const response = await request
    .post(`${URL}/auth/signin`)
    .send({email, password})
        return response.body
}

export function searchGames(query) {
    const response = await request
    .get(`${URL}/games?search=${query}`)
        return response.body.results;
}

export function addFavorite(game, token) {
    const response = await request
    .post(`${URL}/api/favorites`)
    .set('Authorization', token)
    .send(game);
        return response.body;
}

export function getFavorites(token) {
    const response = await request
    .get(`${URL}/api/favorites`)
    .set('Authorization', token);
        return response.body;
}