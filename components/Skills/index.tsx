import React, { useState } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { useSpring, animated, config } from 'react-spring';

const skillsWeb = [
  [75, 'React'],
  [75, 'Javascript'],
  [70, 'Typescript'],
  [80, 'Ruby'],
  [80, 'Ruby on Rails'],
  [70, 'SQL'],
  [70, 'Javascript'],
  [50, 'NodeJS'],
  [95, 'Html/Css'],
  [50, 'Go'],
  [50, 'Python'],
];

const SkillProgress = ({ percent, skillname }) => {
  const [isInView, setIsInView] = useState(false);

  const onVisibilityChange = (isInView) => setIsInView(isInView);

  const progressSpringStyleProps = useSpring({
    width: isInView ? `${percent}%` : `0%`,
    config: config.molasses,
  });

  return (
    <VisibilitySensor onChange={onVisibilityChange}>
      <div>
        <div className="relative pt-1">
          <div>{skillname}</div>
          <div className={'progressbar'}>
            <animated.div
              className={'progressbarprg'}
              style={progressSpringStyleProps}
            />
          </div>

          <style jsx global>{`
            .progressbar {
              width: 100%;
              height: 12px;
              background-color: #f5f5f5;
              border-radius: 10px;
              margin: 10px 0;
            }
            .progressbarprg {
              height: 100%;
              color: white;
              line-height: 18px;
              text-align: center;
              width: 0%;
              border-radius: 10px;
              background-color: #b9301c;
            }
          `}</style>
        </div>
      </div>
    </VisibilitySensor>
  );
};

const SkillList = () => {
  return (
    <div>
      {skillsWeb.map((name, index) => {
        return (
          <SkillProgress key={index} percent={name[0]} skillname={name[1]} />
        );
      })}
    </div>
  );
};

export default SkillList;
