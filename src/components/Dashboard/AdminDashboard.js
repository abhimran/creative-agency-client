import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loginContext } from '../../contexts/LoginContext';
import logo from '../../images/logos/logo.png'
import '../Dashboard/Admin.css'
import Home from './Home'
import Order from './Order'
import Review from './Review'
import Service from './Service'
import ServiceList from './ServiceList'
import AddService from './AddService'
import MakeAdmin from './MakeAdmin'
import { faPlus, faComments, faUserPlus, faCartPlus, faServer, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import SplitPane from 'react-split-pane';

const AdminDashboard = () => {
     const {loggedInUser, signOut} = useContext(loginContext)
     const [isadmin, setIsadmin] = useState([]);
        const styles = {
            background: '#000',
            width: '2px',
            cursor: 'col-resize',
            margin: '0 5px',
            height: '200%',
        };

        useEffect(() => {
        fetch('https://tranquil-spire-26081.herokuapp.com/admins?email=' + loggedInUser.email)
            .then(res => res.json())
            .then(data => {
                if(data.length !== 0){
                    setIsadmin(loggedInUser)
                }
            })
    }, [])

    return (
        <Router>
            <SplitPane
            split="vertical"
            minSize={100}
            defaultSize={100}
            resizerStyle={styles}
            >
            <menu>
                <div className="dashboard__logo">
                    <a href="/">
                        <img src={logo} alt=""/>
                    </a>
                </div>
                <div><Link className="Link-common" to="/dashboard"><FontAwesomeIcon icon={faHome}/>Home</Link></div>
                {
                    (isadmin.isSignin ? (
                        <>
                            <div><Link className="Link-common" to="/dashboard/servicelist"><FontAwesomeIcon icon={faServer}/>Service List</Link></div>
                            <div><Link className="Link-common" to="/dashboard/addservice"><FontAwesomeIcon icon={faPlus}/>Add Service</Link></div>
                            <div><Link className="Link-common" to="/dashboard/makeadmin"><FontAwesomeIcon icon={faUserPlus}/>Make Admin</Link></div>
                        </>
                    ):(
                        <>
                            <div><Link className="Link-common" to="/dashboard/order"> <FontAwesomeIcon icon={faCartPlus}/>Order</Link></div>
                            <div><Link className="Link-common" to="/dashboard/service"> <FontAwesomeIcon icon={faServer}/>Service</Link></div>
                            <div><Link className="Link-common" to="/dashboard/review"><FontAwesomeIcon icon={faComments}/>Review</Link></div>
                        </>
                    ))
                }

                <div className="dashboard-logout"><button className="common-btn" onClick={signOut}>Sign Out</button></div>
            </menu>
            <div>
                <Route exact path="/dashboard" component={Home} />
                <Route path="/dashboard/order" component={Order} />
                <Route path="/dashboard/review" component={Review} />
                <Route path="/dashboard/service" component={Service} />
                <Route path="/dashboard/servicelist" component={ServiceList} />
                <Route path="/dashboard/addservice" component={AddService} />
                <Route path="/dashboard/makeadmin" component={MakeAdmin} />
            </div>
            
            </SplitPane>
        </Router>
    );
};

export default AdminDashboard;