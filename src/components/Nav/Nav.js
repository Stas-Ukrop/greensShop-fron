export const Nav = ({ list }) => {
    const newArray = list.map((el, index) => (<li key={index}>{el}</li>))
    console.log(list, "-Nav")
    return (
        <ul>
            {list.length > 0 && newArray}
        </ul>);
}