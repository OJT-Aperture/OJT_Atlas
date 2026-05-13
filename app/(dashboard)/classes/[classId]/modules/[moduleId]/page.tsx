'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Users2, Wand2, Download, Plus } from 'lucide-react';
import { useState } from 'react';
import { useParams } from 'next/navigation';

// TODO: Dit moet uit database komen
const moduleData = {
  name: 'Module A - Basis',
  description: 'Introductie tot de fundamentele concepten',
  students: [
    { id: '1', name: 'Jan Janssen', compatibility: 'Hoog' },
    { id: '2', name: 'Maria Pieterse', compatibility: 'Hoog' },
    { id: '3', name: 'Pieter de Vries', compatibility: 'Gemiddeld' },
    { id: '4', name: 'Anna Hendriksen', compatibility: 'Hoog' },
  ],
};

export default function ClassroomSetupPage() {
  const params = useParams();
  const classId = params?.classId as string;
  const moduleId = params?.moduleId as string;

  // Note: For now we mock the params, but this should ideally be handled differently
  // to maintain async server component benefits
  const [seatingChart, setSeatingChart] = useState<unknown>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateSeating = async () => {
    setIsGenerating(true);
    // TODO: Hier komt de AI logica om klasseopstellingen te genereren
    // Op basis van student compatibiliteit scores
    setTimeout(() => {
      setSeatingChart({
        groups: [
          {
            name: 'Groep 1',
            students: ['Jan Janssen', 'Maria Pieterse', 'Anna Hendriksen'],
          },
          {
            name: 'Groep 2',
            students: ['Pieter de Vries'],
          },
        ],
      });
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Klasopstelling - {moduleData.name}</h2>
        <p className="text-muted-foreground">
          Genereer automatisch optimale groepsindelingen op basis van leerlingcompatibiliteit
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Totaal Leerlingen</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{moduleData.students.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hoge Compatibiliteit</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Groepen Gegenereerd</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{seatingChart ? 2 : 0}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Leerlingcompatibiliteit</CardTitle>
          <CardDescription>Automatische analyse op basis van resultaten en gedrag</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {moduleData.students.map((student) => (
              <div key={student.id} className="flex items-center justify-between border-b pb-2 last:border-0">
                <span className="font-medium">{student.name}</span>
                <Badge 
                  variant={student.compatibility === 'Hoog' ? 'default' : 'outline'}
                >
                  {student.compatibility}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Klasseopstelling Genereren</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {!seatingChart ? (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Klik op de knop hieronder om een optimale klasseopstelling te genereren. 
                Het systeem analyseert automatisch de compatibiliteit van leerlingen 
                en maakt groepen met maximale synergie.
              </p>
              <Button 
                onClick={handleGenerateSeating}
                disabled={isGenerating}
                className="w-full"
                size="lg"
              >
                <Wand2 className="mr-2 h-4 w-4" />
                {isGenerating ? 'Opstelling genereren...' : 'Opstelling Genereren'}
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="grid gap-4">
                {(seatingChart as any).groups?.map((group: any, idx: number) => (
                  <div key={idx} className="rounded-lg border p-4">
                    <h4 className="font-bold mb-2">{group.name}</h4>
                    <ul className="space-y-1">
                      {group.students.map((student: string, i: number) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center">
                          <Users2 className="mr-2 h-3 w-3" />
                          {student}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setSeatingChart(null)}>
                  Regenereren
                </Button>
                <Button className="flex-1">
                  <Download className="mr-2 h-4 w-4" />
                  Exporteren
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
