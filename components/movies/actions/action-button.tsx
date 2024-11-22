interface ActionButtonProps {
  onClick?: () => void;
  label: string;
  children: React.ReactNode;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  label,
  children,
}) => {
  return (
    <button className="flex w-full flex-col items-center" onClick={onClick}>
      {children}
      <p>{label}</p>
    </button>
  );
};

export default ActionButton;
