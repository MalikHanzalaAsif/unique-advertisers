import { business } from "@/utils/options";
import { animateValue } from "framer-motion";
import * as Yup from "yup";

export const packageValidations = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters long")
    .max(50, "Name cannot be more than 50 characters long")
    .required("Name is required"),
  email: Yup.string()
    .matches(
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      "Invalid email address"
    )
    .required("Email address is required")
    .email("Invalid email format"),
  companyName: Yup.string().required("Company name is required")
    .min(3, "Company name must be at least 3 characters long")
    .max(50, "Company name cannot be more than 50 characters long"),
  companyWebsite: Yup.string(),
  businessType: Yup.string().required("Please select one"),
  annualRevenue: Yup.string().required("Please select one"),
  phone: Yup.string().required("Phone number is required"),
  msg: Yup.string()
    .min(50, "Message must be at least 50 characters long")
    .required("Message is required"),
});
