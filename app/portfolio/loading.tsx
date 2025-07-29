export default function PortfolioLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <div className="container mx-auto px-4 sm:px-6 py-24">
        <div className="text-center mb-16">
          <div className="h-8 bg-slate-700/50 rounded-lg w-64 mx-auto mb-4 animate-pulse"></div>
          <div className="h-4 bg-slate-700/50 rounded-lg w-96 mx-auto animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-slate-800/60 rounded-xl p-6 animate-pulse">
              <div className="h-48 bg-slate-700/50 rounded-lg mb-4"></div>
              <div className="h-6 bg-slate-700/50 rounded-lg mb-2"></div>
              <div className="h-4 bg-slate-700/50 rounded-lg mb-4"></div>
              <div className="flex gap-2">
                <div className="h-8 bg-slate-700/50 rounded-lg w-20"></div>
                <div className="h-8 bg-slate-700/50 rounded-lg w-16"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
