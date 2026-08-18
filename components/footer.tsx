import { Github, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/30 px-4 sm:px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2.5 font-mono text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span>Forged with</span>
            <Heart className="h-3.5 w-3.5 text-destructive animate-pulse" />
            <span>& code</span>
          </div>

          <div className="flex items-center gap-4">
             <a
                href="https://github.com/xHilyZ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground/50 transition-all duration-300 hover:text-primary hover:scale-110"
              >
                <Github className="h-5 w-5" />
              </a>
          </div>

          <p className="font-mono text-xs text-muted-foreground text-center sm:text-right">
            © 2026 Vexora Studios. All rights reserved. Not affiliated with Rockstar Games or Cfx.re.
          </p>
        </div>
      </div>
    </footer>
  )
}
