export default function Slider({ amount, type }) {
  return (
    <div className="w-10/12 flex justify-center items-center">
      <p className="mr-2 ml-3 text-xs text-slate-700">{type}</p>
      <div className="w-full flex items-center">
        <div
          className="bg-slate-500 h-1 border border-slate-800"
          style={{ width: `${amount}%` }}
        />
        <div className="bg-slate-800 h-3  w-1" />
        <div
          className="bg-slate-50 h-1 border border-slate-800"
          style={{ width: `${100 - amount}%` }}
        />
      </div>
    </div>
  );
}
