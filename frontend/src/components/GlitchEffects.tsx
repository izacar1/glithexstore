import { useEffect, useRef, ReactNode } from 'react';

// Glitch Text Component
export function GlitchText({
  children,
  className = '',
}: {
  children: string;
  className?: string;
}) {
  return (
    <span className={`glitch-text ${className}`} data-text={children}>
      {children}
    </span>
  );
}

// Neon Button Component
export function NeonButton({
  children,
  onClick,
  variant = 'purple',
  className = '',
  href,
}: {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'purple' | 'blue' | 'outline';
  className?: string;
  href?: string;
}) {
  const baseClasses =
    'relative px-8 py-3 font-orbitron font-bold text-sm tracking-widest transition-[transform,box-shadow] duration-300 ease-out uppercase';

  const variantClasses = {
    purple:
      'bg-gradient-to-r from-cyber-purple to-cyber-blue !text-white hover:shadow-[0_0_25px_rgba(139,92,246,0.75)] hover:scale-105',
    blue: 'bg-gradient-to-r from-cyber-blue to-cyber-cyan !text-white hover:shadow-[0_0_25px_rgba(59,130,246,0.75)] hover:scale-105',
    outline:
      'bg-transparent border border-cyber-purple text-cyber-purple hover:bg-cyber-purple/10 hover:shadow-[0_0_20px_rgba(139,92,246,0.55)] hover:scale-[1.02]',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

// Fade In on Scroll Component
export function FadeInSection({
  children,
  className = '',
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`fade-in-section ${className}`}>
      {children}
    </div>
  );
}

// Terminal Text (typing effect)
export function TerminalText({
  text,
  className = '',
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current && ref.current) {
            hasAnimated.current = true;
            let i = 0;
            ref.current.textContent = '';
            const interval = setInterval(() => {
              if (ref.current && i < text.length) {
                ref.current.textContent += text.charAt(i);
                i++;
              } else {
                clearInterval(interval);
              }
            }, 30);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [text]);

  return (
    <span ref={ref} className={`font-mono ${className}`}>
      {text}
    </span>
  );
}

// Cyber Card Component
export function CyberCard({
  children,
  className = '',
  glowColor = 'purple',
  onClick,
}: {
  children: ReactNode;
  className?: string;
  glowColor?: 'purple' | 'blue';
  onClick?: () => void;
}) {
  const glowClasses = {
    purple: 'hover:shadow-[0_0_30px_rgba(139,92,246,0.2)] hover:border-cyber-purple/50',
    blue: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:border-cyber-blue/50',
  };

  return (
    <div
      onClick={onClick}
      className={`bg-cyber-card border border-cyber-border rounded-lg transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 ${glowClasses[glowColor]} ${className}`}
    >
      {children}
    </div>
  );
}

// Section Divider
export function CyberDivider() {
  return (
    <div className="w-full h-px bg-gradient-to-r from-transparent via-cyber-purple/50 to-transparent my-2" />
  );
}