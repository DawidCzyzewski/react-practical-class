import { useParams } from "react-router-dom";

export const ProductDetailsPage = () => {
  // I will use hook to get element params
  // const useParamsOutput = useParams()
  //   or destructurize
  const { productId, carpenter } = useParams();

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
    </div>
  );
};
