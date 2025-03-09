function Header () {

    const headerIconStyle = {
        width: "275px",
        display: "inline"
    }
    return (
        <div className="header">
            <img src={require("./assets/prism-logo.png")} style={headerIconStyle} alt="prism icon"></img>
            <h1>Baldur's Gate 3 Random Class Generator</h1>
        </div>
        
    )
}

export default Header;