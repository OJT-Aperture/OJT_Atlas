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
          'fixed inset-y-0 left-0 z-10 hidden flex-col border-r bg-[#E0FFDB] text-black transition-all duration-300 sm:flex',
          isExpanded ? 'w-64' : 'w-14'
        )}
      >
        {/* Logo */}
        <div className="flex flex-col items-center border-b p-6">
          <Link
            href="/"
            className="group flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground"
          >
            <VercelLogo className="h-8 w-8 transition-all group-hover:scale-110" />
            <span className="sr-only">Atlas dashboard</span>
          </Link>
          {isExpanded && (
            <span className="mt-2 text-sm font-semibold">Atlas dashboard</span>
          )}
        </div>

        {/* Navigation Section */}
        <nav className="flex-1 space-y-2 overflow-y-auto px-2 py-4">
          <div className="space-y-2">
            {isExpanded && (
              <div className="px-2 py-2 text-xs font-semibold text-black uppercase tracking-wider">
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
                    'text-black hover:text-black/80 hover:bg-accent',
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
            <div className="px-2 py-2 text-xs font-semibold text-black uppercase tracking-wider">
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
                  'text-black hover:text-black/80 hover:bg-accent',
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
              'text-black hover:text-black/80 hover:bg-accent',
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
