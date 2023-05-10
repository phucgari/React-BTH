import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";

function ShowList(props) {
    const navigate = useNavigate();

    const [list, setList] = useState([])
    useEffect(() => {
            axios.get("http://localhost:3000/tours").then(
                (data) => setList(data.data)
            )
        }
        , []
    )
    return (
        <>
            <button type="button" onClick={() => navigate("/create")} className="btn btn-primary btn-space">Thêm</button>
            <table className="table">
                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Tên</th>
                    <th scope="col">Giá</th>
                    <th scope="col"></th>
                </tr>
                </thead>
                <tbody>
                {list.map((tour) =>
                    <tr>
                        <th scope="row">{tour.id}</th>
                        <td onClick={() => navigate("/detail", {state: {id: tour.id}})}>{tour.title}</td>
                        <td>{tour.price}</td>
                        <td>
                            <button type="button" onClick={() => navigate("/update", {state:{id: tour.id}})}
                                    className="btn btn-primary btn-space">edit
                            </button>
                            <button type="button" onClick={() => navigate("/delete", {state:{id: tour.id}})}
                                    className="btn btn-secondary">delete
                            </button>
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </>
    );
}

export default ShowList;