export interface Post {
  id: number;
  title: string;
  thumbnail: string;
  slug: string;
  description: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export const posts: Post[] = [
  {
    id: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut enim congue, euismod leo a, maximus sem. Donec aliquet auctor porttitor. Curabitur imperdiet lacus ac sem consequat blandit.",
    slug: "title-a",
    thumbnail: "posts/image1.webp",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    content:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    createdAt: new Date(2023, 9, 28),
    updatedAt: new Date(),
  },
  {
    id: 2,
    title:
      "Ut ligula leo, dictum ac lorem in, posuere placerat lacus. Donec sit amet lobortis velit. Sed laoreet blandit ante ut euismod. Etiam vel risus sem.",
    thumbnail: "posts/image2.webp",
    slug: "title-b",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    content:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    createdAt: new Date(2023, 9, 1),
    updatedAt: new Date(),
  },
  {
    id: 3,
    title:
      "Nullam vel accumsan leo. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque pretium dictum orci, sit amet feugiat purus fermentum sit amet.",
    thumbnail: "posts/image3.webp",
    slug: "title-c",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    content:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    createdAt: new Date(2023, 1, 1),
    updatedAt: new Date(),
  },
  {
    id: 4,
    title:
      "Cras facilisis, quam nec gravida commodo, libero eros pellentesque mauris, nec laoreet dui enim eu sapien. Aenean convallis congue turpis eget pharetra. In maximus aliquet ex sit amet faucibus.",
    thumbnail: "posts/image4.webp",
    slug: "title-d",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    content:
      "Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit enim labore culpa sint ad nisi Lorem pariatur mollit ex esse exercitation amet. Nisi anim cupidatat excepteur officia. Reprehenderit nostrud nostrud ipsum Lorem est aliquip amet voluptate voluptate dolor minim nulla est proident. Nostrud officia pariatur ut officia. Sit irure elit esse ea nulla sunt ex occaecat reprehenderit commodo officia dolor Lorem duis laboris cupidatat officia voluptate. Culpa proident adipisicing id nulla nisi laboris ex in Lorem sunt duis officia eiusmod. Aliqua reprehenderit commodo ex non excepteur duis sunt velit enim. Voluptate laboris sint cupidatat ullamco ut ea consectetur et est culpa et culpa duis.",
    createdAt: new Date(2022, 1, 1),
    updatedAt: new Date(),
  },
];
