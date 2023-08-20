import JourneyTellersContainer from "../components/journey-tellers-container";
import WatchCard from "../components/watch-card";
import HostsContainer from "../components/hosts-container";
import ContactContainer from "../components/contact-container";
import ContainerFooter from "../components/container-footer";
import LatestEpisodeContainer from "../components/latest-episode-container";

const Home = () => {
  return (
    <div className="relative bg-white w-full h-[2871px] overflow-hidden text-center text-68xl text-white font-clash-display">
      <div className="absolute top-[-101px] left-[-299px] w-[2038px] h-[2812px]">
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
      <JourneyTellersContainer />
      <WatchCard />
      <HostsContainer />
      <ContactContainer />
      <ContainerFooter dimensionCode="/twitter154svgrepocom-21.svg" />
      <LatestEpisodeContainer />
    </div>
  );
};

export default Home;
