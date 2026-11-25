import { Cpu, Workflow, Globe } from "lucide-react";
import type { Service } from "@/lib/services";

const map = { cpu: Cpu, workflow: Workflow, globe: Globe } as const;

export function ServiceIcon({ name, size = 22, className }: { name: Service["icon"]; size?: number; className?: string }) {
  const Icon = map[name];
  return <Icon size={size} strokeWidth={1.75} className={className} aria-hidden />;
}
