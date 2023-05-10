import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useLocation, useNavigate} from "react-router-dom";

function Detail(props) {
    const {state} = useLocation();
    const { id } = state;
    const [tour, setTour] = useState({})
    const navigate = useNavigate();
    useEffect(() => {
            axios.get(`http://localhost:3000/tours/${id}`)
                .then((data) => setTour(data.data))
        }
        , [])
    return (
        <div>
            <h1>Chi tiết tour</h1>
            <p>Tour du lịch {tour.title}</p>
            <p>Giá: {tour.price}</p>
            <p>Giới thiệu: {tour.description}</p>
            <button type="button" onClick={() => navigate("/")} className="btn btn-primary btn-space">Danh sách</button>
        </div>
    );
}

export default Detail;
