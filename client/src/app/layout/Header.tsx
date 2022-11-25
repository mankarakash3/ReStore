import { AppBar, Switch, Toolbar, Typography } from "@material-ui/core";


interface Props{
   darkmode :boolean;
   ThemeChangeHandler : ()=> void;
}
export default function Header({darkmode,ThemeChangeHandler}:Props) {
  
  return (
    <AppBar position="static" style={{ marginBottom: "32px" }}>
      <Toolbar>
        <Typography variant="h6">RE-STORE</Typography>
        <Switch checked={darkmode} onChange={ThemeChangeHandler} />
      </Toolbar>
    </AppBar>
  );
}
