// import LinearProgress from "@mui/material/LinearProgress";
import React from "react";

interface ILinearOrderProps {
	style?: React.CSSProperties;
}

const LinearLoader: React.FunctionComponent<ILinearOrderProps> = ({ style }) => {
	return (
		<div style={style}>
			{/* <LinearProgress /> */}
		</div>
	);
};

export default LinearLoader;
