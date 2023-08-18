import React from "react";
import Member from "./Member";

const About: React.FC = () => {
  return (
    <section className={`flex flex-col py-20 text-3xl md:text-4xl`}>
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-4xl tracking-tight">
          <strong>We will help you ship better apps, faster.</strong> Out team
          of expert enginers has created the best user experiences in some of
          the most popular apps worldwirde.
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-28">
        <h2>Our Team</h2>
        <div className="mt-2">the &ldquo;spec-ops&rdquo;</div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-20">
          <Member id="team" name="Team" socialId="@team" link="" />
          <Member id="team" name="Team" socialId="@team" link="" />
          <Member id="team" name="Team" socialId="@team" link="" />
          <Member id="team" name="Team" socialId="@team" link="" />
          <Member id="team" name="Team" socialId="@team" link="" />
        </div>
      </div>
    </section>
  );
};

export default About;
