import React, {FC, ReactElement} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';
import Dashboard from '../scenes/Dashboard/Dashboard';
interface Props {
    title: string;
}
const Header: FC<Props> = ({title}): ReactElement => {
    return (
        <>
            <div>{title}</div>
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/Dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/Settings">Settings</Link>
                        </li>
                        <li>
                            <Link to="/Contact">Contact</Link>
                        </li>
                        <li>
                            <Link to="/lazy" className="item-link">
                                Lazy
                            </Link>
                        </li>
                        <li>
                            <NavLink to="/profile" activeClassName="active">
                                Profile
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <Switch>
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="*" component={NotFound} />
                </Switch>
            </Router>
        </>
    );
};

// function Header(props: Props): ReactElement {
//     return <div>{props.title}</div>;
// }
//     return <div>{props.title}</div>;
// }

function NotFound() {
    // eslint-disable-next-line react/no-unescaped-entities
    return <>You have landed on a page that doesn't exist</>;
}

export default Header;
