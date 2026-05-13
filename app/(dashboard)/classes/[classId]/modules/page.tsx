import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { BookOpen, ChevronRight } from 'lucide-react';

// TODO: Dit moet uit database komen
const modules = [
  {
    id: '1',
    name: 'Module A - Basis',
    description: 'Introductie tot de fundamentele concepten',
    duration: '2 weken',
    status: 'beschikbaar',
    difficulty: 'Beginner',
  },
  {
    id: '2',
    name: 'Module B - Gevorderd',
    description: 'Verdieping met praktische projecten',
    duration: '3 weken',
    status: 'beschikbaar',
    difficulty: 'Intermediate',
  },
  {
    id: '3',
    name: 'Module C - Expert',
    description: 'Geavanceerde technieken en best practices',
    duration: '4 weken',
    status: 'locked',
    difficulty: 'Advanced',
  },
];

export default async function ModulesPage(props: {
  params: Promise<{ classId: string }>;
}) {
  const { classId } = await props.params;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Modules</h2>
        <p className="text-muted-foreground">Selecteer een module om mee aan de slag te gaan</p>
      </div>

      <div className="grid gap-4">
        {modules.map((module) => (
          <Link 
            key={module.id} 
            href={`/classes/${classId}/modules/${module.id}`}
            className="block"
          >
            <Card className="cursor-pointer transition-all hover:shadow-lg hover:border-primary">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 rounded-lg bg-primary/10 p-2">
                      <BookOpen className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle>{module.name}</CardTitle>
                      <CardDescription>{module.description}</CardDescription>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="outline">{module.duration}</Badge>
                  <Badge 
                    variant={module.difficulty === 'Beginner' ? 'outline' : 'secondary'}
                  >
                    {module.difficulty}
                  </Badge>
                  {module.status === 'beschikbaar' && (
                    <Badge className="bg-green-600">Beschikbaar</Badge>
                  )}
                  {module.status === 'locked' && (
                    <Badge variant="destructive">Geblokkeerd</Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
