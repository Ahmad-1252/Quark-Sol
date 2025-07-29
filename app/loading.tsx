export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-600/25 animate-pulse">
            <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
              <span className="text-transparent bg-gradient-to-br from-blue-600 to-indigo-700 bg-clip-text font-bold text-xl">
                Q
              </span>
            </div>
          </div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full animate-pulse"></div>
        </div>
        <div className="mt-4 text-white font-semibold">Loading...</div>
      </div>
    </div>
  )
}
