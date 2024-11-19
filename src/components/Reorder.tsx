"use client";

import { useState } from "react";
import { Reorder as MotionReorder } from "motion/react";
import Image from "next/image";

const itemList = [
  {
    id: 0,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: `https://picsum.photos/seed/123/350/200`,
  },
  {
    id: 1,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: `https://picsum.photos/seed/1234/350/200`,
  },
  {
    id: 2,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: `https://picsum.photos/seed/1235/350/200`,
  },
  {
    id: 3,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: `https://picsum.photos/seed/1236/350/200`,
  },
  {
    id: 4,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: `https://picsum.photos/seed/1237/350/200`,
  },
  {
    id: 5,
    title: "Lorem ipsum",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    image: `https://picsum.photos/seed/1238/350/200`,
  },
];

export default function Reorder() {
  const [items, setItems] = useState(itemList);

  return (
    <div className="w-full flex flex-col items-start gap-6">
      <div className="w-full flex items-center gap-4">
        <h2 className="text-2xl font-semibold leading-none">Reorder</h2>
        <span className="flex-1 h-0.5 bg-indigo-100/10 rounded-full" />
      </div>
      <MotionReorder.Group
        values={items}
        onReorder={setItems}
        className="w-full grid grid-cols-3 grid-rows-2 gap-6"
      >
        {items.map((item) => {
          return (
            <MotionReorder.Item
              key={item.id}
              value={item}
              drag
              className="flex flex-col items-center justify-center border-2 flex-1 h-auto aspect-video rounded-lg bg-zinc-900/70 backdrop-blur-xl border-indigo-500 shadow-md shadow-indigo-200/10 cursor-grab active:cursor-grabbing transition-all active:border-indigo-400 active:shadow-indigo-200/20"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={350}
                height={200}
                className="w-full h-48 object-cover rounded-t-lg pointer-events-none"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-indigo-50/40">
                  {item.description}
                </p>
              </div>
            </MotionReorder.Item>
          );
        })}
      </MotionReorder.Group>
    </div>
  );
}
