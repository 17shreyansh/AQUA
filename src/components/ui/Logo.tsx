import Image from "next/image";

export function Logo({ 
  className = "", 
  width = 150 
}: { 
  className?: string; 
  width?: number 
}) {
  return (
    <div 
      className={`relative flex items-center justify-center ${className}`}
      style={{ 
        width: width, 
        height: width * 0.75 // Standard aspect ratio fallback
      }}
    >
      <Image 
        src="/images/logo-updated.png" 
        alt="Aqua Mountain Logo" 
        fill
        sizes="(max-width: 768px) 150px, 200px"
        className="object-contain"
        priority
      />
    </div>
  );
}
