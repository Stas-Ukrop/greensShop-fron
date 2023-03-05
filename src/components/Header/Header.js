
import { Nav } from "components/Nav/Nav"
import { NavList } from "components/NavList/NavList"
import { InlogPanel } from "components/InlogPanel/InlogPanel"
export const Header = ({ list, navList, chidren }) => {
    return <>
        <div>
            <NavList navList={navList} />
            <Nav list={list} />
            <InlogPanel />
        </div>
    </>
}