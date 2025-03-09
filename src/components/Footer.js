import "../assets/styles/Footer.css"
const Footer = () => {
    return (
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} M Blog. All Rights Reserved.</p>
        </footer>
    );
}
 
export default Footer;