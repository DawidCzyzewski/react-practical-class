import { useState, createContext, useContext } from "react";

// const defaultValue = [1, 2, 3];
// const defaultValue = 5;
// const defaultValue = "Dawid";
// const defaultValue = { a: 1, b: "asda", c: true };
const defaultValue = "My first name";

// Function createContext creates context with few components; provider, consument...
// const MyContext = createContext(getDefaultValue());

export const UserContext = createContext(defaultValue);

// To every created context I must write provider. It's important to include children, becouse the providers are one under one, so if I got 5 contexts, it will be one after one, so all in one are children. If one of them will change, all children will be rerendered.
// return (
//   <Provider1>
//     <SomeProvider2>
//       <SomeProvider3>
//         <OneMoreProvider></OneMoreProvider>
//       </SomeProvider3>
//     </SomeProvider2>
//   </Provider1>
// );

// export const UserProvider = ({ children }) => {
//   const [username, setUserNname] = useState("");
//   return <div>{children}</div>;
// };

// instead of children, I can write UserContext and Provider after dot. UserContext.Provider and now I can write for example value
export const UserProvider = ({ children }) => {
  // Here are two states and two functions below exported to App:
  const [username, setUsername] = useState("Dawid");
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const [someArgument, setSomeArgument] = useState("Co się stało z abecadłem?");

  const logIn = () => {
    setIsLoggedIn(true);
    setUsername("Tomasz");
  };

  const logOut = () => {
    setIsLoggedIn(false);
    setUsername("");
  };
  //   const someFunc = () => {};

  return (
    <UserContext.Provider
      value={{
        username,
        setUsername,
        isLoggedIn,
        logIn,
        logOut,
        someArgument,
        setSomeArgument,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Here I create mini hook to useContext with UserContext and export it to App
export const useUser = () => useContext(UserContext);

// const user = useContext(UserContext);
