import * as React from "react";
import { NavMenu } from './NavMenu';

interface LayoutProps {
    children: React.ReactNode,
}

export const Layout = (props: LayoutProps) => {
    return (<div>
        <NavMenu />
        <div>
            {props.children}
        </div>
    </div>);
};