
const domain = 'https://desolate-mesa-23396.herokuapp.com'

export const authHeader = {
    headers: {
        'auth-token': localStorage.getItem('auth-token')
    }
}
