import { cn } from "@/lib/utils";

export default function ProductPrice({
  value,
  classname,
}: {
  value: number;
  classname?: string;
}) {
  //format the price to 2 decimal places
  const formattedPrice = value.toFixed(2);
  // get int and float
  const [intValue, floatValue] = formattedPrice.split(".");
  return (
    <p className={cn("text-2xl", classname)}>
      <span className="text-xs align-super">$</span>
      <span className="text-xs align-super">{intValue}</span>
      <span className="text-xs align-super">.{floatValue}</span>
    </p>
  );
}
