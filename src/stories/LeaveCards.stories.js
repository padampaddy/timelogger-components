import React from "react";
import LeaveCards from "./LeaveCards";

export default {
  title: "LeaveCards",
  component: LeaveCards,
  argTypes: {
    title: { control: "text" },
    description: { control: "text" },
    variant: {
      control: {
        type: "select",
        options: [
          "AvailableLeave",
          "danger",
          "CarryForwardLeave",
          "UnpaidLeave",
        ],
      },
    },
    leaveTypes: { control: "object" },
  },
};

const variantToColor = {
  AvailableLeave: "bg-purple-500",
  danger: "bg-red-500",
  CarryForwardLeave: "bg-green-500",
  UnpaidLeave: "bg-cyan-600",
};

const Template = (args) => {
  const leaveTypes = args.leaveTypes.map((leave) => ({
    ...leave,
    bgColor: variantToColor[args.variant],
  }));

  return (
    <LeaveCards variant={args.variant}>
      <h2 className="text-2xl font-bold pb-1">{args.title}</h2>
      <p className="pb-5 text-sm">{args.description}</p>
      <div className="flex gap-5">
        {leaveTypes.map((leave, index) => (
          <div key={index} className="flex flex-col justify">
            <div className="w-100 mx-auto">
              <p
                className={`rounded-full ${leave.bgColor} text-white font-extrabold py-2 w-10 y-10 text-center`}
              >
                {leave.count}
              </p>
            </div>
            <div>
              <h2 className="pt-2">{leave.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </LeaveCards>
  );
};

export const AvailableLeave = Template.bind({});
AvailableLeave.args = {
  variant: "AvailableLeave",
  title: "Available Leaves",
  description: "View and manage pending leave requests",
  leaveTypes: [
    { name: "Casual Leave", count: 2 },
    { name: "Medical Leave", count: 2 },
  ],
};

export const CarryForwardLeave = Template.bind({});
CarryForwardLeave.args = {
  variant: "CarryForwardLeave",
  title: "Carry Forward Leaves",
  description: "View Carry Forward Leaves",
  leaveTypes: [{ name: "Carry Forward", count: 1 }],
};

export const UnpaidLeave = Template.bind({});
UnpaidLeave.args = {
  variant: "UnpaidLeave",
  title: "Unpaid Leaves",
  description: "View Unpaid Leaves",
  leaveTypes: [{ name: "Unpaid", count: 1 }],
};
