import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServicesIcons } from "../constants";
import {
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

const nutriGoFeatures = [
  "Smart snack suggestions based on mood and weather",
  "Touchscreen filters like vegan, keto, high protein",
  "Earn rewards through movement & workouts",
];

const Services = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Healthy living made effortless with nutriGo"
          text="Discover how our AI-powered vending machines make nutritious choices more convenient, fun, and rewarding."
        />

        <div className="relative">
          {/* Section 1: AI Snack Suggestions */}
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none flex justify-center items-center md:w-3/5 xl:w-auto">
              <img
                className="max-w-full max-h-full object-contain"
                width={800}
                height={730}
                alt="nutriGo AI Suggestions"
                src={service1}
              />
            </div>

            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">AI-Powered Snack Picks</h4>
              <p className="body-2 mb-[3rem] text-n-3">
                nutriGo recommends snacks based on your mood, weather, and fitness activity — automatically.
              </p>
              <ul className="body-2">
                {nutriGoFeatures.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Section 2: Touchscreen & Filters */}
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <img
                  src={service2}
                  className="max-w-full max-h-full object-contain"
                  width={630}
                  height={750}
                  alt="nutriGo Touchscreen UI"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Custom Filters</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Quickly filter options for your lifestyle — vegan, keto, low sugar and more — on a sleek display.
                </p>
              </div>
            </div>

            {/* Section 3: Rewards & Fitness Sync */}
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4">Fitness-Reward Integration</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  Connect your fitness apps and wearables to earn snack points by walking, running, or working out.
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "w-10 h-10 bg-n-6 md:w-15 md:h-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        <img src={item} width={24} height={24} alt="icon" />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem] flex justify-center items-center">
                <img
                  src={service3}
                  className="max-w-full max-h-full object-contain"
                  width={520}
                  height={400}
                  alt="nutriGo Fitness Sync"
                />
                {/* <VideoChatMessage /> */}
                <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
