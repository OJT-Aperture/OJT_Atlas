import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, BookOpen, Zap } from 'lucide-react';

// TODO: Dit moet uit database komen
const agendaItems = [
  {
    id: '1',
    type: 'module',
    title: 'Module A - Basis Starten',
    date: '20 mei 2026',
    time: '09:00',
    description: 'Start van Module A basis concepten',
  },
  {
    id: '2',
    type: 't-measurement',
    title: 'T-Meting Week 6',
    date: '23 mei 2026',
    time: '10:30',
    description: 'Wekelijkse meting van voortgang',
  },
  {
    id: '3',
    type: 'module',
    title: 'Module A - Inlevering',
    date: '30 mei 2026',
    time: '16:00',
    description: 'Deadline inlevering eindproduct',
  },
  {
    id: '4',
    type: 't-measurement',
    title: 'T-Meting Week 7',
    date: '30 mei 2026',
    time: '09:00',
    description: 'Wekelijkse meting van voortgang',
  },
  {
    id: '5',
    type: 'module',
    title: 'Module B - Gevorderd Starten',
    date: '3 juni 2026',
    time: '09:00',
    description: 'Start van Module B gevorderde technieken',
  },
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'module':
      return <BookOpen className="h-5 w-5" />;
    case 't-measurement':
      return <Zap className="h-5 w-5" />;
    default:
      return <Calendar className="h-5 w-5" />;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'module':
      return 'bg-blue-500/10 text-blue-700';
    case 't-measurement':
      return 'bg-yellow-500/10 text-yellow-700';
    default:
      return 'bg-gray-500/10 text-gray-700';
  }
};

const getTypeBadge = (type: string) => {
  switch (type) {
    case 'module':
      return 'Module';
    case 't-measurement':
      return 'T-Meting';
    default:
      return 'Event';
  }
};

export default async function AgendaPage(props: {
  params: Promise<{ classId: string }>;
}) {
  const { classId } = await props.params;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Agenda</h2>
        <p className="text-muted-foreground">
          Overzicht van lessen, modules planning en T-metingen
        </p>
      </div>

      <div className="space-y-3">
        {agendaItems.map((item) => (
          <Card key={item.id}>
            <CardContent className="pt-6">
              <div className="flex gap-4">
                <div className={`rounded-lg p-2 ${getTypeColor(item.type)}`}>
                  {getTypeIcon(item.type)}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                    <Badge variant="outline">
                      {getTypeBadge(item.type)}
                    </Badge>
                  </div>
                  <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {item.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {item.time}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Kalender Statistieken</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <p className="text-sm text-muted-foreground">Geplande Modules</p>
              <p className="text-2xl font-bold">2</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">T-Metingen</p>
              <p className="text-2xl font-bold">2</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Volgende Event</p>
              <p className="text-2xl font-bold">7 dagen</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
