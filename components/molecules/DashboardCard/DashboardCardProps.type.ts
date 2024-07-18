import { LucideIcon } from 'lucide-react';

/**
 * @typedef DashboardCardProps
 *
 * @property {string} title - Card title
 * @property {number} count - Item count
 * @property {React.ReactElement<LucideIcon>} icon - Card icon
 */
export interface DashboardCardProps {
  title: string;
  count: number;
  icon: React.ReactElement<LucideIcon>;
}
