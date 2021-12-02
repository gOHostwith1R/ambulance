const storageUser = 'userAuth';

const saveToken = (token) => {
  localStorage.setItem(storageUser, JSON.stringify(token));
};

export default saveToken;
