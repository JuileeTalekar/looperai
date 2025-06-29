import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ChartSelector = () => {
  return (
    <div className="hidden md:block">
      <Select>
        <SelectTrigger className="w-[110px] text-slate-300 border border-slate-300">
          <SelectValue placeholder="Monthly" />
        </SelectTrigger>
        <SelectContent className="text-slate-300 border bg-slate-800">
          <SelectItem value="light" className="text-slate-300">Monthly</SelectItem>
          <SelectItem value="dark" className="text-slate-300">Yearly</SelectItem>
          <SelectItem value="system" className="text-slate-300">Quaterly</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};

export default ChartSelector;
