import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TrendingUp } from 'lucide-react';

// TODO: Dit moet uit database komen
const results = [
  {
    id: '1',
    student: 'Jan Janssen',
    module: 'Module A - Basis',
    score: 85,
    progress: 'Uitstekend',
    completionDate: '10 mei 2026',
  },
  {
    id: '2',
    student: 'Maria Pieterse',
    module: 'Module A - Basis',
    score: 92,
    progress: 'Uitstekend',
    completionDate: '10 mei 2026',
  },
  {
    id: '3',
    student: 'Pieter de Vries',
    module: 'Module A - Basis',
    score: 76,
    progress: 'Goed',
    completionDate: '12 mei 2026',
  },
  {
    id: '4',
    student: 'Anna Hendriksen',
    module: 'Module A - Basis',
    score: 88,
    progress: 'Uitstekend',
    completionDate: '11 mei 2026',
  },
];

export default async function ResultsPage(props: {
  params: Promise<{ classId: string }>;
}) {
  const { classId } = await props.params;

  const averageScore = Math.round(
    results.reduce((sum, r) => sum + r.score, 0) / results.length
  );

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Resultaten</h2>
        <p className="text-muted-foreground">
          Overzicht van alle moduleresultaten per leerling
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Gemiddeld Cijfer</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{averageScore}</div>
            <p className="text-xs text-muted-foreground">voor alle modules</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Afgerond</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">4</div>
            <p className="text-xs text-muted-foreground">modules</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Slaagpercentage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">100%</div>
            <p className="text-xs text-muted-foreground">van leerlingen</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Moduleresultaten</CardTitle>
          <CardDescription>Alle resultaten van leerlingen in modules</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Leerling</TableHead>
                <TableHead>Module</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Voortgang</TableHead>
                <TableHead>Afgerond op</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {results.map((result) => (
                <TableRow key={result.id}>
                  <TableCell className="font-medium">{result.student}</TableCell>
                  <TableCell>{result.module}</TableCell>
                  <TableCell>
                    <Badge>{result.score}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge 
                      variant={result.progress === 'Uitstekend' ? 'default' : 'outline'}
                    >
                      {result.progress}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {result.completionDate}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
