import { CSSReset,Box,ColorModeProvider,Button, IconButton, ThemeProvider, theme, useColorMode } from "@chakra-ui/react";
import{MoonIcon, SunIcon} from '@chakra-ui/icons'


export default function Home() {

    return (

      <ThemeProvider theme={theme}>
        <ColorModeProvider>
        <CSSReset/>
        <LoginArea/>
        </ColorModeProvider>

      </ThemeProvider>
    )
}

const LoginArea=()=>{
    return(
        <flex>
            <Box>
                <ThemeSelector/>
            </Box>
        </flex>
    )
}

const ThemeSelector=()=>{
    const {colorMode,toggleColorMode}=useColorMode()

    if(colorMode==='light'){
    return(
        <Button colorScheme='teal' variant='outline' onClick={toggleColorMode}>
            <MoonIcon />  
        </Button>
    )
}else{
    return(
        <Button colorScheme='teal' variant='outline' onClick={toggleColorMode}>
            <SunIcon />  
        </Button>
    )
}
}