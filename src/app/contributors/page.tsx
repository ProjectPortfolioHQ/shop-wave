"use client";
import {Contributor, contributors} from "../../data/Contributors";
import Image from "next/image";
import * as React from 'react';

type Props = {};
const Page = (props: Props) => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        {contributors?.map((item: Contributor, index) => (
          <div
            className={`flex flex-col md:flex-row gap-4 ${index !== 0 && "border-t pt-4"
            }`}
            key={item.id}
          >
            <Image
              src={`${item.avatar}`}
              alt="avartar"
              width="250"
              height="150"
            />
            <div className="flex flex-col">
              <h2 className="font-bold text-2xl">
                {item.name}
                {/*<Link href={`/posts/${item.slug}`}>{item.title}</Link>*/}
              </h2>
              {item.position}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Page