const MenuItem = (props) => {
    return (
        <div className={`header-menu-item${props.highlight ? " header-menu-item-highlight" : ""}`}>
            <a href={props.link} title={props.label}>
                {
                    props.highlight && 
                        <img src={props.highlight} alt="" />
                }
                {props.label}
            </a>
        </div>
    )
}

export default MenuItem;