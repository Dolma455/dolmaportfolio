'use client';

import { cn } from '@/lib/utils';
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

export interface DockItem {
  title: string;
  icon: React.ReactNode;
  href: string;
  onClick?: (e: React.MouseEvent) => void;
}

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: DockItem[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: DockItem[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn('relative block md:hidden', className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute bottom-full mb-3 inset-x-0 flex flex-col gap-2 items-center z-50"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.04,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.04 }}
              >
                <Link
                  href={item.href}
                  onClick={(e) => {
                    if (item.onClick) item.onClick(e);
                    setOpen(false);
                  }}
                  className="h-11 w-11 rounded-full bg-[#0D1117]/60 border border-white/20 backdrop-blur-2xl flex items-center justify-center text-slate-200 hover:text-white shadow-xl"
                >
                  <div className="h-5 w-5 flex items-center justify-center">
                    {item.icon}
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle Navigation Dock"
        className="h-13 w-13 rounded-full bg-[#0D1117]/50 border border-white/25 backdrop-blur-2xl flex items-center justify-center text-white shadow-2xl p-3"
      >
        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>
    </div>
  );
};

function FloatingDockDesktop({
  items,
  className,
}: {
  items: DockItem[];
  className?: string;
}) {
  const mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        'mx-auto hidden md:flex h-20 gap-4 sm:gap-5 items-center rounded-3xl bg-[#0D1117]/45 border border-white/20 px-5 py-3 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] ring-1 ring-white/10',
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
}

function IconContainer({
  mouseX,
  title,
  icon,
  href,
  onClick,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
  onClick?: (e: React.MouseEvent) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-160, 0, 160], [50, 84, 50]);
  const heightSync = useTransform(distance, [-160, 0, 160], [50, 84, 50]);

  const width = useSpring(widthSync, { mass: 0.1, stiffness: 160, damping: 14 });
  const height = useSpring(heightSync, { mass: 0.1, stiffness: 160, damping: 14 });

  const widthTransformIcon = useTransform(distance, [-160, 0, 160], [22, 38, 22]);
  const heightTransformIcon = useTransform(distance, [-160, 0, 160], [22, 38, 22]);

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 160,
    damping: 14,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 160,
    damping: 14,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href} onClick={onClick}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-white/[0.04] hover:bg-white/[0.14] border border-white/15 hover:border-pink-300/50 backdrop-blur-md flex items-center justify-center relative transition-colors shadow-md group"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 8, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={{ opacity: 0, y: 4, x: '-50%' }}
              className="px-3 py-1 whitespace-pre rounded-lg bg-[#07090E]/80 backdrop-blur-xl border border-white/20 text-white font-mono font-medium absolute left-1/2 -translate-x-1/2 -top-10 w-fit text-xs shadow-2xl pointer-events-none z-50"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center text-slate-200 group-hover:text-white"
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}
