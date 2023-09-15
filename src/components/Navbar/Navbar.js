import CartWidget from "../CartWidget/CartWidget";


const NavBar = () => {
    return (
        <nav>
            <h3>TiendiaMia</h3>
            <div>
                <button>Telefonos</button>
                <button>Tablets</button>
                <button>Notebooks</button>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;