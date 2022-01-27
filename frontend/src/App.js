import {Button, FormControl, Grid, OutlinedInput} from "@mui/material";

function App() {
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
						variant="outlined"
						placeholder="Email"
					/>
				</FormControl>
				<FormControl
					className={'form-control'}
					fullWidth
				>
					<OutlinedInput
						variant="outlined"
						placeholder="Password"
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

export default App;