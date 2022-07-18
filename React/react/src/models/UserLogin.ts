interface UsuarioLogin{
    id: number;
    usuario: string;
    senha: string;
    foto: string;
    token: string | null;

}
export default UsuarioLogin;