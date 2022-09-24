import axios from 'axios';


const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWQxNmI4NWNhNDJhZGY5NjUxMjMzOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2Mzk1Mjc3MywiZXhwIjoxNjY0MjExOTczfQ.ecgHhR0ftRbSTz2_osFAjB9PUuazbnYtlqvRUvMMtRw"


export const publicRequest = axios.create(
    {
        baseURL: BASE_URL,
    } );

export const userRequest = axios.create( {
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
} )
