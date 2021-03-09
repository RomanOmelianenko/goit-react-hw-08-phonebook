const isLogIn = state => state.auth.token;

const getUserName = state => state.auth.user.name;

const getLoading = state => state.auth.loading;

const getError = state => state.auth.error;

const authSelectors = {
    isLogIn, 
    getUserName,
    getLoading,
    getError
};

export default authSelectors;