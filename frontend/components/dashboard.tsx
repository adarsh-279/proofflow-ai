"use client"

import { Card } from "@/components/ui/card"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { TrendingUp, AlertCircle, CheckCircle, Clock } from "lucide-react"

// Mock data
const activityData = [
  { date: "Jan 1", submissions: 12, verified: 10 },
  { date: "Jan 2", submissions: 19, verified: 15 },
  { date: "Jan 3", submissions: 15, verified: 12 },
  { date: "Jan 4", submissions: 22, verified: 19 },
  { date: "Jan 5", submissions: 18, verified: 16 },
  { date: "Jan 6", submissions: 25, verified: 23 },
  { date: "Jan 7", submissions: 28, verified: 25 },
]

const confidenceData = [
  { name: "High (>90%)", value: 156, color: "hsl(var(--color-chart-1))" },
  { name: "Medium (70-90%)", value: 89, color: "hsl(var(--color-chart-2))" },
  { name: "Low (<70%)", value: 34, color: "hsl(var(--color-chart-3))" },
]

const recentProjects = [
  { id: 1, name: "E-Commerce Platform", status: "verified", confidence: 94, date: "2025-01-20" },
  { id: 2, name: "Social Media App", status: "verified", confidence: 87, date: "2025-01-19" },
  { id: 3, name: "AI Chat Service", status: "pending", confidence: 72, date: "2025-01-18" },
  { id: 4, name: "Mobile Fitness App", status: "verified", confidence: 91, date: "2025-01-17" },
  { id: 5, name: "Analytics Dashboard", status: "pending", confidence: 65, date: "2025-01-16" },
]

const activityTimeline = [
  { id: 1, action: "Project verified", project: "E-Commerce Platform", time: "2 hours ago" },
  { id: 2, action: "Analysis completed", project: "AI Chat Service", time: "4 hours ago" },
  { id: 3, action: "New submission", project: "Mobile Fitness App", time: "6 hours ago" },
  { id: 4, action: "Project verified", project: "Analytics Dashboard", time: "1 day ago" },
]

export function Dashboard() {
  return (
    <div className="p-8 bg-background">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's your project authenticity overview.</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="p-6 bg-card border-border">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Total Projects</p>
              <p className="text-3xl font-bold text-foreground">279</p>
            </div>
            <TrendingUp className="w-5 h-5 text-chart-1" />
          </div>
          <p className="text-xs text-muted-foreground mt-4">+12 this week</p>
        </Card>

        <Card className="p-6 bg-card border-border">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Verified Projects</p>
              <p className="text-3xl font-bold text-foreground">245</p>
            </div>
            <CheckCircle className="w-5 h-5 text-chart-1" />
          </div>
          <p className="text-xs text-muted-foreground mt-4">87.8% success rate</p>
        </Card>

        <Card className="p-6 bg-card border-border">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Pending Reviews</p>
              <p className="text-3xl font-bold text-foreground">24</p>
            </div>
            <Clock className="w-5 h-5 text-chart-2" />
          </div>
          <p className="text-xs text-muted-foreground mt-4">Avg. 2.3 hours to review</p>
        </Card>

        <Card className="p-6 bg-card border-border">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-muted-foreground mb-1">Flagged Issues</p>
              <p className="text-3xl font-bold text-foreground">10</p>
            </div>
            <AlertCircle className="w-5 h-5 text-destructive" />
          </div>
          <p className="text-xs text-muted-foreground mt-4">Requires attention</p>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Activity Chart */}
        <Card className="col-span-1 lg:col-span-2 p-6 bg-card border-border">
          <h2 className="text-lg font-semibold text-foreground mb-6">Weekly Activity</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--color-border))" />
              <XAxis dataKey="date" stroke="hsl(var(--color-muted-foreground))" />
              <YAxis stroke="hsl(var(--color-muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--color-card))",
                  border: "1px solid hsl(var(--color-border))",
                }}
              />
              <Legend />
              <Bar dataKey="submissions" fill="hsl(var(--color-chart-1))" />
              <Bar dataKey="verified" fill="hsl(var(--color-chart-2))" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Confidence Distribution */}
        <Card className="p-6 bg-card border-border">
          <h2 className="text-lg font-semibold text-foreground mb-6">Confidence Levels</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={confidenceData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {confidenceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Recent Projects and Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Projects */}
        <Card className="col-span-1 lg:col-span-2 p-6 bg-card border-border">
          <h2 className="text-lg font-semibold text-foreground mb-6">Recent Projects</h2>
          <div className="space-y-4">
            {recentProjects.map((project) => (
              <div
                key={project.id}
                className="flex items-center justify-between p-4 rounded-lg border border-border hover:bg-muted transition-colors"
              >
                <div className="flex-1">
                  <p className="font-medium text-foreground">{project.name}</p>
                  <p className="text-sm text-muted-foreground">{project.date}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-sm font-semibold text-foreground">{project.confidence}%</p>
                    <p className={`text-xs ${project.status === "verified" ? "text-chart-1" : "text-chart-2"}`}>
                      {project.status === "verified" ? "Verified" : "Pending"}
                    </p>
                  </div>
                  <div
                    className={`w-2 h-2 rounded-full ${project.status === "verified" ? "bg-chart-1" : "bg-chart-2"}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Activity Timeline */}
        <Card className="p-6 bg-card border-border">
          <h2 className="text-lg font-semibold text-foreground mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {activityTimeline.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="relative flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-chart-1 mt-2" />
                  <div className="w-0.5 h-12 bg-border" />
                </div>
                <div className="flex-1 pb-4">
                  <p className="text-sm font-medium text-foreground">{item.action}</p>
                  <p className="text-xs text-muted-foreground">{item.project}</p>
                  <p className="text-xs text-muted-foreground mt-1">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}
