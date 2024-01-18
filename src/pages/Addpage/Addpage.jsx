import React, { useContext, useEffect, useState } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Addpage.scss'
import { SearchContext } from '../../context/SearchContext';
import { Helmet } from 'react-helmet';
function Addpage() {
  const [data, setData] = useState([])
  const { handleSearch,search } = useContext(SearchContext)

  function getAll() {
    fetch("http://localhost:2020/")
      .then((res) => res.json())
      .then((api) => setData(api))
  }


  useEffect(() => {
    getAll()
  }, [])


  async function addFormik(data) {
    await fetch("http://localhost:2020/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    await getAll()
  }



  async function deleteFormik(id) {
    await fetch(`http://localhost:2020/${id}`, {
      method: "DELETE",

    })
    await getAll()
  }

  return (
    <>
    <Helmet><title>Add</title></Helmet>

      <div className='add'>
        <input type="text" onChange={handleSearch} />

        <Formik
          initialValues={{ name: '', title: '', price: '' }}
          validationSchema={Yup.object({
            name: Yup.string()
              .required('Required'),
            title: Yup.string()
              .required('Required'),
            price: Yup.number().required('Required'),
          })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              setSubmitting(false);
              addFormik(values)
              resetForm()
            }, 400);
          }}
        >
          <Form>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" />

            <label htmlFor="title">Title</label>
            <Field name="title" type="text" />
            <ErrorMessage name="title" />

            <label htmlFor="price">price</label>
            <Field name="price" type="text" />
            <ErrorMessage name="price" />
            <button type="submit">Submit</button>
          </Form>
        </Formik>


        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Title</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>

            {data
            .filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
            .map((x) => (
              <tr>
                <td>{x.name}</td>
                <td>{x.title}</td>
                <td>{x.price}</td>
                <td onClick={() => deleteFormik(x._id)}><i class="fa-solid fa-trash-can"></i></td>
              </tr>
            ))}
          </tbody>





        </table>
      </div>

    </>
  )
}

export default Addpage