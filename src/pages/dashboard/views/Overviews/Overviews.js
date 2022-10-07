import React, { useEffect, useState } from 'react';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import "./Overviews.scss";
import { ApiConfig } from '../../../../config/api/ApiConfig';
import { useDispatch, useSelector } from 'react-redux';
import { CompanySuccess } from '../../../../redux/Slice/CompanySlice';
import { Selector } from '../../../../redux/Selector';


ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function Overviews(props) {
    const dispath = useDispatch();
    const [editCompany, setEditCompany] = useState(false);
    const [editBranch, setEditBranch] = useState();
    const [website, setWebsite] = useState("");
    const [timeWorlk, setTimeWorlk] = useState();

    const [branchName, setBranchName] = useState();
    const [branchAdress, setBranchAdress] = useState();
    const [branchPhone, setBranchPhone] = useState();
    const [branchEmail, setBranchEmail] = useState();
    const [branchZalo, setBranchZalo] = useState();

    const [maintance, setMaintance] = useState();

    useEffect(() => {
        const CheckMaintance = async () => {
            await ApiConfig.Maintenances.Check(setMaintance);
        };
        CheckMaintance();
    })

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            title: {
                display: true,
                text: 'Bảng Thống Kê Đơn Hàng',
            },
        },
    };
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const data = {
        labels,
        datasets: [
            {
                label: 'In Nhanh',
                data: labels.map(() => {
                    return Math.random() * 80;
                }),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: 'In Quảng Cáo',
                data: labels.map(() => {
                    return Math.random() * 80;
                }),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
            {
                label: 'In Bản Vẽ',
                data: labels.map(() => {
                    return Math.random() * 80;
                }),
                backgroundColor: 'rgba(53, 80, 235, 0.5)',
            },
        ],
    };

    useEffect(() => {
        const GetCompany = async () => {
            await ApiConfig.Companys.Detail(2, dispath, CompanySuccess);
        };
        GetCompany();
    }, []);

    const InNhanh = useSelector(Selector.Companys.SelectorCompany);

    const handleDeleteBranch = (id) => {
        alert(id)
    };

    const handleEditBranch = async (id) => {
        await ApiConfig.Companys.Branchs.Edit(id, branchName, branchAdress, branchPhone, branchEmail, branchZalo);
        await ApiConfig.Companys.Detail(2, dispath, CompanySuccess);
        setEditBranch("");

    };

    const handleEditStatus = async (status) => {
        await ApiConfig.Maintenances.Edit(status);
        await ApiConfig.Maintenances.Check(setMaintance);
    };


    return (
        <div id='overviews'>
            <div className='thongke'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='thongke_item'>
                            <i className="fa fa-user-cog"></i>
                            <h2>Admins</h2>
                            <h1>05</h1>
                        </div>

                    </div>
                    <div className='col-3'>
                        <div className='thongke_item'>
                            <i className="fa fa-users"></i>
                            <h2>Staffs</h2>
                            <h1>05</h1>
                        </div>

                    </div>
                    <div className='col-3'>
                        <div className='thongke_item'>
                            <i className="fa fa-user-alt"></i>
                            <h2>Clients</h2>
                            <h1>1,2T</h1>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='thongke_item'>
                            <i className="fa fa-user-shield"></i>
                            <h2>Client</h2>
                            <h1>05</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='chart'>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-danger">Chart</button>
                    <button type="button" className="btn btn-primary">Pie</button>
                    <button type="button" className="btn btn-primary">Line</button>
                </div>
                <Bar options={options} data={data} />

            </div>
            <div className='company'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-3'>
                            <div className='Maintenances'>
                                <p>Maintenances</p>
                                <div className='Maintenances_item'>
                                    <labels htmlFor="on">On</labels>
                                    <input onChange={() => setMaintance(!maintance)} id='on' type={"checkbox"} checked={maintance} />
                                </div>
                                <div className='Maintenances_item'>
                                    <labels htmlFor="off">Off</labels>
                                    <input id='off' type={"checkbox"} checked={!maintance} />
                                </div>
                                <div class="btn-group" role="group" aria-label="Basic example">
                                    <button onClick={() => handleEditStatus(false)} disabled={!maintance} type="button" class="btn btn-secondary">Off</button>
                                    <button onClick={() => handleEditStatus(true)} disabled={maintance} type="button" class="btn btn-secondary">On</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-3'>
                            <img className='w-50' src={InNhanh?.logo} alt={InNhanh?.name} />
                            <p>{InNhanh?.website}</p>
                            <p>{InNhanh?.timeWorlk}</p>
                            <button className='btn'>Edit</button>

                        </div>
                        {
                            InNhanh?.Branchs.map((branch, index) => {
                                return (
                                    <div key={index} className='col-3'>
                                        <div className={`branch-${branch.id}`}></div>
                                        {
                                            editBranch === `branch-${branch.id}` ?
                                                <>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text" id="basic-addon1">@</span>
                                                        </div>
                                                        <input type="text" className="form-control" onChange={(e) => setBranchName(e.target.value)} value={branchName} />
                                                    </div>

                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text" id="basic-addon1">@</span>
                                                        </div>
                                                        <input type="text" className="form-control" onChange={(e) => setBranchAdress(e.target.value)} value={branchAdress} />
                                                    </div>

                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text" id="basic-addon1">@</span>
                                                        </div>
                                                        <input type="text" className="form-control" onChange={(e) => setBranchPhone(e.target.value)} value={branchPhone} />
                                                    </div>

                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text" id="basic-addon1">@</span>
                                                        </div>
                                                        <input type="text" className="form-control" onChange={(e) => setBranchEmail(e.target.value)} value={branchEmail} />
                                                    </div>

                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text" id="basic-addon1">@</span>
                                                        </div>
                                                        <input type="text" className="form-control" onChange={(e) => setBranchZalo(e.target.value)} value={branchZalo} />
                                                    </div>

                                                    <div className="btn-group" role="group" aria-label="Basic example">
                                                        <button onClick={() => setEditBranch("")} type="button" className="btn btn-secondary">Cancle</button>
                                                        <button onClick={() => handleEditBranch(branch.id)} type="button" className="btn btn-secondary">Save</button>

                                                    </div>
                                                </>
                                                :
                                                <>
                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text" id="basic-addon1">Name</span>
                                                        </div>
                                                        <input readOnly='true' type="text" className="form-control" value={branch?.name} />
                                                    </div>

                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text" id="basic-addon1"><i className="fa fa-map-marker-alt"></i></span>
                                                        </div>
                                                        <input readOnly='true' type="text" className="form-control" value={branch?.adress} />
                                                    </div>

                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text" id="basic-addon1"><i className="fa fa-phone-volume"></i></span>
                                                        </div>
                                                        <input readOnly='true' type="text" className="form-control" value={branch?.phone} />
                                                    </div>

                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text" id="basic-addon1"><i className="fa fa-envelope"></i></span>
                                                        </div>
                                                        <input readOnly='true' type="text" className="form-control" value={branch?.email} />
                                                    </div>

                                                    <div className="input-group mb-3">
                                                        <div className="input-group-prepend">
                                                            <span className="input-group-text" id="basic-addon1">Zalo</span>
                                                        </div>
                                                        <input readOnly='true' type="text" className="form-control" value={branch?.zalo} />
                                                    </div>
                                                    <div className="btn-group" role="group" aria-label="Basic example">
                                                        <button onClick={() => {
                                                            setEditBranch(`branch-${branch.id}`);
                                                            setBranchName(branch.name);
                                                            setBranchAdress(branch.adress);
                                                            setBranchPhone(branch.phone);
                                                            setBranchEmail(branch.email);
                                                            setBranchZalo(branch.zalo);
                                                        }} type="button" className="btn btn-secondary">Edit</button>
                                                        <button onClick={() => handleDeleteBranch(branch.id)} type="button" className="btn btn-secondary">Delete</button>

                                                    </div>

                                                </>
                                        }

                                    </div>
                                )
                            })
                        }
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Overviews;