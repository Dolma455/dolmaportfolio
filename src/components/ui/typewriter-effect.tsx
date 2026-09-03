'use client';

import { cn } from '@/lib/utils';
import { motion, stagger, useAnimate, useInView } from 'framer-motion';
import { useEffect, useState } from 'react';

export const TypewriterEffect = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(''),
    };
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  useEffect(() => {
    if (isInView) {
      animate(
        'span',
        {
          display: 'inline-block',
          opacity: 1,
          width: 'fit-content',
        },
        {
          duration: 0.3,
          delay: stagger(0.08),
          ease: 'easeInOut',
        }
      );
    }
  }, [isInView, words]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <motion.span
                  initial={{}}
                  key={`char-${index}`}
                  className={cn(
                    `text-white opacity-0 hidden`,
                    word.className
                  )}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </motion.div>
    );
  };
  return (
    <div
      className={cn(
        'text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center tracking-tight',
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className={cn(
          'inline-block rounded-sm w-[4px] h-6 sm:h-8 md:h-12 lg:h-14 bg-pink-400 align-middle ml-1',
          cursorClassName
        )}
      />
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}: {
  words: {
    text: string;
    className?: string;
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  // split text inside words into array of characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(''),
    };
  });

  const renderWords = () => {
    return (
      <div className="inline">
        {wordsArray.map((word, idx) => {
          return (
            <div key={`word-${idx}`} className="inline-block">
              {word.text.map((char, index) => (
                <span
                  key={`char-${index}`}
                  className={cn(`text-white`, word.className)}
                >
                  {char}
                </span>
              ))}
              &nbsp;
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className={cn('flex items-center justify-center my-2', className)}>
      <motion.div
        className="overflow-hidden pb-1"
        initial={{
          width: '0%',
        }}
        animate={{
          width: 'fit-content',
        }}
        transition={{
          duration: 1.4,
          ease: 'easeInOut',
        }}
      >
        <div
          className="text-[clamp(2.5rem,6.8vw,6.5rem)] font-black tracking-tight leading-none text-white"
          style={{
            whiteSpace: 'nowrap',
          }}
        >
          {renderWords()}{' '}
        </div>
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className={cn(
          'block rounded-sm w-[5px] h-8 sm:h-12 md:h-16 lg:h-20 bg-pink-300 align-middle ml-1.5 shrink-0',
          cursorClassName
        )}
      />
    </div>
  );
};

/**
 * Looping Typewriter for cycling between roles smoothly
 */
export const TypewriterRoles = ({
  roles,
  className,
  cursorClassName,
}: {
  roles: {
    words: { text: string; className?: string }[];
  }[];
  className?: string;
  cursorClassName?: string;
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % roles.length);
    }, 3400);
    return () => clearInterval(timer);
  }, [roles.length]);

  return (
    <div key={currentIdx} className={cn('flex items-center justify-center', className)}>
      <TypewriterEffectSmooth
        words={roles[currentIdx].words}
        cursorClassName={cursorClassName}
      />
    </div>
  );
};
