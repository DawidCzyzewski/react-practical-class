import { Route, Routes } from "react-router-dom";
// import { Username } from "./Components/Username";
import { UserPage } from "./pages/UserPage";
import { Home } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { AboutPage } from "./pages/AboutPage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductDetailsPage } from "./pages/ProductDetailsPage";
import { MissionPage } from "./pages/MissionPage";
import { ReviewsPage } from "./pages/ReviewsPage";
import { TeamPage } from "./pages/TeamPage";
import { SharedLayout } from "./Components/SharedLayout";

const App = () => {
  return (
    <div>
      {/* <SharedLayout /> */}
      {/* Routes is some kind of container dedicated to have our *URLs* in this place, to not searching in all folders and files */}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          {/* second element is Route. Route is function which take two elements: path and element. Even if it will be only one Route, I should place it in Routes */}
          {/* My element now will be only visable, when I open localhost:3000/user */}
          {/* <Route path="/user" element={<Username />} /> */}
          {/* Instead using here element Username, it's better to create function or other element in folder pages, in this example UserPage */}
          <Route path="/user" element={<UserPage />} />
          {/* <Route path="/about" element={<AboutPage />} />
        <Route path="/about/mission" element={<Mission />} />
        <Route path="/about/team" element={<Team />} />
        <Route path="/about/reviews" element={<Reviews />} /> */}

          {/* But to do this, I must add Outlet in AboutPage and here not use slash before nested elements */}
          <Route path="/about" element={<AboutPage />}>
            <Route index element={<MissionPage />} />
            <Route path="mission" element={<MissionPage />} />

            <Route path="team" element={<TeamPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>

          <Route path="/products" element={<ProductsPage />} />
          {/* To get in exact element (by dynamic link), I must write slash and colon and element id, it could be everything, like "1" or "asdasda" etc */}
          <Route
            path="/products/:productId/:carpenter"
            element={<ProductDetailsPage />}
          />
        </Route>
        {/* If I don't want to have non existing road, I need to create default address for this */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
