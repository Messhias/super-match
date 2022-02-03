import {Button, FormControl, Grid, OutlinedInput} from "@mui/material";
import {useState} from "react";

function Login() {
	const [email, emailOnChange] = useState(""),
		[password, passwordOnChange] = useState("");

	return (
		<Grid
			xs={12}
			sm={12}
			md={12}
			lg={12}
			container
			item
		>
			<Grid
				xs={12}
				sm={12}
				md={12}
				lg={12}
				id={"header"}
				container
				item
			>
				<h1>
					Super match
				</h1>
			</Grid>
			<Grid
				xs={12}
				sm={12}
				md={12}
				lg={12}
				className={"login-form"}
				container
				item
			>
				<FormControl
					className={'form-control'}
					fullWidth
				>
					<OutlinedInput
						type={"email"}
						variant="outlined"
						placeholder="Email"
						value={email}
						onChange={(event) =>
							emailOnChange(event.target.value)}
					/>
				</FormControl>
				<FormControl
					className={'form-control'}
					fullWidth
				>
					<OutlinedInput
						type={"password"}
						variant="outlined"
						placeholder="Password"
						value={password}
						onChange={(event) =>
							passwordOnChange(event.target.value)}
					/>
				</FormControl>
				<FormControl
					className={'form-control'}
					fullWidth
				>
					<Button variant={"outlined"} color={"primary"}>
						Login
					</Button>
				</FormControl>
			</Grid>
		</Grid>
	);
}

export default Login;