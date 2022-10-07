import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Selector } from '../../redux/Selector';

import "./Dashboard.scss";
import Categorys from './views/Categorys/Categorys';
import Groups from './views/Groups/Groups';
import Images from './views/Images/Images';
import Inventorys from './views/Inventorys/Inventorys';
import Overviews from './views/Overviews/Overviews';
import Productions from './views/Productions/Productions';
import Profile from './views/Profile/Profile';
import Tasks from './views/Tasks/Tasks';

function Dashboard(props) {
    const admin = useSelector(Selector.Admin.SelectorAdmin);   
    const [show, setShow] = useState("Overviews");

    const ShowSystem = (id) => {
        const ele = window.document.getElementById(id);
        ele.classList.toggle("d-none");
    };  

    const RenderViews = () => {
        switch (show) {
            case "Categorys": {
                return (<Categorys />)
            }
            case "Images": {
                return (<Images />)
            }
            case "Productions": {
                return (<Productions />)
            }
            case "Profile": {
                return (<Profile />)
            }
            case "Groups": {
                return (<Groups />)
            }
            case "Tasks": {
                return (<Tasks />)
            } 
            case "Inventorys": {
                return (<Inventorys />)
            }           
            default:
                {
                    return (<Overviews />)
                }
        }
    }
    return (
        <div id='dashboard'>
            <div className='dashboard_controller'>
                <div className='admin'>
                    <img className='' src={admin?.avatar} alt={admin.username} />
                    <p>{admin?.userName}</p>
                    <p>{admin?.type}</p>
                </div>
                <div className='innhanh_controller'>
                    <button onClick={() => setShow("Overviews")} className='btn_innhanh'>Overviews <i class="fab fa-battle-net"></i></button>
                    <button onClick={() => ShowSystem("Systems")} className='btn_innhanh'>Systems <i class="fa fa-tools"></i></button>

                    <div id='Systems' className='d-none'>                     
                        <button onClick={() => { setShow("Categorys") }} className='btn_innhanh'>Categorys <i class="fa fa-align-left"></i></button>
                        <button onClick={() => { setShow("Images") }} className='btn_innhanh'>Images <i class="fa fa-images"></i></button>
                        <button onClick={() => { setShow("Productions") }} className='btn_innhanh'>Productions <i class="fa fa-th-large"></i></button>
                    </div>
                    <button onClick={() => setShow("Inventorys")} className='btn_innhanh'>Inventorys <i class="fa fa-warehouse"></i></button>
                    <button onClick={() => setShow("Groups")} className='btn_innhanh'>Groups <i class="fa fa-network-wired"></i>   </button>
                    <button onClick={() => setShow("Tasks")} className='btn_innhanh'>Task <i class="fa fa-clipboard-list"></i></button>
                    <button onClick={() => setShow("Profile")} className='btn_innhanh'>Profile <i class="fa fa-tasks"></i></button>
                </div>
            </div>
            <div className='dashboard_main'>
                <div className='dashboard_top'>
                    <div className='dashboard_top-title'>
                        <button onClick={() => setShow("Overviews")} className='btn'><i class="fa fa-angle-left"></i></button>
                        <p>{show}</p>
                    </div>
                </div>
                <div className='dashboard_views'>
                    {
                        RenderViews()
                    }

                </div>
            </div>
        </div>
    );
}

export default Dashboard;