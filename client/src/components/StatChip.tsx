interface StatChipProps {
  value: string;
  label: string;
}

export const StatChip = ({ value, label }: StatChipProps) => {
  return (
    <div className="flex flex-col items-center p-4 bg-card border border-border rounded-lg hover:border-primary transition-colors">
      <div className="font-mono text-3xl font-bold text-primary">{value}</div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>
  );
};
