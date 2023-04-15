export const signUp = async (user , setUser) => {
  try {
    const { email, password, name, weight, height, age } = user;
    
    const res = await fetch("http://localhost:4000/user/register", {
      method: "POST",
      body: JSON.stringify({ email, password, name, weight, height, age }),
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.status !== 200)
    if (res.status !== 200) {
      return {
        
        success: false,
        res : await res.json(),
      };
    }

    const data = await res.json();

    console.log(data);
    console.log(data.success)
    if(!data.success){
        return {
            success  :false,
            message : data.error
        }
    }
    localStorage.setItem("token", JSON.stringify(data.token));
    localStorage.setItem("user", JSON.stringify(data.user));
    setUser(data.user)
    return {
      success: true,
      message: "User created",
    };

  } catch (err) {
    return {
      success: false,
      error: err.message,
    };
  }
};

export const logIn = async(user , setUser) => {
    try {
        const {email , password} = user
        const res = await fetch("http://localhost:4000/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password}),
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.status !== 200)
    if (res.status !== 200) {
      return {
        
        success: false,
        res : await res.json(),
      };
    }

    const data = await res.json();

    console.log(data);
    console.log(data.success)
    if(!data.success){
        return {
            success  :false,
            message : data.error
        }
    }
    localStorage.setItem("token", JSON.stringify(data.token));
    localStorage.setItem("user", JSON.stringify(data.user));
    setUser(data.user)
    return {
      success: true,
      message: "User created",
    };

    } catch(err){
        return {
            success: false,
            error: err.message,
          };
    }
}