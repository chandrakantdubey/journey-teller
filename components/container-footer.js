import { useMemo } from "react";

const ContainerFooter = ({ dimensionCode, propTop, propLeft }) => {
  const footerStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  return (
    <div
      className="absolute top-[2720px] left-[512px] w-[366px] h-[70px] text-center text-xl text-white font-raleway"
      style={footerStyle}
    >
      <img
        className="absolute top-[35px] left-[195px] w-[35px] h-[35px] overflow-hidden"
        alt=""
        src={dimensionCode}
      />
      <img
        className="absolute h-[38.34%] w-[9.56%] top-[55.71%] right-[26.5%] bottom-[5.95%] left-[63.93%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/page1.svg"
      />
      <img
        className="absolute top-[38px] left-[151px] w-[29px] h-[29px] object-cover"
        alt=""
        src="/image-3@2x.png"
      />
      <img
        className="absolute h-[36.97%] w-[10.93%] top-[57.14%] right-[62.57%] bottom-[5.89%] left-[26.5%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/youtube168.svg"
      />
      <div className="absolute top-[0px] left-[0px] font-semibold inline-block w-[366px] h-[35px]">
        ©️ The Journey Tellers Podcast 2023
      </div>
    </div>
  );
};

export default ContainerFooter;
