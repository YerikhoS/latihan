interface RowProps {
  label: string;
  value: string | number;
  className?: string;
}

export default function Row(props: Partial<RowProps>) {
  const { label, value, className } = props;
  return (
    <>
      <p className={`purchase-details ${className}`}>
        {label}
        <span className="purchase-details">{value}</span>
      </p>
    </>
  );
}
