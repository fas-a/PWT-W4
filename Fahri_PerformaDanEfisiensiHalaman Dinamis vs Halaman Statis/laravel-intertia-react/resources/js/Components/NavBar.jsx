import SearchBar from "./SearchBar";
import logoImg from "./../assets/images/just-text.png";
import PropTypes from 'prop-types';
function NavBar(props) {
    return (
        <>
            <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
            {/* <!-- Logo --> */}
            <img src={logoImg} id="sidebar-logo" className="w-60 overflow-hidden transition-all" alt="Logo" />
                <SearchBar searchTerm = {props.searchTerm} handleInputChange = {props.handleInputChange}/>
            </nav>
        </>
    );
    }

NavBar.propTypes = {
    searchTerm: PropTypes.string.isRequired,
    handleInputChange: PropTypes.func.isRequired
};
export default NavBar;