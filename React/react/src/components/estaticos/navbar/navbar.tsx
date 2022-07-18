import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button } from '@material-ui/core';
import './navbar.css';
import { Link, useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from 'react-toastify';

function Navbar() {
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    )
    const dispatch = useDispatch()
    let navigate = useNavigate();

    function goLogout (){
        dispatch(addToken(''));
        toast.info('Usuário deslogado!',{ 

            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored"
        })
        navigate('/login')
    }
    var navbarComponent;
    if(token != ""){
        navbarComponent = <AppBar position="static">
            <Toolbar variant="dense">
                <Box className='cursor' >
                    <Typography variant="h4" >
                        Vida Dev
                    </Typography>
                </Box>
                
                    <Box display="flex" justifyContent="start">
                        <Link to="/home" className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    home
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='/posts' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    postagens
                                </Typography>
                            </Box>
                        </Link>

                        <Link to='temas' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    temas
                                </Typography>
                            </Box>
                        </Link>
                        
                        <Link to='formularioTema' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    cadastrar tema
                                </Typography>
                            </Box>
                        </Link>


                        <Box mx={1} className='cursor' onClick={goLogout}>
                            <Typography variant="h6" color="inherit">
                                logout
                            </Typography>
                        </Box>
                    
                    
                </Box>

            </Toolbar>
        </AppBar>
    }
    return (
        <>
        {navbarComponent}
       
    </>
    )
}

export default Navbar;