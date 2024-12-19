import { ROUTES } from "@/routes";
import { COLORS } from "@/utils/colors";
import { VARIABLES } from "@/utils/variables";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useLocation } from "react-router-dom";

const PhoneInputComponent = ({
  id,
  onBlur,
  className,
  errors,
  handlePhoneValue,
  style,
}) => {
  const [phone, setPhone] = useState("");
  const location = useLocation();
  return (
    <div className="relative">
      <PhoneInput
        id={id}
        name={id}
        defaultCountry="us"
        value={phone}
        onChange={(phone) => [setPhone(phone), handlePhoneValue(phone)]}
        inputStyle={{
          width: "100%",
          borderRadius: 0,
          background: COLORS.TRANSPARENT,
          color: location.pathname.includes(ROUTES.CONTACT)
            ? COLORS.WHITE
            : COLORS.BLACK,
        }}
        placeholder={VARIABLES.PHONE_PLACEHOLDER}
        onBlur={onBlur}
        className={className}
      />
      {errors && (
        <span className="!text-red-600 text-sm m-0 translate-y-[-10px] left-0 bottom-0">
          {errors}
        </span>
      )}
    </div>
  );
};

export default PhoneInputComponent;
