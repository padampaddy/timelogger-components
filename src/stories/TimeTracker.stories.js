import TimeTracker from "./TimeTracker";
import "../../src/index.css";
import canvaWatch from "./assets/watch.jpg";

export default {
  title: "TimeTracker",
  component: TimeTracker,
};

const Template = (args) => (
  <>
    <TimeTracker {...args} />
    <div className=" w-96 border flex flex-col p-5 bg-slate-300">
      <div className="relative">
        <img src={canvaWatch} alt="watch" className="w-80 h-80 " />
        <button className="absolute top-[40%] left-[21%] bg-red-200 p-5 py-6 rounded-full text-red-800 font-bold">
          Start
        </button>
      </div>
      <div>
        <h1 className="text-2xl font-bold">Time Tracker</h1>
      </div>
    </div>
  </>
);

export const Default = Template.bind({});
Default.args = {};
