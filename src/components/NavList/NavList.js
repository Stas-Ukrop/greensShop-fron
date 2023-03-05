export const NavList = ({ navList }) => {
    const newArray = navList.map((el, index) => (<li key={index}>{el}</li>))
    return (
        <ul>
            {navList.length > 0 && newArray}
        </ul>);
}