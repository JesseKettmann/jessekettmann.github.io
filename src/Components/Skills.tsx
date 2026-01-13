import Badge from "./Badge";

function Skills() {
  return (
    <div className="w-full h-[800px] overflow-hidden bg-background-mint">
      <div className="flex gap-2 m-6">
        <Badge className="bg-dull text-bright-500">C#</Badge>
        <Badge className="bg-dull text-bright-500">Python</Badge>
        <Badge className="bg-dull text-bright-500">JavaScript</Badge>
        <Badge className="bg-dull text-bright-500">HTML</Badge>
        <Badge className="bg-dull text-bright-500">SQL</Badge>
        <Badge className="bg-dull text-bright-500">Haskell</Badge>
        <Badge className="bg-dull text-bright-500">C++</Badge>
      </div>
    </div>
  );
}

export default Skills;
