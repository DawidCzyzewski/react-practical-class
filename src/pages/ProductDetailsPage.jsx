import { useLocation, useParams, Link } from "react-router-dom";

export const ProductDetailsPage = () => {
  // I will use hook to get element params
  // const useParamsOutput = useParams()
  //   or destructurize
  const { productId, carpenter } = useParams();

  const location = useLocation();

  console.log(
    "In this location.state in ProductDetailsPage I have whole address: ",
    location.state
  );

  // But I can't get to this site (abc-123) from link, becouse there is no link state.from. To avoid this I can create
  const backLinkHref = location.state?.from ?? "/products";

  //   productId is first element after slash in URL, carpenter is second element after slash in URL. Check:
  //   http://localhost:3000/products/1/Dawid
  //   http://localhost:3000/products/2/Gash

  //   So I can ask server for only one product, not for all, for example:
  //   fetch(`${urlToBackend}/${productId}`);

  return (
    <div>
      I'm product details page
      <p>My productId is: {productId}</p>
      <p>My carpenter is: {carpenter}</p>
      {/* <Link to={location.state.from}>go to about without href</Link> */}
      <p></p> <Link to={backLinkHref}>go to about with backLinkHref</Link>
    </div>
  );
};
