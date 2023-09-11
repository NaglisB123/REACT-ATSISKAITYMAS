import { useFormik } from "formik";
import * as Yup from "yup";
import { useAuth } from "../store/AuthProvider";
import { db } from "../firebase/firebase";
import toast from "react-hot-toast";
import { addDoc, collection } from "firebase/firestore";

function CreateAdd() {
  const ctx = useAuth();
  console.log("userUid ===", ctx.userUid);
  const initialValues = {
    title: "",
    description: "",
    price: "",
    brand: "",
    img: "",
  };
  const validationSchema = Yup.object({
    title: Yup.string().min(3).max(255).required("Title is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number()
      .required("Price is required")
      .positive("Price must be a positive number"),
    brand: Yup.string().required("Brand is required"),
    img: Yup.string().required("Main Image URL is required").url("Invalid URL"),
  });
  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const newAddObjWithUid = {
        ...values,
        userUid: ctx.userUid,
      };
      sendDataToFireBase(newAddObjWithUid);
    },
  });
  async function sendDataToFireBase(dataToSend) {
    console.log("creating");
    try {
      const docRef = await addDoc(collection(db, "my-items"), dataToSend);
      console.log("Document written with ID: ", docRef.id);
      toast.success("Product has been created");
    } catch (error) {
      console.error("Error adding document: ", error);
      toast.error("An error has occured");
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Create Ad</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
              className={`mt-1 p-2 w-full border rounded-md ${
                formik.touched.title && formik.errors.title
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-blue-500"
              }`}
            />
            {formik.touched.title && formik.errors.title && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.title}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              name="description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
              className={`mt-1 p-2 w-full border rounded-md ${
                formik.touched.description && formik.errors.description
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-blue-500"
              }`}
            />
            {formik.touched.description && formik.errors.description && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.description}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
              className={`mt-1 p-2 w-full border rounded-md ${
                formik.touched.price && formik.errors.price
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-blue-500"
              }`}
            />
            {formik.touched.price && formik.errors.price && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.price}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="brand"
              className="block text-sm font-medium text-gray-700"
            >
              Brand
            </label>
            <input
              type="text"
              id="brand"
              name="brand"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.brand}
              className={`mt-1 p-2 w-full border rounded-md ${
                formik.touched.brand && formik.errors.brand
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-blue-500"
              }`}
            />
            {formik.touched.brand && formik.errors.brand && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.brand}
              </div>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="img"
              className="block text-sm font-medium text-gray-700"
            >
              Image url please
            </label>
            <input
              type="text"
              id="img"
              name="img"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.img}
              className={`mt-1 p-2 w-full border rounded-md ${
                formik.touched.img && formik.errors.img
                  ? "border-red-500 focus:border-red-500"
                  : "border-gray-300 focus:border-blue-500"
              }`}
            />
            {formik.touched.img && formik.errors.img && (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.img}
              </div>
            )}
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CreateAdd;
