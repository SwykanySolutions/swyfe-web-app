import { useState } from "react";

const useSession = () => {

    const [ session, setSession ] = useState(false);

    if ( sessionStorage.getItem("status") != null && (sessionStorage.getItem("status") == "true" || sessionStorage.getItem("status") == "TRUE")) {
        setSession(true);
    } else {
        setSession(false);
    }

    return session;

}
export { useSession };