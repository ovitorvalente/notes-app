export function Logo() {
  return (
    <div className="flex items-center justify-center group mx-2">
      <div className="flex items-center justify-center group">
        <span className="w-8 h-8 bg-slate-400 rounded-full group-hover:translate-x-4 transition-transform delay-75 duration-1000" />
        <span className="w-8 h-8 bg-slate-800 rounded-full -translate-x-6 group-hover:-translate-x-8 transition-transform delay-75 duration-1000" />
      </div>
      <span className="font-bold text-2xl text-slate-300 max-md:text-lg">
        Noom Notes
      </span>
    </div>
  );
}
