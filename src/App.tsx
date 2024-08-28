// import { CircularLoader } from "./components/Common";
// import { useLoading } from "./hooks";
import AppRoutes from "./services/routes";
import './App.css'

function App() {
	// const [userLoading, setUserLoading] = useLoading(true);

	// if (userLoading) {
	// 	return <CircularLoader />;
	// }

	return <AppRoutes />;
	// return <><h1>Here</h1></>
}

export default App;
