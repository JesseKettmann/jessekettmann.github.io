function AboutMeText() {
  return (
    <div className="flex flex-col justify-between z-10 p-global text-dark bg-bright-400">
      <div>
        <h2 className="text-4xl font-light mb-2 flex justify-center lg:justify-normal">
          About Me
        </h2>
        <div className="space-y-4 sm:text-xl text-justify">
          <p>
            My name is Jesse Kettmann, and I'm a Dutch software engineer. I've
            always been fascinated by what can be built with code, and I started
            programming games in GameMaker Studio around the age of ten. During
            high school, I continued teaching myself technical skills alongside
            broader design fundamentals such as UX and color theory.
          </p>
          <p>
            At university, I was formally introduced to core programming
            concepts like software design patterns and different programming
            paradigms. I worked with a variety of languages and had the
            opportunity to collaborate with a real client as part of a Scrum
            team. Altogether, this experience helped shape me into a versatile
            developer.
          </p>
          <p>
            I enjoy challenging myself and constantly expanding my skill set. My
            goal is to work on projects I'm proud of, learn along the way, and
            keep building things that have an impact.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMeText;
