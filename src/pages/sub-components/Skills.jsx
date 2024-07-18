import { Card } from "@/components/ui/card";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    const getMySkills = async () => {
      const { data } = await axios.get(
        "http://localhost:4000/api/v1/skill/getAll",
        { withCredentials: true }
      );
      setSkills(data.skills);
    };
    getMySkills();
  }, []);

  return (
    <div>
      <div className="w-full flex flex-col gap-8 sm:gap-12  ">
        <div className="relative mb-12">
          <h1
            className="hidden sm:flex gap-4 items-center text-[2rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] tracking-[15px] mx-auto w-fit font-extrabold  "
            style={{ background: "hsl(222.2 84% 4.9%)" }}
          >

            <span className="text-tubeLight-effect font-extrabold">
              SKILLS
            </span>
          </h1>
          <h1
            className="flex sm:hidden gap-4 items-center text-[2rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3.8rem] leading-[56px] md:leading-[67px] lg:leading-[90px] mx-auto w-fit font-extrabold"
            style={{ background: "hsl(222.2 84% 4.9%)" }}
          >
            <span className="text-tubeLight-effect font-extrabold tracking-[5px]">SKILLS</span>
          </h1>

          <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200 "></span>
        </div>
        <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4  ">
          {skills &&
            skills.map((element) => {
              return (
                <Card
                  className=" h-fit flex flex-col justify-center items-center gap-3  "
                  key={element._id}
                >
                  <img
                    src={element.svg && element.svg.url}
                    alt={element.title}
                    className="h-12 sm:h-24 w-auto"
                  />
                  <p className="text-muted-foreground text-center">
                    {element.title}
                  </p>
                </Card>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
