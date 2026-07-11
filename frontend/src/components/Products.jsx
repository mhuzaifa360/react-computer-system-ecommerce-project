import React, { useEffect, useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { MdModeEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa6";
import Typography from "./common/Typography";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [loading, setLoading] = useState(false);

  const API = "http://localhost:3000/v1";

  // ================= GET CATEGORIES =================
  const getCategories = async () => {
    try {
      const res = await axios.get(`${API}/getCategory`);
      setCategories(res.data?.data || res.data || []);
    } catch (err) {
      console.log(err);
      setCategories([]);
    }
  };

  // ================= GET PRODUCTS =================
  const getProducts = async () => {
    try {
      const res = await axios.get(`${API}/getProduct`);
      setProducts(res.data?.data || res.data || []);
    } catch (err) {
      console.log(err);
      setProducts([]);
    }
  };

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  // ================= CREATE PRODUCT =================
  const createProduct = async (formData, resetForm) => {
    setLoading(true);
    try {
      await axios.post(`${API}/createProduct`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      resetForm();
      getProducts();
      alert("Product created!");
    } catch (err) {
      console.log(err);
      alert("Error creating product");
    } finally {
      setLoading(false);
    }
  };

  // ================= UPDATE PRODUCT =================
  const updateProduct = async (id, formData, resetForm) => {
    setLoading(true);
    try {
      await axios.put(`${API}/updateProduct/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      resetForm();
      setEditingProduct(null);
      getProducts();
      alert("Product updated!");
    } catch (err) {
      console.log(err);
      alert("Error updating product");
    } finally {
      setLoading(false);
    }
  };

  // ================= DELETE PRODUCT =================
  const deleteProduct = async (id) => {
    if (window.confirm("Delete this product?")) {
      try {
        await axios.delete(`${API}/deleteProduct/${id}`);
        getProducts();
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* ================= FORM ================= */}
      <div className="bg-white p-6 rounded shadow">
        <Typography varient="h3">
          {editingProduct ? "Edit Product" : "Add Product"}
        </Typography>

        <Formik
          enableReinitialize
          initialValues={{
            productName: editingProduct?.productName || "",
            productPrice: editingProduct?.productPrice || "",
            productCategory: editingProduct?.productCategory || "",
            productAvailability:
              editingProduct?.productAvailability || "In Stock",
            freeShipping: editingProduct?.freeShipping || false,
            productDescription: editingProduct?.productDescription || "",
            productImage: null,
          }}
          validationSchema={Yup.object({
            productName: Yup.string().required(),
            productPrice: Yup.number().required(),
            productCategory: Yup.string().required(),
            productDescription: Yup.string().required(),
          })}
          onSubmit={(values, { resetForm }) => {
            const formData = new FormData();

            formData.append("productName", values.productName);
            formData.append("productPrice", values.productPrice);
            formData.append("productCategory", values.productCategory);
            formData.append("productAvailability", values.productAvailability);
            formData.append(
              "freeShipping",
              values.freeShipping ? "true" : "false",
            );
            formData.append("productDescription", values.productDescription);

            if (values.productImage) {
              formData.append("productImage", values.productImage);
            }

            if (editingProduct?.id) {
              updateProduct(editingProduct.id, formData, resetForm);
            } else {
              createProduct(formData, resetForm);
            }
          }}
        >
          {({ values, handleChange, setFieldValue }) => (
            <Form className="space-y-4 mt-4">
              {/* NAME */}
              <input
                name="productName"
                value={values.productName}
                onChange={handleChange}
                placeholder="Product Name"
                className="w-full p-2 bg-slate-200 rounded"
              />
              <ErrorMessage
                name="productName"
                component="div"
                className="text-red-500"
              />

              {/* PRICE */}
              <input
                name="productPrice"
                type="number"
                value={values.productPrice}
                onChange={handleChange}
                placeholder="Price"
                className="w-full p-2 bg-slate-200 rounded"
              />
              <ErrorMessage
                name="productPrice"
                component="div"
                className="text-red-500"
              />

              {/* CATEGORY DROPDOWN */}
              <select
                name="productCategory"
                value={values.productCategory}
                onChange={handleChange}
                className="w-full p-2 bg-slate-200 rounded"
              >
                <option value="">Select Category</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.categoryName}>
                    {cat.categoryName}
                  </option>
                ))}
              </select>
              <ErrorMessage
                name="productCategory"
                component="div"
                className="text-red-500"
              />

              {/* AVAILABILITY */}
              <select
                name="productAvailability"
                value={values.productAvailability}
                onChange={handleChange}
                className="w-full p-2 bg-slate-200 rounded"
              >
                <option value="In Stock">In Stock</option>
                <option value="Out Of Stock">Out Of Stock</option>
              </select>
              <ErrorMessage
                name="productAvailability"
                component="div"
                className="text-red-500"
              />

              {/* FREE SHIPPING */}
              <label className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  checked={values.freeShipping}
                  onChange={() =>
                    setFieldValue("freeShipping", !values.freeShipping)
                  }
                />
                Free Shipping
              </label>
              <ErrorMessage
                name="freeShipping"
                component="div"
                className="text-red-500"
              />

              {/* DESCRIPTION */}
              <textarea
                name="productDescription"
                value={values.productDescription}
                onChange={handleChange}
                className="w-full p-2 bg-slate-200 rounded"
                placeholder="Description"
              />
              <ErrorMessage
                name="productDescription"
                component="div"
                className="text-red-500"
              />

              {/* IMAGE */}
              <input
                type="file"
                onChange={(e) =>
                  setFieldValue("productImage", e.currentTarget.files[0])
                }
              />

              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded w-full"
              >
                {loading
                  ? "Saving..."
                  : editingProduct
                    ? "Update Product"
                    : "Create Product"}
              </button>

              {editingProduct && (
                <button
                  type="submit"
                  onClick={() => setEditingProduct(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded w-full"
                >
                  Cancel
                </button>
              )}
            </Form>
          )}
        </Formik>
      </div>

      {/* ================= PRODUCT CARDS ================= */}
      <div className="flex flex-wrap gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="w-72 bg-white shadow rounded overflow-hidden"
          >
            {/* IMAGE */}
            <img
              src={`http://localhost:3000/v1/uploads/${p.productImage}`}
              alt="product"
              className="h-40 w-full object-cover"
            />

            <div className="p-4 space-y-2">
              <h2 className="font-bold">{p.productName}</h2>
              <p className="text-green-600">Rs: {p.productPrice}</p>
              <p className="text-sm">{p.productCategory}</p>
              <p className="text-xs text-gray-500">{p.productAvailability}</p>
              <p className="text-xs">
                {p.freeShipping ? "Free Shipping" : "No Free Shipping"}
              </p>

              {/* ACTIONS */}
              <div className="flex gap-3 mt-3">
                {/* edit */}
                <button
                  onClick={() => setEditingProduct(p)}
                  className="bg-yellow-500 p-2 rounded text-white"
                >
                  <MdModeEdit />
                </button>

                {/* delete */}
                <button
                  onClick={() => deleteProduct(p.id)}
                  className="bg-red-600 p-2 rounded text-white"
                >
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
