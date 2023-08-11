function Footer(props) {
  const footerStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    position: "fixed",
    bottom: "0",
    width: "100%",
  };
  return (
    <div data-id="footer" style={footerStyle}>
      This is the footer.
    </div>
  );
}
export default Footer;
