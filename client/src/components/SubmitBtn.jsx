/* eslint-disable react/prop-types */
import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ formBtn }) => {
  // This hook tells you everything you need to know about page navigation to build pending navigation indicators and optimistic UI on data mutations. 
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <button
      type="submit"
      className={`btn btn-block ${formBtn && "form-btn"}`}
      disabled={isSubmitting}
    >
      {isSubmitting ? "submitting..." : "submit"}
    </button>
  );
};
export default SubmitBtn;