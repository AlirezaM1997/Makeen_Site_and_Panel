const addNewAdmin = () => {
    setIsLoaded(true);
    fetch(`${process.env.domain}/accounts/register`, {
      method: "POST",
      body: JSON.stringify({
        username: newAdmin.username,
        password: newAdmin.password,
        name: newAdmin.name,
        email: newAdmin.email,
      }),
    })
      .then((data) => {
        if (data.status === 200) {
          console.log("new admin add");
          console.log(data);
        } else {
          console.log("new admin not add");
        }
        setIsLoaded(false);
        return data.json();
      })
      // .then(({ token }) => {
      //   setCookies("token", token);
      // });
    setIsLoaded(false);
  };

export {
    addNewAdmin
}