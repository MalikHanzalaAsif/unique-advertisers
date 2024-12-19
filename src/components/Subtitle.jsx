const SubTitle = ({ text, className }) => {
  return (
    <>
      <div
        className={"rounded-full" + " " + className}
        style={{ width: 238, height: 33, backgroundColor: "#004c48" }}
      >
        <h6
          className="text-white font-medium text-center"
          style={{ transform: "translateY(2px)" }}
        >
          {text || "About Us"}
        </h6>
      </div>
    </>
  );
};

export default SubTitle;
