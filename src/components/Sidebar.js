import React from "react";
import { Nav } from "react-bootstrap";
import { withRouter } from "react-router";

const Side = props => {

    return (
        <>
            <Nav className="col-md-12 d-none d-md-block sidebar"
            >
                <div className="sidebar-sticky"></div>
                <Nav.Item>
                    <Nav.Link href="/pcs">PCs</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="npcs">NPCs</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="towns">Towns</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    );
};
const Sidebar = withRouter(Side);
export default Sidebar