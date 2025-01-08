import { useFormik } from "formik";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { packageValidations } from "./common/validations";
import InputComponent from "./common/input";
import { CONTACT_FORM_ID, PACKAGE_FORM_ID, VARIABLES } from "@/utils/variables";
import PhoneInput from "./common/input-phone";
import { formApi } from "@/api/api";
import { useRef, useState } from "react";
import { redirect, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/routes";
import { business, revenue } from "@/utils/options";
import DropDown from "./ui/DropDown";
import Checkbox from '@mui/joy/Checkbox';

const Contactform = ({ title, price }) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckBoxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  const navigate = useNavigate();
  let formId;
  let isBgTransparent = false;
  const location = useLocation();
  if (location.pathname.includes(ROUTES.CONTACT)) {
    formId = CONTACT_FORM_ID;
    isBgTransparent = true;
  } else {
    formId = PACKAGE_FORM_ID;
    isBgTransparent = false;
  }

  const [isLoading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      msg: "",
      companyName: "",
      companyWebsite: "",
      businessType: "",
      annualRevenue: "",
    },
    validationSchema: packageValidations,
    onSubmit: async (data) => {
      setLoading(true);
      const { name, email, phone, msg, companyName, companyWebsite, businessType, annualRevenue } = data;

      const formData = new FormData();
      formData.append(VARIABLES.CF7_UNIT_TAG, formId);
      formData.append(VARIABLES.FULL_NAME, name);
      formData.append(VARIABLES.EMAIL, email);
      formData.append(VARIABLES.PHONE_NAME, phone); // CHANGED THIS TO SEND PHONE NUMBER CORRECTLY
      formData.append(VARIABLES.MESSAGE, msg);
      formData.append(VARIABLES.COMPANY_NAME, companyName);
      formData.append(VARIABLES.COMPANY_WEBSITE, companyWebsite);
      formData.append(VARIABLES.BUSINESS_TYPE, businessType);
      formData.append(VARIABLES.ANNUAL_REVENUE, annualRevenue);
      if (title) {
        formData.append(VARIABLES.PACKAGE_TITLE, title);
        formData.append(VARIABLES.PACKAGE_PRICE, price);
      }
      const res = await formApi(formId, formData);

      if (res) {
        setLoading(false);
      }

      if (res.status >= 200 && res.status <= 300) {
        return navigate(ROUTES.THANK_YOU); // CHANGED THIS TO REDIRECT TO THANK YOU PAGE CORRECTLY
      }
    },
  });

  const {
    handleSubmit,
    handleBlur,
    handleChange,
    values,
    errors,
    touched,
    setFieldValue,
  } = formik;

  console.log(values)
  const renderValues = (id, type, placeholder, required) => {
    return (
      <InputComponent
        key={id}
        id={id}
        type={type}
        placeholder={placeholder}
        value={values[id]}
        onChange={handleChange}
        onBlur={handleBlur}
        errors={touched[id] && errors[id]}
        className={
          "bg-transparent " + (isBgTransparent ? "text-white" : "text-black")
        }
        required={required}
      />
    );
  };
  const renderDropDown = (id, placeholder, title, options) => {
    return (
      <>
        <DropDown
          key={id}
          id={id}
          placeholder={placeholder}
          options={options}
          value={values[id]}
          onChange={handleChange}
          onBlur={handleBlur}
          errors={touched[id] && errors[id]}
          title={title}
          className={
            "bg-transparent " + (isBgTransparent ? "text-white" : "text-black")
          }
        />
        {errors[VARIABLES[id]] && (
          <span className="!text-red-600 text-sm absolute bottom-[-30px] left-0">
            {errors[VARIABLES[id]]}
          </span>
        )}
      </>
    );
  }

  const handlePhoneValue = (phoneValue) => {
    setFieldValue(VARIABLES.PHONE_NAME, phoneValue); // CHANGED THIS TO SET PHONE NUMBER CORRECTLY
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col gap-4 py-4">
        {[
          renderValues(
            VARIABLES.NAME,
            VARIABLES.INPUT_TYPE_TEXT,
            VARIABLES.NAME_PLACEHOLDER,
            true
          ),
          renderValues(
            VARIABLES.EMAIL,
            VARIABLES.INPUT_TYPE_EMAIL,
            VARIABLES.EMAIL_PLACEHOLDER,
            true
          ),
        ]}
        <PhoneInput
          handlePhoneValue={handlePhoneValue}
          errors={touched[VARIABLES.PHONE_NAME] && errors[VARIABLES.PHONE_NAME]} // CHANGED THIS TO SHOW PHONE NUMBER ERROR CORRECTLY
          onBlur={handleBlur}
          id={VARIABLES.PHONE_NAME} // CHANGED THIS TO SEND PHONE NUMBER CORRECTLY
          onChange={handleChange}
        />
        <div className="relative mb-6">
          <Textarea
            placeholder={VARIABLES.MESSAGE_PLACEHOLDER}
            id={VARIABLES.MESSAGE}
            required
            rows="5"
            resize="none"
            value={values[VARIABLES.MESSAGE]}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`bg-transparent hover:border-amber-600 focus:border-primary focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-transparent focus-visible:ring-offset-transparent resize-none${isBgTransparent && "text-white"
              }`}
            style={!isBgTransparent ? { color: "#000" } : {}}
          />
          {touched[VARIABLES.MESSAGE] && errors[VARIABLES.MESSAGE] && (
            <span className="!text-red-600 text-sm absolute bottom-[-20px] left-0">
              {errors[VARIABLES.MESSAGE]}
            </span>
          )}
        </div>
        {[
          renderValues(
            VARIABLES.COMPANY_NAME,
            VARIABLES.INPUT_TYPE_TEXT,
            VARIABLES.COMPANY_NAME_PLACEHOLDER,
            true
          ),
          renderValues(
            VARIABLES.COMPANY_WEBSITE,
            VARIABLES.INPUT_TYPE_TEXT,
            VARIABLES.COMPANY_WEBSITE_PLACEHOLDER,
            false
          ),
          renderDropDown(
            VARIABLES.BUSINESS_TYPE,
            VARIABLES.BUSINESS_TYPE_PLACEHOLDER,
            VARIABLES.BUSINESS_TYPE_TITLE,
            business
          ),
          renderDropDown(
            VARIABLES.ANNUAL_REVENUE,
            VARIABLES.ANNUAL_REVENUE_PLACEHOLDER,
            VARIABLES.ANNUAL_REVENUE_TITLE,
            revenue
          )
        ]}
      </div>
      <div>
        <Checkbox
          color="warning"
          label="I agree to terms & conditions provided by the company. By providing my phone number, I agree to receive text messages from the business."
          variant="outlined"
          style={{color: "gray", fontSize: "0.8rem", padding: "1rem"}}
          required={true}
          onChange={handleCheckBoxChange}
          value={isChecked}
        />
      </div>
      <Button
        type="submit"
        className={`mt-10 w-full
            ${isLoading
            ? "bg-black text-white"
            : "hover:bg-secondary hover:text-white"
          }`}
        disabled={isLoading}
      >
        {isLoading ? "Submitting... " : "Submit"}
      </Button>
    </form>
  );
};

export default Contactform;