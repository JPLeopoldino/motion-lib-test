import { ArrowUpRightFromSquare } from "lucide-react";

export default function Header() {
  return (
    <div className="sticky top-0 w-full flex items-center justify-center py-4 border-b-2 border-zinc-800 bg-zinc-950/50 backdrop-blur-xl z-10">
      <div className="w-full max-w-7xl flex items-center justify-between">
        <h1 className="font-semibold text-lg tracking-wide">
          Motion Playground
        </h1>
        <span className="text-sm font-medium inline-flex items-center gap-1">
          build with
          <a
            href="https://motion.dev"
            target="_blank"
            className="underline underline-offset-2 text-indigo-300 inline-flex items-center gap-0.5 select-none cursor-pointer hover:text-indigo-200 transition-all"
          >
            motion{" "}
            <ArrowUpRightFromSquare className="size-4" strokeWidth={1.5} />
          </a>
        </span>
      </div>
    </div>
  );
}
