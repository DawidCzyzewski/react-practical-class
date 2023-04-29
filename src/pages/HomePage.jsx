import { useEffect, useState } from "react";

export const Home = () => {
  const [universityList, setUniversityList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [country, setCountry] = useState("Poland");

  const baseUrl = "http://universities.hipolabs.com/search?";

  // First way to fetch is using useEffect
  // It's good practice to not use async like useEffect(async()=>{}). Instead of this, I should write new variable, if function will be used only in this place
  // useEffect(() => {
  //   const getUni = async () => {
  //     const firstCallUrl = `${baseUrl}country=Poland`;
  //     const uni = await fetch(firstCallUrl);
  //     const data = await uni.json();
  //     setUniversityList(data);
  //     setIsLoading(false);
  //   };

  //   setTimeout(() => getUni(), 3000);
  // }, []);

  // second way is using function without useEffect, on for example submit
  // const getUni = async (country) => {
  const getUni = async () => {
    // const countryValue = country ?? "Poland";

    // Difference between ?? and || is first check if value is false, so only null and undefinied. secony check if true so all of them

    // ''    ??    ''
    //       ||    'Poland'

    // 0   -  falsy
    // null  - false
    // undefined - false
    // false - falsy

    // const a = null;
    // const b = a ?? "something"; // something
    // console.log(b);
    // const c = a || "something"; //something
    // console.log(c);

    const a = ""; //0, false, {} <-falsy but not false
    const b = a ?? "something"; // ''
    console.log(b);
    const c = a || "something"; //something
    console.log(c);

    // const firstCallUrl = `${baseUrl}country=${countryValue}`;
    const firstCallUrl = `${baseUrl}country=${country}`;
    const uni = await fetch(firstCallUrl);
    const data = await uni.json();
    setUniversityList(data);
    setIsLoading(false);
  };

  //   const firstCallUrl = `${baseUrl}country=${country}`;
  //   await fetch(firstCallUrl).then((uni)=>{
  //   const data = await uni.json();
  //   setUniversityList(data);
  //   setIsLoading(false);
  //   })
  // })

  //   const value = event.target.value;
  // const handleChange = (event) => {
  //   setIsLoading(true);
  //   // console.log(value, isLoading);

  //   setCountry(value);
  //   getUni(value);

  //   setIsLoading(false);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    // const value = event.target.value;
    // console.log(value, isLoading);
    // getUni(value);

    setUniversityList([]);

    // try {
    getUni();
    // } catch (error) {
    //   console.log(error);
    // }
    //  finally {
    // setIsLoading(false);
    // }
  };

  const handleChange = (event) => {
    const value = event.target.value;
    // console.log(value, isLoading);
    setCountry(value);
  };

  useEffect(
    () => {
      //     //     // setTimeout(() =>
      //     //     // try {
      getUni();
      //     //     // } finally {
      //     //     // setIsLoading(false)
      //     // }
      //     // , 3000);
    },
    []
    //   // getUni
    //   // ]
  );

  // useEffect(() => {
  //   const getInitialUni = async () => {
  //     const firstCallUrl = `${baseUrl}country=${country}`;
  //     const uni = await fetch(firstCallUrl);
  //     const data = await uni.json();
  //     setUniversityList(data);
  //     setIsLoading(false);
  //   };
  //   getInitialUni();
  // }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="country" value={country} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      {isLoading ? (
        <div> Something is loading, please wait...</div>
      ) : (
        <div>
          {universityList.map((uni, index) => {
            return (
              <div key={index}>
                <p>Kraj: {uni.country}</p>
                <div>Nazwa: {uni.name}</div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
