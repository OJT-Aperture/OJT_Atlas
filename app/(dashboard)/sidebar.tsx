'use client';

import Link from 'next/link';
import {
  Home,
  Zap,
  BookOpen,
  Calendar,
  TrendingUp,
  Settings,
  HelpCircle,
  ChevronLeft,
  Package2,
  School,
} from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { VercelLogo } from '@/components/icons';
import clsx from 'clsx';

export function DesktopNav() {
  const [isExpanded, setIsExpanded] = useState(true);

  const navigationItems = [
    { href: '/classes', label: 'Klassen', icon: School },
    { href: '#', label: 'T-meting', icon: Zap },
    { href: '#', label: 'Modules', icon: BookOpen },
    { href: '#', label: 'Agenda', icon: Calendar },
    { href: '#', label: 'Resultaten', icon: TrendingUp },
  ];

  const settingsItems = [
    { href: '#', label: 'Instellingen', icon: Settings },
    { href: '#', label: 'Help (FAQ)', icon: HelpCircle },
  ];

  return (
    <>
      <style>{`
        :root {
          --sidebar-width: ${isExpanded ? '256px' : '56px'};
        }
      `}</style>
      <aside
        className={clsx(
          'fixed inset-y-0 left-0 z-10 hidden flex-col border-r bg-background transition-all duration-300 sm:flex',
          isExpanded ? 'w-64' : 'w-14'
        )}
      >
        {/* Logo */}
        <div className="flex items-center justify-between border-b p-4">
          <Link
            href="/"
            className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
          >
            <VercelLogo className="h-3 w-3 transition-all group-hover:scale-110" />
            <span className="sr-only">OJT Atlas</span>
          </Link>
          {isExpanded && (
            <span className="text-sm font-semibold">OJT Atlas</span>
          )}
        </div>

        {/* Navigation Section */}
        <nav className="flex-1 space-y-2 overflow-y-auto px-2 py-4">
          <div className="space-y-2">
            {isExpanded && (
              <div className="px-2 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Navigatie
              </div>
            )}
            {navigationItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    'flex items-center gap-3 rounded-lg px-3 py-2 transition-colors',
                    'text-muted-foreground hover:text-foreground hover:bg-accent',
                    isExpanded ? 'text-sm' : 'justify-center'
                  )}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  {isExpanded && <span>{item.label}</span>}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Settings Section */}
        <nav className="space-y-2 border-t p-2">
          {isExpanded && (
            <div className="px-2 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Instellingen
            </div>
          )}
          {settingsItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  'flex items-center gap-3 rounded-lg px-3 py-2 transition-colors',
                  'text-muted-foreground hover:text-foreground hover:bg-accent',
                  isExpanded ? 'text-sm' : 'justify-center'
                )}
              >
                <Icon className="h-5 w-5 shrink-0" />
                {isExpanded && <span>{item.label}</span>}
              </Link>
            );
          })}

          {/* Toggle Button */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className={clsx(
              'flex w-full items-center gap-3 rounded-lg px-3 py-2 transition-colors',
              'text-muted-foreground hover:text-foreground hover:bg-accent',
              isExpanded ? 'text-sm' : 'justify-center'
            )}
            title={isExpanded ? 'Balk inklappen' : 'Balk uitklappen'}
          >
            <ChevronLeft
              className={clsx(
                'h-5 w-5 shrink-0 transition-transform',
                isExpanded ? 'rotate-0' : 'rotate-180'
              )}
            />
            {isExpanded && <span>Balk inklappen</span>}
          </button>
        </nav>
      </aside>
    </>
  );
}
