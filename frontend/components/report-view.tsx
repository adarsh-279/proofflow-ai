"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"
import { Download, Filter, ChevronDown } from "lucide-react"

// Mock data for detailed project analysis
const projectList = [
  { id: 1, name: "E-Commerce Platform", lastAnalyzed: "2025-01-20" },
  { id: 2, name: "Social Media App", lastAnalyzed: "2025-01-19" },
  { id: 3, name: "AI Chat Service", lastAnalyzed: "2025-01-18" },
  { id: 4, name: "Mobile Fitness App", lastAnalyzed: "2025-01-17" },
  { id: 5, name: "Analytics Dashboard", lastAnalyzed: "2025-01-16" },
]

const authenticityMetrics = [
  { metric: "Code Quality", score: 92 },
  { metric: "Dev Journey", score: 88 },
  { metric: "Git History", score: 95 },
  { metric: "Dependencies", score: 85 },
  { metric: "Architecture", score: 89 },
  { metric: "Documentation", score: 82 },
]

const timelineData = [
  { phase: "Planning", commits: 45, days: 5 },
  { phase: "Development", commits: 234, days: 30 },
  { phase: "Testing", commits: 67, days: 10 },
  { phase: "Deployment", commits: 23, days: 3 },
]

const flaggedIssues = [
  {
    id: 1,
    severity: "high",
    title: "Unusual commit pattern detected",
    description: "Multiple large commits in short time span",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    severity: "medium",
    title: "Missing test coverage",
    description: "Critical modules lack unit tests",
    timestamp: "5 hours ago",
  },
  {
    id: 3,
    severity: "low",
    title: "Documentation gaps",
    description: "Some API endpoints not documented",
    timestamp: "1 day ago",
  },
]

const detailedAnalysis = [
  { name: "Code Organization", value: 94 },
  { name: "Error Handling", value: 87 },
  { name: "Performance", value: 91 },
  { name: "Security", value: 89 },
  { name: "Maintainability", value: 86 },
  { name: "Testing", value: 78 },
]

export function ReportView() {
  const [selectedProject, setSelectedProject] = useState(projectList[0])
  const [showFilters, setShowFilters] = useState(false)

  return (
    <div className="p-8 bg-background min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">Project Analysis Reports</h1>

        {/* Project Selector */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <button className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg text-foreground hover:bg-muted transition-colors">
              <span>{selectedProject.name}</span>
              <ChevronDown size={16} />
            </button>
            <div className="absolute top-full left-0 mt-2 w-80 bg-card border border-border rounded-lg shadow-lg z-10 hidden group-hover:block">
              {projectList.map((project) => (
                <button
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="w-full text-left px-4 py-3 hover:bg-muted transition-colors border-b border-border last:border-b-0"
                >
                  <p className="font-medium text-foreground">{project.name}</p>
                  <p className="text-xs text-muted-foreground">{project.lastAnalyzed}</p>
                </button>
              ))}
            </div>
          </div>

          <button className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg text-foreground hover:bg-muted transition-colors">
            <Filter size={16} />
            <span>Filters</span>
          </button>

          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity ml-auto">
            <Download size={16} />
            <span>Export Report</span>
          </button>
        </div>
      </div>

      {/* Overall Score Card */}
      <Card className="p-8 bg-card border-border mb-8">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground mb-2">Overall Authenticity Score</p>
            <p className="text-5xl font-bold text-foreground">89%</p>
            <p className="text-sm text-chart-1 mt-2">Verified as Authentic</p>
          </div>
          <div className="text-right">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full border-8 border-chart-1 relative">
              <span className="text-4xl font-bold text-foreground">89</span>
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-chart-1 rounded-full flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">✓</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Radar Chart - Authenticity Metrics */}
        <Card className="p-6 bg-card border-border">
          <h2 className="text-lg font-semibold text-foreground mb-6">Authenticity Metrics</h2>
          <ResponsiveContainer width="100%" height={300}>
            <RadarChart data={authenticityMetrics}>
              <PolarGrid stroke="hsl(var(--color-border))" />
              <PolarAngleAxis dataKey="metric" stroke="hsl(var(--color-muted-foreground))" />
              <PolarRadiusAxis stroke="hsl(var(--color-border))" />
              <Radar
                name="Score"
                dataKey="score"
                stroke="hsl(var(--color-chart-1))"
                fill="hsl(var(--color-chart-1))"
                fillOpacity={0.6}
              />
            </RadarChart>
          </ResponsiveContainer>
        </Card>

        {/* Timeline Chart */}
        <Card className="col-span-1 lg:col-span-2 p-6 bg-card border-border">
          <h2 className="text-lg font-semibold text-foreground mb-6">Development Timeline</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={timelineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--color-border))" />
              <XAxis dataKey="phase" stroke="hsl(var(--color-muted-foreground))" />
              <YAxis stroke="hsl(var(--color-muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--color-card))",
                  border: "1px solid hsl(var(--color-border))",
                }}
              />
              <Legend />
              <Bar dataKey="commits" fill="hsl(var(--color-chart-1))" />
              <Bar dataKey="days" fill="hsl(var(--color-chart-2))" />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Detailed Analysis and Flagged Issues */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Analysis Details */}
        <Card className="col-span-1 lg:col-span-2 p-6 bg-card border-border">
          <h2 className="text-lg font-semibold text-foreground mb-6">Detailed Analysis Scores</h2>
          <div className="space-y-4">
            {detailedAnalysis.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-foreground">{item.name}</span>
                  <span className="text-sm font-bold text-foreground">{item.value}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-chart-1 to-chart-2 h-2 rounded-full transition-all"
                    style={{ width: `${item.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Flagged Issues */}
        <Card className="p-6 bg-card border-border">
          <h2 className="text-lg font-semibold text-foreground mb-6">Flagged Issues</h2>
          <div className="space-y-4">
            {flaggedIssues.map((issue) => (
              <div
                key={issue.id}
                className={`p-4 rounded-lg border-l-4 ${
                  issue.severity === "high"
                    ? "border-l-destructive bg-destructive/10"
                    : issue.severity === "medium"
                      ? "border-l-chart-2 bg-chart-2/10"
                      : "border-l-chart-4 bg-chart-4/10"
                }`}
              >
                <p className="font-medium text-foreground text-sm">{issue.title}</p>
                <p className="text-xs text-muted-foreground mt-1">{issue.description}</p>
                <p className="text-xs text-muted-foreground mt-2">{issue.timestamp}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recommendations */}
      <Card className="p-6 bg-card border-border">
        <h2 className="text-lg font-semibold text-foreground mb-4">Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-muted">
            <p className="font-medium text-foreground text-sm mb-2">Increase Test Coverage</p>
            <p className="text-xs text-muted-foreground">
              Aim for 85%+ coverage on critical modules to boost authenticity score.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-muted">
            <p className="font-medium text-foreground text-sm mb-2">Document API Endpoints</p>
            <p className="text-xs text-muted-foreground">
              Complete API documentation for all public endpoints to improve clarity.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-muted">
            <p className="font-medium text-foreground text-sm mb-2">Regularize Commit Pattern</p>
            <p className="text-xs text-muted-foreground">
              Maintain consistent, smaller commits to better reflect development journey.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-muted">
            <p className="font-medium text-foreground text-sm mb-2">Code Performance Audit</p>
            <p className="text-xs text-muted-foreground">
              Conduct performance profiling to identify optimization opportunities.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}
