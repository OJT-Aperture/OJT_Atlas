import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// TODO: Dit moet uit database komen
const classData = {
  name: 'Klas 1A',
  students: 24,
  activeModules: 3,
};

const tMeasurementData = [
  { week: 'Week 1', score: 65 },
  { week: 'Week 2', score: 72 },
  { week: 'Week 3', score: 68 },
  { week: 'Week 4', score: 78 },
  { week: 'Week 5', score: 82 },
];

export default async function ClassDashboard(props: {
  params: Promise<{ classId: string }>;
}) {
  const params = await props.params;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Leerlingen</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{classData.students}</div>
            <p className="text-xs text-muted-foreground">in deze klas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Actieve Modules</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{classData.activeModules}</div>
            <p className="text-xs text-muted-foreground">modules bezig</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Gemiddeld Cijfer</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7.8</div>
            <p className="text-xs text-muted-foreground">van alle modules</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>T-Meting Voortgang</CardTitle>
          <CardDescription>Wekelijkse scores van de laatste 5 weken</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {tMeasurementData.map((data) => (
              <div key={data.week} className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{data.week}</span>
                <div className="flex items-center gap-2">
                  <div className="h-2 w-32 overflow-hidden rounded-full bg-muted">
                    <div 
                      className="h-full bg-blue-600" 
                      style={{ width: `${data.score}%` }}
                    />
                  </div>
                  <span className="font-medium text-sm w-8">{data.score}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Volgende Modules</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Module A - Basis</p>
                <p className="text-sm text-muted-foreground">Start: 20 mei</p>
              </div>
              <Badge>Gepland</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Module B - Gevorderd</p>
                <p className="text-sm text-muted-foreground">Start: 27 mei</p>
              </div>
              <Badge>Gepland</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Komende T-Metingen</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">T-Meting Week 6</p>
                <p className="text-sm text-muted-foreground">20 mei 2026</p>
              </div>
              <Badge variant="outline">Wachten</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">T-Meting Week 7</p>
                <p className="text-sm text-muted-foreground">27 mei 2026</p>
              </div>
              <Badge variant="outline">Wachten</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
