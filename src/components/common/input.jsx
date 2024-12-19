import { Input } from "../ui/input";

const InputComponent = ({
  id,
  name,
  value,
  defaultValue,
  placeholder,
  readOnly,
  type,
  autoComplete,
  onChange,
  errors,
  className,
  styles,
  required = true,
  onBlur,
  disabled,
}) => {
  return (
    <div className="relative">
      <Input
        id={id}
        type={type}
        name={name}
        value={value}
        readOnly={readOnly}
        autoComplete={autoComplete}
        onChange={onChange}
        onBlur={onBlur}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={[
          "col-span-3 mt-1 first:mt-0 hover:border-amber-600 focus:border-primary focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-transparent focus-visible:ring-offset-transparent",
          className,
        ]}
        style={styles}
        required={required}
        disabled={disabled}
      />
      {errors && (
        <span className="!text-red-600 text-sm m-0 translate-y-[-10px] left-0 bottom-0">
          {errors}
        </span>
      )}
    </div>
  );
};

export default InputComponent;
