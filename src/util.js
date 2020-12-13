export function isLoggedIn() {
    const val = localStorage.getItem("token");
    if(val && val !== '' && val  !== null) {
        return true;
    } else {
        return false;
    }
}