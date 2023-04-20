import { useMemo } from "react";
import { useSearchParams, Link, useLocation } from "react-router-dom";

export const ProductsPage = () => {
  // When I write in search in browser link:
  // http://localhost:3000/products?maxAge=60&color=red&name=adidas&maxPrice=300#jakis-hasztag
  // Nothing will happens. If I want to listen this elements after products? I can use hook useSearchParams. I can use this even to analytics. Every setSearchParams will add element to history, so if I will input many letters, I must click back on every of them to back to previous site. That for is
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  // console.log({ searchParams }); // -> 0: maxAge → "60"  1: color → "red"2: name → "adidas"  3: maxPrice → "300"

  // using params like under is good, if there is a few params, but if I got more params, it could be problematic
  // const allParams = searchParams.getAll("");
  // const name = searchParams.get("name");
  // const maxAge = searchParams.get("maxAge");
  // const color = searchParams.get("color");
  // const maxPrice = searchParams.get("maxPrice");
  // const nonExcisting = searchParams.get("kadabra");

  // console.log({ allParams, name, nonExcisting });

  // all abrove are returning as string. even if it is number or boolean
  // console.log("max age: ", maxAge, "type of maxAge: ", typeof maxAge);
  // if I want to make it boolean or number, I can: Number(maxAge) or even in const maxAge = Number(searchParams.get('maxAge')) or Boolean(value)

  // if the params is more, I can use useMemo() and Object.fromEntries. useMemo is usefull for not rendering element, not starting function Object.fromEntries when any of them won't change and function Object.fromEntries make pairs from elements of object:
  // const params = useMemo(() => {
  //   return Object.fromEntries([...searchParams]);
  // }, [searchParams]);

  // less code:
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );

  // I use question marks becouse on begin there is no params, later there are, so I must add this
  const { maxAge, maxPrice, color } = params;
  const name = params?.name ?? location?.state?.previousSearch;

  // in this case input will change all address on including only name param:
  // const handleNameChange = (event) => {
  //   console.log(event.target.value);
  //   const value = event.target.value;
  //   setSearchParams({
  //     name: value,
  //   });
  // };

  // to save elements]'[]  // const oldParams = Object.fromEntries([...searchParams]);

  // console.log({ oldParams });

  // in this case input will change only name, without other params:
  const handleNameChange = (event) => {
    // console.log(event.target.value);
    const value = event.target.value;
    setSearchParams({
      ...params,
      name: value,
    });
  };

  return (
    <>
      <h4>Hello, I'm product :D </h4>
      <p> Name: {name}</p>
      <p> Max age: {maxAge}</p>
      <p>Color: {color}</p>
      <p>maxPrice: {maxPrice}</p>
      <label htmlFor="name">Name will change also in searchbar: </label>
      <input type="text" value={name} onChange={handleNameChange} id="name" />
      <p>
        {/* When I use state in Link, I go to ProductDetailsPage and under useParams add location=useLocation */}
        {/* <Link to="/products/abc-123" state={{ from: "/products" }}> */}
        {/* <Link
          to="/products/abc-123"
          state={{ from: "/about", previousSearch: name }}
        > */}
        <Link
          to="/products/abc-123"
          state={{ from: location, previousSearch: name }}
        >
          Navigate to product number abc-123
        </Link>
      </p>
    </>
  );
};
