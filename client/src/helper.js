import exerciseData from "./data/listOfAllExercises.json";

export const signUp = async (user, setUser) => {
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
    console.log(res.status !== 200);
    if (res.status !== 200) {
      return {
        success: false,
        res: await res.json(),
      };
    }

    const data = await res.json();

    console.log(data);
    console.log(data.success);
    if (!data.success) {
      return {
        success: false,
        message: data.error,
      };
    }
    localStorage.setItem("token", JSON.stringify(data.token));
    localStorage.setItem("user", JSON.stringify(data.user));
    setUser(data.user);
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

export const logIn = async (user, setUser) => {
  try {
    const { email, password } = user;
    const res = await fetch("http://localhost:4000/user/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.status !== 200);
    if (res.status !== 200) {
      return {
        success: false,
        res: await res.json(),
      };
    }

    const data = await res.json();

    console.log(data);
    console.log(data.success);
    if (!data.success) {
      return {
        success: false,
        message: data.error,
      };
    }
    localStorage.setItem("token", JSON.stringify(data.token));
    localStorage.setItem("user", JSON.stringify(data.user));
    setUser(data.user);
    return {
      success: true,
      user: data.user,
      message: "User created",
    };
  } catch (err) {
    return {
      success: false,
      error: err.message,
    };
  }
};

export const logoutAction = async (etUser) => {
  try {
    const res = await fetch("http://localhost:4000/user/logout", {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    localStorage.removeItem("user");
    localStorage.removeItem("token");

    const data = await res.json();
  } catch (err) {
    console.log(err.message);
  }
};

export const getOneExercisebyID = (id) => {
  return exerciseData.find((exercise) => exercise.id === id);
};

export const getExerciseDescription = async (name) => {
  try {
    console.log(name);
    console.log(
      `{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"Describe the exercise ${name}"}]}`
    );
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "96ff7fd609msh42f0999ddc4f585p157691jsn1f6a8eaf3666",
        "X-RapidAPI-Host": "openai80.p.rapidapi.com",
      },
      body: `{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"Describe the exercise ${name}"}]}`,
    };
    let res = await fetch(
      "https://openai80.p.rapidapi.com/chat/completions",
      options
    );

    let data = await res.json();
    return data;
  } catch (err) {
    return {
      success: false,
      error: err.message,
    };
  }
};

export const getYouTubeVideo = async (name) => {
  name = name + " exercise";
  let query = name.replaceAll(" ", "%2B");
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "96ff7fd609msh42f0999ddc4f585p157691jsn1f6a8eaf3666",
      "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
    },
  };

  const res = await fetch(
    `https://simple-youtube-search.p.rapidapi.com/search?query=${query}&safesearch=false`,
    options
  );
  const data = await res.json();
  return { data };
};

export const countCalorieReq = async ({
  age,
  gender,
  height,
  weight,
  activityLevel,
}) => {
  try {
    console.log({ age, gender, height, weight, activityLevel });
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "96ff7fd609msh42f0999ddc4f585p157691jsn1f6a8eaf3666",
        "X-RapidAPI-Host": "fitness-calculator.p.rapidapi.com",
      },
    };

    const req = await fetch(
      `https://fitness-calculator.p.rapidapi.com/dailycalorie?age=${age}&gender=${gender}&height=${height}&weight=${weight}&activitylevel=${activityLevel}`,
      options
    );

    const data = await req.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const getAllSplitsAction = async () => {
  try {
    console.log(JSON.parse(localStorage.getItem("token")));
    const res = await fetch("http://localhost:4000/user/getsplits", {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("token")),
      },
    });

    const data = await res.json();

    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const enrollExerciseAction = async ({name , split_id , exercise_id}) => {
  try {
    
    const res = await fetch("http://localhost:4000/exercise/enroll", {
      method: "POST",
      body: JSON.stringify({ name , split_id , exercise_id }),
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("token"))
      },
    });
    console.log(res.status !== 200);
    if (res.status !== 200) {

      return {
        success: false,
        res: await res.json(),
      };
    }

    const data = await res.json();

    return data
  } catch (err) {
    console.log(err.message);
  }
};

export const getSplitsAndExercisesAction = async (split_id) => {
  try {
    
    const res = await fetch(`http://localhost:4000/split/getsplit/${split_id}`, {
      method: "GET",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
    });
    if (res.status !== 200) {

      return {
        success: false,
        res: await res.json(),
      };
    }

    const data = await res.json();

    return data
  } catch (err) {
    console.log(err.message);
  }
};

export const CalculateBMI = async ({
  age,
  height,
  weight,
}) => {
  try {
    console.log({ age, height, weight });
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '96ff7fd609msh42f0999ddc4f585p157691jsn1f6a8eaf3666',
        'X-RapidAPI-Host': 'fitness-calculator.p.rapidapi.com'
      }
    };
    
    const req = await fetch(`https://fitness-calculator.p.rapidapi.com/bmi?age=${age}&weight=${weight}&height=${height}`, options)

    const data = await req.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};

export const createSplitAction = async(name) => {
  try {
    
    const res = await fetch("http://localhost:4000/split/create", {
      method: "POST",
      body: JSON.stringify({ name }),
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("token"))
      },
    });
    console.log(res.status !== 200);
    if (res.status !== 200) {

      return {
        success: false,
        res: await res.json(),
      };
    }

    const data = await res.json();

    return data
  } catch (err) {
    console.log(err.message);
  }
}

export const updateUserAttributes = async(weight , height , age) => {
  try {
    
    const res = await fetch("http://localhost:4000/user/updateattr", {
      method: "POST",
      body: JSON.stringify({ weight , height , age }),
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + JSON.parse(localStorage.getItem("token"))
      },
    });
    console.log(res.status !== 200);
    if (res.status !== 200) {

      return {
        success: false,
        res: await res.json(),
      };
    }

    const data = await res.json();

    return data
  } catch (err) {
    console.log(err.message);
  }
}