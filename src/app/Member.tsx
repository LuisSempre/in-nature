import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  socialId: string;
  link: string;
}

const Member: React.FC<Props> = ({ id, name, socialId, link }) => (
  <div>
    <Image
      className="rounded-xl"
      src={`/team.gif`}
      alt={name}
      width={300}
      height={400}
    />
    <div className="">{name}</div>
    <div className="">
      <Link href={link} target="_blank">
        {socialId}
      </Link>
    </div>
  </div>
);

export default Member;
