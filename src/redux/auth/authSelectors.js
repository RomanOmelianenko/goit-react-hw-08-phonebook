const isLogIn = state => state.auth.token;

const getUserName = state => state.auth.user.name;

const authSelectors = {
    isLogIn, 
    getUserName
};

export default authSelectors;