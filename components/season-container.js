import { useMemo } from "react";

const SeasonContainer = ({ seasonTitle, propTop, propRight, propLeft }) => {
  const season3Style = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const arrowIconStyle = useMemo(() => {
    return {
      right: propRight,
      left: propLeft,
    };
  }, [propRight, propLeft]);

  return (
    <div
      className="absolute top-[1516px] left-[54px] w-[1497px] h-[382px] text-center text-6xl text-white font-raleway"
      style={season3Style}
    >
      <div className="absolute top-[72px] left-[0px] rounded-11xl bg-gray-300 [backdrop-filter:blur(20px)] w-[354px] h-[199px]" />
      <div className="absolute top-[72px] left-[381px] rounded-11xl bg-gray-300 [backdrop-filter:blur(20px)] w-[354px] h-[199px]" />
      <div className="absolute top-[72px] left-[762px] rounded-11xl bg-gray-300 [backdrop-filter:blur(20px)] w-[354px] h-[199px]" />
      <div className="absolute top-[72px] left-[1143px] rounded-11xl bg-gray-300 [backdrop-filter:blur(20px)] w-[354px] h-[199px]" />
      <b className="absolute top-[299px] left-[30px] inline-block w-[293px] [text-shadow:0px_2px_4px_rgba(0,_0,_0,_0.25)]">
        This, this, and that: The Journey of This Person
      </b>
      <b className="absolute top-[293px] left-[411px] inline-block w-[293px] [text-shadow:0px_2px_4px_rgba(0,_0,_0,_0.25)]">
        This, this, and that: The Journey of This Person
      </b>
      <b className="absolute top-[293px] left-[792px] inline-block w-[293px] [text-shadow:0px_2px_4px_rgba(0,_0,_0,_0.25)]">
        This, this, and that: The Journey of This Person
      </b>
      <b className="absolute top-[293px] left-[1140px] inline-block w-[293px] [text-shadow:0px_2px_4px_rgba(0,_0,_0,_0.25)]">
        This, this, and that: The Journey of This Person
      </b>
      <b className="absolute top-[12px] left-[1047px] inline-block w-[203px] [text-shadow:0px_2px_4px_rgba(0,_0,_0,_0.25)]">
        View Full Playlist
      </b>
      <b className="absolute top-[0px] left-[0px] text-26xl inline-block text-left w-[321px] [text-shadow:0px_2px_4px_rgba(0,_0,_0,_0.25)]">
        {seasonTitle}
      </b>
      <div className="absolute top-[35px] left-[1258px] [background:linear-gradient(-87.76deg,_#000,_rgba(0,_0,_0,_0))] w-[175px] h-[347px]" />
      <div className="absolute top-[138px] left-[1252px] rounded-[50%] bg-white shadow-[0px_0px_100px_#000] [backdrop-filter:blur(29px)] w-[76px] h-[76px]" />
      <img
        className="absolute h-[4.71%] w-[0.73%] top-[4.58%] right-[15.06%] bottom-[90.71%] left-[84.2%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/arrow3.svg"
        style={arrowIconStyle}
      />
      <img
        className="absolute h-[6.25%] w-[1%] top-[43.06%] right-[13.33%] bottom-[50.69%] left-[85.67%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="/arrow2.svg"
      />
    </div>
  );
};

export default SeasonContainer;
