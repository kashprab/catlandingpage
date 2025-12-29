import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Newspaper, GraduationCap, Shield, Zap, BarChart3 } from "lucide-react"

export default function HomePage() {
  const WAITLIST_FORM_URL = "https://tally.so/r/RGdON9"

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-muted/30 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-6xl">
          {/* Announcement Badge */}
          <div className="mb-8 flex justify-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent bg-accent/50 px-4 py-2 text-sm text-accent-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="font-medium">Join the waitlist today</span>
            </div>
          </div>

          {/* Hero Headline */}
          <div className="text-center">
            <h1 className="text-balance text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Learn Trading Without
              <br />
              <span className="text-primary">Risking a Dollar</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl leading-relaxed">
              Catalyst uses AI to generate realistic market events and teaches you true financial literacy through
              detailed post-trade breakdowns. Master market intuition before you invest.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="h-12 px-8 text-base">
                <a href={WAITLIST_FORM_URL} target="_blank" rel="noopener noreferrer">
                  Join Waitlist
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base bg-transparent">
                <Link href="#how-it-works">See How It Works</Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">$0</div>
              <div className="mt-1 text-sm text-muted-foreground">Financial Risk</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">AI-Powered</div>
              <div className="mt-1 text-sm text-muted-foreground">Market Events</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">Real-Time</div>
              <div className="mt-1 text-sm text-muted-foreground">Learning Feedback</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">100%</div>
              <div className="mt-1 text-sm text-muted-foreground">Educational</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              The Problem With Trading Education
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-pretty text-lg text-muted-foreground leading-relaxed">
              90% of new traders fail because simulators teach mechanics—not intuition. They show what happened, but
              never explain why.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                  <Shield className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">The Guessing Game</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Traders are left guessing how real-world headlines translate into price action, treating the market
                  like a casino.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                  <TrendingUp className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Learning With Real Money</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Beginners risk their savings in the fastest, most punitive environment imaginable. When they lose,
                  they quit.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-destructive/10">
                  <Newspaper className="h-6 w-6 text-destructive" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Missing Context</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Standard simulators teach technical analysis but ignore fundamental analysis—the skill that drives
                  long-term success.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="how-it-works" className="border-y border-border bg-muted/30 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
              How Catalyst Solves This
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-pretty text-lg text-muted-foreground leading-relaxed">
              The only risk-free platform that teaches you the "why" behind market movements through AI-powered
              scenarios.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Zero-Risk Learning</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Build market intuition and reaction skills without risking a single dollar. Practice until you're
                  confident.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">AI-Powered Realism</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Our AI generates realistic news, geopolitical events, and earnings reports that teach fundamental
                  analysis.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Instant Breakdowns</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Every trade becomes a learning moment. We show you exactly why the market moved, turning losses into
                  lessons.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <Newspaper className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Controlled Environment</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Read the news, make your decision, then trigger the market reaction. Replace panic with deliberate
                  learning.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Market Intuition</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Learn how Fed announcements, earnings reports, and geopolitical events directly impact stock prices.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Accelerated Learning</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Compress years of learning into months. Build the skills you need before investing real money.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Process */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Your Learning Journey
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground leading-relaxed">
              A step-by-step process designed to build real trading skills
            </p>
          </div>

          <div className="mt-16 space-y-12">
            <div className="flex flex-col gap-8 md:flex-row md:items-center">
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  1
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-foreground">Read AI-Generated News</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Browse realistic headlines and detailed articles about market events. Learn which stocks might be
                  affected and why.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8 md:flex-row md:items-center">
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  2
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-foreground">Make Your Trades</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Take your time to analyze the information and make informed trading decisions. No pressure, no real
                  money at risk.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8 md:flex-row md:items-center">
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  3
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-foreground">Trigger Market Reaction</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  When you're ready, trigger the market update. Watch how your predicted stocks move based on the news
                  events.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-8 md:flex-row md:items-center">
              <div className="flex-shrink-0">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground">
                  4
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-foreground">Learn From Detailed Breakdowns</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Get in-depth explanations of why each stock moved. Understand the signals, learn what top investors
                  would do, and improve your strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="border-y border-border bg-muted/30 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Built For Aspiring Investors
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground leading-relaxed">
              Whether you're a college student or young professional, Catalyst helps you build financial literacy
              without the financial risk.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            <Card className="border-2">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold text-foreground">Learn Now, Invest Later</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Don't have money to invest yet? Perfect. Build your market knowledge now so you're well-equipped when
                  you do have capital to invest.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold text-foreground">Practice Makes Perfect</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Learn from mistakes without consequences. Develop the confidence and skills you need to succeed in
                  real markets.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Start Your Journey to Financial Literacy
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground leading-relaxed">
            Join the waitlist and be among the first to experience risk-free trading education powered by AI.
          </p>
          <div className="mt-10">
            <Button asChild size="lg" className="h-14 px-10 text-lg">
              <a href={WAITLIST_FORM_URL} target="_blank" rel="noopener noreferrer">
                Join the Waitlist
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <div className="text-xl font-bold text-foreground">Catalyst</div>
              <p className="mt-1 text-sm text-muted-foreground">Master trading without the risk</p>
            </div>
            <div className="text-center text-sm text-muted-foreground md:text-right">
              © 2025 Catalyst. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
