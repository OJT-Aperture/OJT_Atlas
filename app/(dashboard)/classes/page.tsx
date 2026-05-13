'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Users2 } from 'lucide-react';

// TODO: Dit moet uit database komen
const classes = [
  { id: '1', name: 'Klas 1A', teacher: 'Dhr. Jansen', students: 24 },
  { id: '2', name: 'Klas 1B', teacher: 'Mevr. Peeters', students: 22 },
  { id: '3', name: 'Klas 2A', teacher: 'Dhr. Hendriks', students: 25 },
];

export default function ClassesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Klassen</h1>
        <p className="text-muted-foreground">Selecteer een klas om mee aan de slag te gaan</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {classes.map((classe) => (
          <Link key={classe.id} href={`/classes/${classe.id}`}>
            <Card className="cursor-pointer transition-all hover:shadow-lg hover:border-primary">
              <CardHeader>
                <CardTitle>{classe.name}</CardTitle>
                <CardDescription>{classe.teacher}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-sm">
                  <Users2 className="h-4 w-4 text-muted-foreground" />
                  <span>{classe.students} leerlingen</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
