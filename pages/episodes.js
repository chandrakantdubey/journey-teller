import ContainerFooter from "../components/container-footer";
import LatestEpisodeContainer1 from "../components/latest-episode-container1";
import TrendingNowContainer from "../components/trending-now-container";
import SeasonContainer from "../components/season-container";
import JourneyTellersContainer from "../components/journey-tellers-container";

const Episodes = () => {
  return (
    <div className="relative bg-white w-full h-[3050px] overflow-hidden text-center text-68xl text-white font-raleway">
      <div className="absolute top-[-101px] left-[-299px] w-[2038px] h-[2812px] font-clash-display">
        <img
          className="absolute top-[101px] left-[299px] w-[1467px] h-[1735px] object-cover"
          alt=""
          src="/backdrop-compressed-1@2x.png"
        />
        <div className="absolute top-[44px] left-[62px] [background:linear-gradient(0deg,_#1d1a1a_36.51%,_rgba(29,_26,_26,_0)_52.6%)] [backdrop-filter:blur(4px)] w-[2038px] h-[3949px]" />
        <b className="absolute top-[969px] left-[459px] inline-block w-[1083px] h-[69px] mix-blend-overlay">
          WHAT’S YOUR STORY?
        </b>
        <b className="absolute top-[969px] left-[459px] inline-block w-[1083px] h-[69px] mix-blend-overlay">
          WHAT’S YOUR STORY?
        </b>
      </div>
      <ContainerFooter
        dimensionCode="/twitter154svgrepocom-21.svg"
        propTop="2910px"
        propLeft="537px"
      />
      <LatestEpisodeContainer1 />
      <TrendingNowContainer />
      <b className="absolute top-[1460px] left-[520px] text-41xl inline-block w-[395px] [text-shadow:0px_2px_4px_rgba(0,_0,_0,_0.25)]">
        All Episodes
      </b>
      <SeasonContainer seasonTitle="Season 3" />
      <div className="absolute top-[1998px] left-[54px] w-[1497px] h-[382px] text-6xl">
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
          Season 2
        </b>
        <div className="absolute top-[35px] left-[1258px] [background:linear-gradient(-87.76deg,_#000,_rgba(0,_0,_0,_0))] w-[175px] h-[347px]" />
        <div className="absolute top-[138px] left-[1252px] rounded-[50%] bg-white shadow-[0px_0px_100px_#000] [backdrop-filter:blur(29px)] w-[76px] h-[76px]" />
        <img
          className="absolute h-[6.25%] w-[1%] top-[43.06%] right-[13.33%] bottom-[50.69%] left-[85.67%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/arrow2.svg"
        />
        <img
          className="absolute h-[4.71%] w-[0.73%] top-[4.58%] right-[14.8%] bottom-[90.71%] left-[84.47%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/arrow3.svg"
        />
      </div>
      <SeasonContainer
        seasonTitle="Season 1"
        propTop="2480px"
        propRight="14.26%"
        propLeft="85%"
      />
      <JourneyTellersContainer />
    </div>
  );
};

export default Episodes;
