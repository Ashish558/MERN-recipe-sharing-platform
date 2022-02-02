
export const CheckIfLoggedIn = () => {
    if (localStorage.getItem('auth-token')) {
        window.location = '/posts'
    }

}