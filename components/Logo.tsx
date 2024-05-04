import { Landmark } from "lucide-react";

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2">
      <Landmark className="stroke h-8 w-8 stroke-amber-500 stroke-[1.5]" />
      <p className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-2xl font-bold leading-tight tracking-tighter text-transparent">
        MoneyMaestro
      </p>
    </a>
  );
}

export function LogoMobile() {
  return (
    <a href="/" className="flex items-center gap-2">
      <p className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
        MoneyMaestro
      </p>
    </a>
  );
}

export default Logo;
