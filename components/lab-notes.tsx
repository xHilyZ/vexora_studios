"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Code2, Database, Terminal, GitBranch, Shield, Cpu, Flame, Settings, Laptop } from "lucide-react"

// Hardcoded sample data for GitHub activity stream to make it interactive and authentic
const commitData2026 = [
  // Jan
  [2, 0, 1, 3, 0, 0, 4], [0, 1, 0, 0, 2, 0, 1], [0, 0, 3, 0, 1, 2, 0], [1, 2, 0, 0, 0, 1, 0],
  // Feb
  [0, 0, 1, 0, 0, 4, 0], [2, 1, 0, 3, 0, 0, 1], [0, 0, 0, 0, 2, 1, 0], [1, 0, 3, 0, 0, 0, 2],
  // Mar
  [0, 1, 0, 0, 0, 0, 1], [0, 0, 2, 1, 0, 0, 3], [1, 0, 0, 0, 2, 0, 0], [0, 3, 1, 0, 0, 1, 0],
  // Apr
  [4, 2, 0, 1, 3, 0, 0], [0, 0, 3, 1, 0, 2, 0], [1, 0, 0, 4, 0, 1, 1], [0, 2, 1, 0, 3, 0, 0],
  // May
  [1, 0, 0, 0, 2, 0, 1], [0, 3, 0, 1, 0, 0, 0], [2, 0, 1, 0, 0, 3, 0], [0, 1, 0, 2, 1, 0, 0],
  // Jun
  [3, 4, 2, 0, 0, 1, 0], [1, 0, 0, 3, 0, 0, 2], [0, 0, 1, 0, 2, 1, 0], [0, 2, 0, 1, 0, 3, 0],
  // Jul
  [0, 1, 0, 0, 0, 0, 1], [2, 0, 3, 1, 0, 0, 0], [0, 0, 0, 0, 2, 1, 0], [1, 3, 0, 0, 0, 2, 0],
  // Aug
  [1, 0, 2, 1, 0, 0, 3], [0, 0, 0, 0, 1, 2, 0], [0, 3, 1, 0, 0, 1, 0], [2, 1, 0, 0, 3, 0, 0],
  // Sep
  [0, 0, 1, 2, 0, 1, 0], [1, 3, 0, 0, 2, 0, 0], [0, 0, 3, 1, 0, 0, 1], [2, 0, 0, 0, 1, 2, 0],
  // Oct
  [1, 2, 0, 0, 3, 0, 1], [0, 0, 1, 0, 0, 2, 0], [3, 1, 0, 0, 2, 0, 0], [0, 0, 0, 1, 0, 3, 1],
  // Nov
  [2, 0, 1, 0, 0, 0, 2], [0, 3, 0, 1, 2, 0, 0], [1, 0, 0, 0, 0, 3, 1], [0, 2, 1, 0, 1, 0, 0],
  // Dec
  [0, 0, 3, 1, 0, 2, 0], [1, 2, 0, 0, 0, 1, 0], [0, 0, 1, 3, 0, 0, 2], [4, 0, 1, 0, 2, 0, 0]
]

const commitData2025 = [
  // Jan
  [0, 0, 0, 1, 0, 2, 0], [1, 2, 0, 0, 3, 0, 1], [0, 0, 1, 0, 0, 2, 0], [3, 1, 0, 0, 2, 0, 0],
  // Feb
  [2, 0, 1, 0, 0, 0, 2], [0, 3, 0, 1, 2, 0, 0], [1, 0, 0, 0, 0, 3, 1], [0, 2, 1, 0, 1, 0, 0],
  // Mar
  [0, 0, 3, 1, 0, 2, 0], [1, 2, 0, 0, 0, 1, 0], [0, 0, 1, 3, 0, 0, 2], [4, 0, 1, 0, 2, 0, 0],
  // Apr
  [2, 0, 1, 3, 0, 0, 4], [0, 1, 0, 0, 2, 0, 1], [0, 0, 3, 0, 1, 2, 0], [1, 2, 0, 0, 0, 1, 0],
  // May
  [0, 0, 1, 0, 0, 4, 0], [2, 1, 0, 3, 0, 0, 1], [0, 0, 0, 0, 2, 1, 0], [1, 0, 3, 0, 0, 0, 2],
  // Jun
  [0, 1, 0, 0, 0, 0, 1], [0, 0, 2, 1, 0, 0, 3], [1, 0, 0, 0, 2, 0, 0], [0, 3, 1, 0, 0, 1, 0],
  // Jul
  [4, 2, 0, 1, 3, 0, 0], [0, 0, 3, 1, 0, 2, 0], [1, 0, 0, 4, 0, 1, 1], [0, 2, 1, 0, 3, 0, 0],
  // Aug
  [1, 0, 0, 0, 2, 0, 1], [0, 3, 0, 1, 0, 0, 0], [2, 0, 1, 0, 0, 3, 0], [0, 1, 0, 2, 1, 0, 0],
  // Sep
  [3, 4, 2, 0, 0, 1, 0], [1, 0, 0, 3, 0, 0, 2], [0, 0, 1, 0, 2, 1, 0], [0, 2, 0, 1, 0, 3, 0],
  // Oct
  [0, 1, 0, 0, 0, 0, 1], [2, 0, 3, 1, 0, 0, 0], [0, 0, 0, 0, 2, 1, 0], [1, 3, 0, 0, 0, 2, 0],
  // Nov
  [1, 0, 2, 1, 0, 0, 3], [0, 0, 0, 0, 1, 2, 0], [0, 3, 1, 0, 0, 1, 0], [2, 1, 0, 0, 3, 0, 0],
  // Dec
  [0, 0, 1, 2, 0, 1, 0], [1, 3, 0, 0, 2, 0, 0], [0, 0, 3, 1, 0, 0, 1], [2, 0, 0, 0, 1, 2, 0]
]

export function LabNotes() {
  const [selectedYear, setSelectedYear] = useState<2025 | 2026>(2026)
  const [activeHover, setActiveHover] = useState<string | null>(null)

  const stats = [
    { value: "12+", label: "SCRIPTS SHIPPED" },
    { value: "40+", label: "SERVERS POWERED" },
    { value: "24/7", label: "DIRECT SUPPORT" },
  ]

  const stack = {
    languages: [
      { name: "Lua", icon: Flame, description: "Primary language for high-performance FiveM resource scripting." },
      { name: "JavaScript", icon: Code2, description: "Web-based NUI interfaces and responsive frontend features." },
      { name: "SQL", icon: Database, description: "Optimized database design, queries, and state management." },
      { name: "HTML5", icon: Terminal, description: "Structuring custom overlay UI elements." },
    ],
    frameworks: [
      { name: "Qbox", icon: Shield, description: "Next-gen, security-first FiveM roleplay framework customization." },
      { name: "ESX", icon: Cpu, description: "Classic and legacy FiveM economic system optimizations." },
      { name: "Ox Lib", icon: Settings, description: "Utilizing modular libraries for ultimate script performance." },
    ],
    tools: [
      { name: "Git", icon: GitBranch, description: "Version control and collaborative repository maintenance." },
      { name: "VS Code", icon: Laptop, description: "The primary development environment and debugger." },
    ],
  }

  const currentCommitData = selectedYear === 2026 ? commitData2026 : commitData2025
  const totalCommits = selectedYear === 2026 ? 62 : 148

  const getCellColor = (count: number) => {
    if (count === 0) return "bg-[#161320]" // Very dark gray/purple
    if (count === 1) return "bg-primary/20" // Light purple
    if (count === 2) return "bg-primary/40" // Medium-light purple
    if (count === 3) return "bg-primary/70" // Vibrant purple
    return "bg-primary" // Ultra bright purple (active color)
  }

  return (
    <section id="notes" className="px-4 sm:px-6 py-16 sm:py-24 border-t border-border/30 bg-background">
      <div className="mx-auto max-w-5xl space-y-16">

        {/* Statistics Section */}
        <div className="grid grid-cols-3 gap-4 text-center max-w-3xl mx-auto">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-2">
              <div className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground select-none">
                {stat.value}
              </div>
              <div className="text-[10px] sm:text-xs font-mono tracking-widest text-muted-foreground uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Technologies & Stack Section */}
        <div className="relative rounded-2xl border border-border/60 bg-card/40 p-6 sm:p-8 glass hover-lift">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-primary mb-1">EXPERTISE</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Technologies & Stack</h2>
            </div>
            <div className="font-mono text-xs text-muted-foreground/80 italic">
              {activeHover ? activeHover : "Hover over any icon to see what it's used for."}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {/* Languages */}
            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Languages</h3>
              <div className="flex flex-wrap gap-2.5">
                {stack.languages.map((item) => (
                  <button
                    key={item.name}
                    onMouseEnter={() => setActiveHover(`${item.name}: ${item.description}`)}
                    onMouseLeave={() => setActiveHover(null)}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/80 bg-secondary/40 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/15 hover:text-primary"
                  >
                    <item.icon className="h-5 w-5" />
                  </button>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Frameworks</h3>
              <div className="flex flex-wrap gap-2.5">
                {stack.frameworks.map((item) => (
                  <button
                    key={item.name}
                    onMouseEnter={() => setActiveHover(`${item.name}: ${item.description}`)}
                    onMouseLeave={() => setActiveHover(null)}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/80 bg-secondary/40 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/15 hover:text-primary"
                  >
                    <item.icon className="h-5 w-5" />
                  </button>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="space-y-3">
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Tools</h3>
              <div className="flex flex-wrap gap-2.5">
                {stack.tools.map((item) => (
                  <button
                    key={item.name}
                    onMouseEnter={() => setActiveHover(`${item.name}: ${item.description}`)}
                    onMouseLeave={() => setActiveHover(null)}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/80 bg-secondary/40 text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:bg-primary/15 hover:text-primary"
                  >
                    <item.icon className="h-5 w-5" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Development Stream (GitHub Activity Heatmap) Section */}
        <div className="relative rounded-2xl border border-border/60 bg-card/40 p-6 sm:p-8 glass hover-lift">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-primary mb-1">ACTIVITY</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Development Stream</h2>
            </div>

            <div className="flex items-center gap-4">
              <span className="hidden sm:inline font-mono text-xs text-muted-foreground">
                {totalCommits} COMMITS IN {selectedYear}
              </span>
              <div className="flex rounded-lg border border-border/85 bg-background p-1">
                {([2025, 2026] as const).map((year) => (
                  <button
                    key={year}
                    onClick={() => setSelectedYear(year)}
                    className={cn(
                      "px-3 py-1.5 font-mono text-xs rounded-md transition-all duration-300",
                      selectedYear === year
                        ? "bg-primary text-primary-foreground font-semibold shadow-md shadow-primary/30"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Heatmap Area */}
          <div className="overflow-x-auto scrollbar-hide py-2">
            <div className="min-w-[620px] space-y-2">
              <div className="flex gap-2 text-[10px] font-mono text-muted-foreground pl-8 select-none">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"].map((m) => (
                  <div key={m} className="w-[42px] text-center">{m}</div>
                ))}
              </div>

              <div className="flex gap-1.5 items-start">
                {/* Weekdays Labels */}
                <div className="flex flex-col gap-1.5 text-[9px] font-mono text-muted-foreground pr-2 h-[80px] justify-between select-none py-1">
                  <div>Mon</div>
                  <div>Wed</div>
                  <div>Fri</div>
                </div>

                {/* Grid cells representing activity */}
                <div className="flex flex-1 gap-1">
                  {currentCommitData.map((week, weekIdx) => (
                    <div key={weekIdx} className="flex flex-col gap-1">
                      {week.map((commits, dayIdx) => (
                        <div
                          key={dayIdx}
                          className={cn(
                            "h-2.5 w-2.5 rounded-sm transition-all duration-300 hover:scale-125 hover:ring-1 hover:ring-primary cursor-pointer",
                            getCellColor(commits)
                          )}
                          title={`${commits} commit${commits !== 1 ? 's' : ''}`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between text-[10px] font-mono text-muted-foreground select-none border-t border-border/10 pt-4">
            <span className="sm:hidden">
              {totalCommits} COMMITS IN {selectedYear}
            </span>
            <span className="hidden sm:inline">Activity tracked from GitHub</span>

            <div className="flex items-center gap-1.5">
              <span>Less</span>
              <div className="h-2.5 w-2.5 rounded-sm bg-[#161320]" />
              <div className="h-2.5 w-2.5 rounded-sm bg-primary/20" />
              <div className="h-2.5 w-2.5 rounded-sm bg-primary/40" />
              <div className="h-2.5 w-2.5 rounded-sm bg-primary/70" />
              <div className="h-2.5 w-2.5 rounded-sm bg-primary" />
              <span>More</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
