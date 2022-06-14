const saveToken = (accessToken: string) => {
  localStorage.setItem('accessToken', accessToken);
};

export { saveToken };
