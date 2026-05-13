import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Zap, Plus } from 'lucide-react';

// TODO: Dit moet uit database komen
const tMeasurements = [
  {
    id: '1',
    week: 'Week 5',
    date: '13 mei 2026',
    averageScore: 82,
    totalStudents: 24,
    completed: true,
  },
  {
    id: '2',
    week: 'Week 4',
    date: '6 mei 2026',
    averageScore: 78,
    totalStudents: 24,
    completed: true,
  },
  {
    id: '3',
    week: 'Week 3',
    date: '29 april 2026',
    averageScore: 68,
    totalStudents: 24,
    completed: true,
  },
];

export default async function TMeasurementsPage(props: {
  params: Promise<{ classId: string }>;
}) {
  const { classId } = await props.params;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">T-Metingen</h2>
        <p className="text-muted-foreground">
          Registreer momentopnamen van voortgang gedurende de lessenreeks
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Nieuwe T-Meting</CardTitle>
          <CardDescription>Voeg snel een nieuwe meting toe</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <label className="text-sm font-medium">Week</label>
              <Input type="text" placeholder="Week 6" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Datum</label>
              <Input type="date" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Gemiddeld Cijfer</label>
              <Input type="number" placeholder="85" min="0" max="100" />
            </div>
          </div>
          <Button className="w-full">
            <Plus className="mr-2 h-4 w-4" />
            T-Meting Toevoegen
          </Button>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Recente T-Metingen</h3>
        {tMeasurements.map((measurement) => (
          <Card key={measurement.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-lg bg-yellow-500/10 p-2">
                    <Zap className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <CardTitle className="text-base">{measurement.week}</CardTitle>
                    <CardDescription>{measurement.date}</CardDescription>
                  </div>
                </div>
                <Badge>{measurement.averageScore}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm">
                <div className="text-muted-foreground">
                  {measurement.totalStudents} leerlingen
                </div>
                <Button variant="outline" size="sm">
                  Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
