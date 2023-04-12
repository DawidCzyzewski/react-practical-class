import { Outlet, Link } from "react-router-dom";

// export const AboutPage = () => {
//   return (
//     <>
//       <h2>Lorem Ipsum, AboutPage</h2>
//       <Outlet />
//     </>
//   );
// };

export const AboutPage = () => {
  return (
    <>
      <h2>Lorem Ipsum, AboutPage</h2>
      <ul>
        <li>
          <Link to="mission">Read about mission</Link>
        </li>
        <li>
          <Link to="team">Meet our team</Link>
        </li>
        <li>
          <Link to="reviews">See what people think!</Link>
        </li>
        <li>
          <Link to="/products">Back to products</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
