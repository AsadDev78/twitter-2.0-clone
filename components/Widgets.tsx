import React from "react";
import * as Icons from "@heroicons/react/24/outline";
import { TwitterTimelineEmbed } from "react-twitter-embed";
export const Widgets = () => {
  return (
    <div className="mt-2 px-2 col-span-2 hidden lg:inline">
      <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-full mt-2">
        <Icons.MagnifyingGlassIcon className="w-5 h-5 text-gray-400 " />
        <input
          className="bg-transparent flex-1 outline-none"
          placeholder="Search Twitter"
          type="text"
        />
      </div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="sonnysangha"
        options={{ height: 1000 }}
      />
    </div>
  );
};
