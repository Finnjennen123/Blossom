import clsx from "clsx";

interface MoroccanPatternProps {
  className?: string;
  opacity?: number;
  variant?: "divider" | "background";
}

const MoroccanPattern = ({ className, opacity = 15, variant = "divider" }: MoroccanPatternProps) => {
  return (
    <div
      className={clsx(
        "relative w-full overflow-hidden pointer-events-none",
        variant === "divider" ? "h-32" : "absolute inset-0 h-full",
        className
      )}
      style={{ opacity: opacity / 100 }}
    >
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 0 L80 40 L40 80 L0 40 Z' fill='none' stroke='%23C4785C' stroke-width='1.5'/%3E%3Crect x='33' y='33' width='14' height='14' transform='rotate(45 40 40)' fill='none' stroke='%23C4785C' stroke-width='1.5'/%3E%3Cpath d='M40 20 L60 40 L40 60 L20 40 Z' fill='none' stroke='%23C4785C' stroke-width='1.5'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "80px 80px",
        }}
      />
    </div>
  );
};

export default MoroccanPattern;
