//Using localStorage basic methods with strings
export function getUser() {
    return localStorage.getItem("user");
}

export function setUser(name) {
    return localStorage.setItem("user", name);
}

export function logout() {
    return localStorage.removeItem("user");
}