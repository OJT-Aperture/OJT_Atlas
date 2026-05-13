import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  BarChart3, 
  BookOpen, 
  Calendar, 
  TrendingUp, 
  Zap 
} from 'lucide-react';

export default async function ClassLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ classId: string }>;
}) {
  const { classId } = await params;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Klas Dashboard</h1>
        <p className="text-muted-foreground">Beheer je klas en volg de voortgang</p>
      </div>

      <Tabs defaultValue="dashboard" className="w-full">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="dashboard" asChild>
            <Link href={`/classes/${classId}`} className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              <span className="hidden sm:inline">Dashboard</span>
            </Link>
          </TabsTrigger>
          <TabsTrigger value="modules" asChild>
            <Link href={`/classes/${classId}/modules`} className="flex items-center gap-2">
              <BookOpen className="h-4 w-4" />
              <span className="hidden sm:inline">Modules</span>
            </Link>
          </TabsTrigger>
          <TabsTrigger value="t-measurements" asChild>
            <Link href={`/classes/${classId}/t-measurements`} className="flex items-center gap-2">
              <Zap className="h-4 w-4" />
              <span className="hidden sm:inline">T-Meting</span>
            </Link>
          </TabsTrigger>
          <TabsTrigger value="results" asChild>
            <Link href={`/classes/${classId}/results`} className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              <span className="hidden sm:inline">Resultaten</span>
            </Link>
          </TabsTrigger>
          <TabsTrigger value="agenda" asChild>
            <Link href={`/classes/${classId}/agenda`} className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span className="hidden sm:inline">Agenda</span>
            </Link>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {children}
    </div>
  );
}
