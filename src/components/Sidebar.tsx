import { NavLink } from "react-router";

function Sidebar() {

    return (
        <>
            <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style={{ width: "280px" }}>
                 <NavLink to="/" className="nav-link">
                    {/* <img src="" alt="" width="32" height="32" className="rounded-circle me-2" /> */}
                </NavLink>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link text-white link-body-emphasis bg-primary-hover" aria-current="page"> Home </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link text-white link-body-emphasis bg-secondary"> Dashboard </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link text-white link-body-emphasis bg-secondary"> Orders </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link text-white link-body-emphasis bg-secondary"> Products </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/" className="nav-link text-white link-body-emphasis bg-secondary"> Customers </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )

}

export default Sidebar;