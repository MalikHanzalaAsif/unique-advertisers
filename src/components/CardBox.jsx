import { HiMiniEnvelope } from "react-icons/hi2";
import { BsEnvelopeHeartFill } from "react-icons/bs";

// const infoBox = [
//   {
//     boxLogo: <HiMiniEnvelope />,
//     boxTitle: "Clean Design",
//     boxContent: "",
//   },
//   {
//     boxLogo: <HiMiniEnvelope />,
//     boxTitle: "Clean Design 2",
//     boxContent: "",
//   },
//   {
//     boxLogo: <HiMiniEnvelope />,
//     boxTitle: "Clean Design 3",
//     boxContent: "",
//   },
//   {
//     boxLogo: <BsEnvelopeHeartFill />,
//     boxTitle: "Clean Design",
//     boxContent: "",
//   },
//   {
//     boxLogo: <HiMiniEnvelope />,
//     boxTitle: "Clean Design 2",
//     boxContent: "",
//   },
//   {
//     boxLogo: <HiMiniEnvelope />,
//     boxTitle: "Clean Design 3",
//     boxContent: "",
//   },
// ];

const CardBox = ({ infoBoxCard }) => {
  // if (infoBoxCard === null || infoBoxCard === undefined) {
  //   infoBoxCard = infoBox;
  // }
  return (
    <main className="container lg:py-[80px] px-[20px] py-[40px] ">
      <section
        className={
          infoBoxCard.length === 1
            ? "flex justify-center"
            : "grid lg:grid-cols-3 md:grid-cols-2 gap-10"
        }
      >
        {infoBoxCard &&
          infoBoxCard.map((items, index) => {
            const { boxLogo, boxTitle, boxContent } = items;
            return (
              <div
                className={`text-center about_box lg:py-[80px] lg:px-[20px] md:py-[30px] md:px-[10px] py-[30px] px-[10px] ${
                  infoBoxCard.length === 1 && "w-[310px] sm:w-[450px]"
                }`}
                key={index}
              >
                <div className="text-center text-6xl flex justify-center">
                  {boxLogo}
                </div>
                <h3>{boxTitle}</h3>
                <p>{boxContent}</p>
              </div>
            );
          })}
      </section>
    </main>
  );
};

export default CardBox;
