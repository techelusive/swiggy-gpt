
import { useAuth0 } from "@auth0/auth0-react"

const Logout = () => {

    const { logout } = useAuth0();

    return (
        <div className="border border-black bg-yellow-100 cursor-pointer">
        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
            Log Out
        </button>
        </div>
    );
};

export default Logout;