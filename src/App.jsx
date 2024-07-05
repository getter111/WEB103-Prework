import { useRoutes } from "react-router-dom";
import AddCreator from "./pages/AddCreator";
import EditCreator from "./pages/EditCreator";
import ShowCreator from "./pages/ShowCreators";
import ViewCreator from "./pages/ViewCreator";

function App() {
  const router = useRoutes([
    {
      path: "/",
      element: <ShowCreator />,
      //landing page
    },
    { path: "/add-creator", element: <AddCreator /> }, //add page
    { path: "/edit-creator/:creatorName", element: <EditCreator /> }, //edit page
    { path: "/view-creator/:creatorName", element: <ViewCreator /> }, //drill down for a creator
  ]);

  return <div>{router}</div>;
}
export default App;
