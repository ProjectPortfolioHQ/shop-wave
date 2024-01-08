import {ReactNode} from "react";
import {GitHubLogoIcon} from "@radix-ui/react-icons";
import {Button} from "../components/ui/button";

export interface Contributor {
  id: number;
  name: string;
  description: string | ReactNode;
  position: string;
  avatar: string;
}

export const contributors: Contributor[] = [
  {
    id: 1,
    name:
      "Phu Lam",
    avatar: "https://avatars.githubusercontent.com/u/51507124?v=4",
    description: <>
      <GitHubLogoIcon onClick={() => {
        window.location = 'https://github.com/lamkimphu258'
      }}/>
    </>,
    position:
      "Developer, Product Owner",
  },
  {
    id: 2,
    name:
      "Cuc Trinh",
    avatar: "https://avatars.githubusercontent.com/u/152054793?v=4",
    description:
      <>
        <GitHubLogoIcon onClick={() => {
          window.location = 'https://github.com/cuctrinhdev'
        }}/>
      </>,
    position:
      "Developer",
  },
  {
    id: 3,
    name:
      "Hai Vo",
    // avatar:'/posts/image2.webp',
    avatar: "https://avatars.githubusercontent.com/u/40832709?v=4",
    description: <>
      <GitHubLogoIcon onClick={() => {
        window.location = 'https://github.com/FlyingHii'
      }}/>
    </>,
    position:
      "Developer",
  },
];
