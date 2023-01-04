
export const login = (data) => {
    const userSet = localStorage.setItem('user', JSON.stringify(data));
    return (console.log(userSet)) 
}

export const isAuthenticated = () => {
    const userLocaleStore = localStorage.getItem('user');
	if (!userLocaleStore) {
		return null
	}
	return JSON.parse(userLocaleStore);
};

