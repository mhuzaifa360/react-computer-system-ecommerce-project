import React, { useEffect, useState } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import { MdModeEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa6";
import Typography from "./common/Typography";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [editingCategory, setEditingCategory] = useState(null);
  const [loading, setLoading] = useState(false);

  // ================= GET ALL CATEGORIES =================
  const getCategories = async () => {
    try {
      const response = await axios.get("http://localhost:3000/v1/getCategory");
      
      // Safe array handling
      if (response.data && Array.isArray(response.data)) {
        setCategories(response.data);
      } else if (response.data && response.data.data && Array.isArray(response.data.data)) {
        setCategories(response.data.data);
      } else {
        setCategories([]);
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      setCategories([]);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  // ================= GET SINGLE CATEGORY =================
  const getSingleCategory = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3000/v1/getCategory/${id}`);
      if (response.data) {
        setEditingCategory(response.data);
      }
    } catch (error) {
      console.error("Error fetching category:", error);
      alert("Failed to fetch category details");
    }
  };

  // ================= CREATE CATEGORY =================
  const createCategory = async (values, resetForm) => {
    setLoading(true);
    try {
      await axios.post("http://localhost:3000/v1/createCategory", values);
      resetForm();
      await getCategories();
      alert("Category created successfully!");
    } catch (error) {
      console.error("Error creating category:", error);
      alert("Failed to create category");
    } finally {
      setLoading(false);
    }
  };

  // ================= UPDATE CATEGORY =================
  const updateCategory = async (id, values, resetForm) => {
    setLoading(true);
    try {
      await axios.put(`http://localhost:3000/v1/updateCategory/${id}`, values);
      resetForm();
      setEditingCategory(null);
      await getCategories();
      alert("Category updated successfully!");
    } catch (error) {
      console.error("Error updating category:", error);
      alert("Failed to update category");
    } finally {
      setLoading(false);
    }
  };

  // ================= DELETE CATEGORY =================
  const deleteCategory = async (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      try {
        await axios.delete(`http://localhost:3000/v1/category/${id}`);
        await getCategories();
        alert("Category deleted successfully!");
      } catch (error) {
        console.error("Error deleting category:", error);
        alert("Failed to delete category");
      }
    }
  };

  return (
      <div className="flex w-full flex-col gap-6">
        {/* ================= FORM SECTION ================= */}
        <div className="bg-white rounded-lg shadow p-6">
          <Typography varient="h3" className="mb-6">
            {editingCategory ? "Edit Category" : "Add New Category"}
          </Typography>

          <Formik
            enableReinitialize={true}
            initialValues={{
              category: editingCategory?.category || "",
            }}
            validationSchema={Yup.object({
              category: Yup.string()
                .required("Category name is required")
                .min(2, "Category name must be at least 2 characters")
                .max(50, "Category name must be less than 50 characters"),
            })}
            onSubmit={(values, { resetForm }) => {
              if (editingCategory?._id) {
                updateCategory(editingCategory._id, values, resetForm);
              } else {
                createCategory(values, resetForm);
              }
            }}
          >
            {({ values, handleChange, handleSubmit, isSubmitting }) => (
              <Form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2">
                    Category Name
                  </label>
                  <input
                    name="category"
                    type="text"
                    value={values.category}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter category name..."
                  />
                  <ErrorMessage
                    name="category"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div className="flex gap-3">
                  <button
                    type="submit"
                    disabled={loading || isSubmitting}
                    className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:bg-blue-300"
                  >
                    {loading ? "Saving..." : editingCategory ? "Update Category" : "Create Category"}
                  </button>
                  
                  {editingCategory && (
                    <button
                      type="button"
                      onClick={() => {
                        setEditingCategory(null);
                      }}
                      className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </Form>
            )}
          </Formik>
        </div>

        {/* ================= LIST SECTION (TABLE VIEW) ================= */}
        <div className="bg-white rounded-lg shadow p-6 ">
          <Typography varient="h3" className="mb-6">
            Categories List
          </Typography>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-700 text-white text-left">
                  <th className="p-4 border border-gray-600">S.No</th>
                  <th className="p-4 border border-gray-600">ID</th>
                  <th className="p-4 border border-gray-600">Category Name</th>
                  <th className="p-4 border border-gray-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories?.map((category, index) => (
                  <tr key={category?._id} className="hover:bg-gray-50 transition">
                    <td className="p-4 border border-gray-300">{index + 1}</td>
                    <td className="p-4 border border-gray-300">{category?._id}</td>
                    <td className="p-4 border border-gray-300">
                      <span className="font-medium">{category?.category}</span>
                    </td>
                    <td className="p-4 border border-gray-300">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => getSingleCategory(category?._id)}
                          className="p-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-md transition"
                          title="Edit Category"
                        >
                          <MdModeEdit size={18} />
                        </button>
                        <button
                          onClick={() => deleteCategory(category?._id)}
                          className="p-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition"
                          title="Delete Category"
                        >
                          <FaTrash size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
                
                {categories?.length === 0 && (
                  <tr>
                    <td colSpan="4" className="text-center p-8 text-gray-500">
                      No categories found. Create your first category!
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          
          {/* Optional: Show total count */}
          {categories?.length > 0 && (
            <div className="mt-4 text-sm text-gray-600">
              Total Categories: {categories.length}
            </div>
          )}
        </div>
      </div>
  );
};

export default Category;