const SkillObj = {
  Ruby: 80,
  'Ruby on Rails': 80,
  SQL: 70,
  HTML: 100,
  Javascript: 70,
  NodeJS: 50,
  TypeScript: 50,
  React: 60,
  Go: 50,
  Python: 50,
};

const SkillList = () => {
  return (
    <div>
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
    </div>
  );
};

export default SkillList;
