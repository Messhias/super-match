import React, {useRef} from "react";
import {BrowserRouter as Router, Route, Routes as Switch,} from "react-router-dom";
import Pages from "../pages";

const makeRoutes = () => {
	const publicPaths = {
		"/": Pages.Login,
		"/login": Pages.Login,
		"/test": Pages.TestPage,
	};

	return [
		...Object.entries(publicPaths).map((
			[
				path,
				component,
			]
		) => (
			<Route
				key={path}
				path={path}
				element={React.createElement(component, {})}
				exact
			/>
		)),
	];
};


const AppRoutes = () => {
	useRef("routes");

	return (
		<Router basename={"/"}>
			<Switch>
				{makeRoutes()}
			</Switch>
		</Router>
	);
}

export default AppRoutes;