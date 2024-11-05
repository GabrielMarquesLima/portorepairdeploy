import LoginButtonComponent from "./LoginButtonComponent";
import LogoComponent from "./LogoComponent";
import MenuComponent from "./MenuComponent";

export default function Header() {
    return(
        <header className="flex items-center justify-between px-4 py-3 border-b border-gray-300">
            <LogoComponent />
            <MenuComponent />
            <LoginButtonComponent />
        </header>
    )
}
