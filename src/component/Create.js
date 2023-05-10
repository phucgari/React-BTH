import React from 'react';
import {useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import axios from "axios";

function Create(props) {
    const navigate = useNavigate();
    return (
        <div>
            <Formik
                initialValues={{
                    title: '',
                    price: '',
                    description: '',
                }}
                onSubmit={async (values,action) => {
                    axios.post("http://localhost:3000/tours",values).then(
                        (data)=>alert(`thêm ${data.data.title} thành công!`)
                    )
                    action.resetForm()
                }}
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
                    <button type="submit" className="btn btn-secondary">Thêm mới</button>
                    <button type="button" onClick={() => navigate("/")} className="btn btn-primary btn-space">Thoát</button>
                </Form>
            </Formik>
        </div>
    );
}

export default Create;
