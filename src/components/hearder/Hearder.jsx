import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ApiConfig } from '../../config/api/ApiConfig';
import { ListCateSuccess } from '../../redux/Slice/CategorySlice';
import "./Hearder.scss";

function Hearder(props) {
    const dispath = useDispatch();
    useEffect(() => {
        const GetCategorys = async () => {
            await ApiConfig.Categorys.GetAll(dispath, ListCateSuccess);
        };
        GetCategorys();
    }, [])
    return (
        <div id='hearder'>
            Hearder
        </div>
    );
}

export default Hearder;