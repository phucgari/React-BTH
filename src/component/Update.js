import React, {useEffect, useState} from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import axios from "axios";

function Update(props) {
    const {state} = useLocation();
    const { id } = state;
    const [tour, setTour] = useState({})
    const navigate = useNavigate();
    useEffect(() => {
            axios.get(`http://localhost:3000/tours/${id}`)
                .then((data) => setTour(data.data))
        }
        , [])
    console.log(tour)
    return (
        <div>
            <Formik
                initialValues={tour}
                onSubmit={async (values,action) => {
                    axios.put(`http://localhost:3000/tours/${id}`,values).then(
                        (data)=>alert(`Sửa ${data.data.title} thành công!`)
                    )
                }}
                enableReinitialize={true}
            >
                <Form>
                    <label htmlFor="title" className="form-label">Tên tour</label>
                    <Field id="title" class="form-control" name="title" />
                    <br/>
                    <label htmlFor="price" className="form-label">Giá</label>
                    <Field id="price" class="form-control" type="number" name="price" />
                    <br/>
                    <label htmlFor="description" className="form-label">Mô tả</label>
                    <Field
                        class="form-control"
                        id="description"
                        name="description"
                        as="textarea"
                    />
                    <br/>
                    <button type="submit" className="btn btn-secondary">Sửa</button>
                    <button type="button" onClick={() => navigate("/")} className="btn btn-primary btn-space">Thoát</button>
                </Form>
            </Formik>
        </div>
    );
}

export default Update;