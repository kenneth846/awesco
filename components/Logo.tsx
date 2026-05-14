import Image from 'next/image';

interface LogoProps {
  className?: string;
}

export default function Logo({ className }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="Awesco Septic"
      width={400}
      height={110}
      className={className}
      priority
    />
  );
}
