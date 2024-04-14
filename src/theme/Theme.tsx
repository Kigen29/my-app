import React from "react";
import { ThemeProvider,createTheme} from "@mui/material/styles";


type ThemeProps = {children:React.ReactNode};

const theme = createTheme({
palette:{
primary:{
main: '#46b983',
}
}
});

const Theme=({children}:ThemeProps)=>{
    return<ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default Theme;