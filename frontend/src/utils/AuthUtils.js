const isAuthenticated = () => {
  const token = localStorage.getItem('authToken');
  
  if (token) {
    console.log('User authenticated 1 ');
    return true;
  } else {
    console.log('User authenticated 2');
    return false;

  }
};

export default isAuthenticated;