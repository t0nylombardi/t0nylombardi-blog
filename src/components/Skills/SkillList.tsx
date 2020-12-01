import React from "react";
import { SkillObj } from "./SkillObj";

const SkillList = () => {
  return (
    <>
      {Object.entries(SkillObj).map(([key, value]) => {
        return (
          <div className="relative pt-1">
            <h3>{key}</h3>
            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-c7">
              <div
                style={{ width: `${value}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gray-dark"
              ></div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default SkillList;
