import type { StatusBadgeProps } from '../../types';

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'Live':
        return 'bg-green-500/80 text-white';
      case 'Research Complete':
        return 'bg-purple-500/80 text-white';
      case 'Demo Available':
        return 'bg-blue-500/80 text-white';
      default:
        return 'bg-gray-500/80 text-white';
    }
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-bold backdrop-blur-sm border border-white/30 ${getStatusStyles()}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
