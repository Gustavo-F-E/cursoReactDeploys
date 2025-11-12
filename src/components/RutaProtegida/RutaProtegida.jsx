import { useAuthContext } from "../../context/AuthContext/useAuthContext";

export const RutaProtegida = ({children}) => {
    const {user} = useAuthContext();

    if(!user){
        return <Navigate to="/" replace/>; /* Para q no se guarde en el historial de navegacion */
    }
    return children;
}