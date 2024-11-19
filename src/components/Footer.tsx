export default function Footer() {
  return (
    <footer className="sticky bottom-0 ml-auto flex items-center justify-end pb-3 pr-5">
      <span className="text-[0.65rem] font-medium inline-flex items-center gap-1 text-indigo-50/40">
        Made by{" "}
        <a
          target="_blank"
          href="https://github.com/JPLeopoldino"
          className="text-indigo-50/50 inline-flex items-center gap-0.5 select-none cursor-pointer hover:text-indigo-50/80 transition-all"
        >
          JPLeopoldino
        </a>
      </span>
    </footer>
  );
}
