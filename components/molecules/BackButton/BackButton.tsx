import { ArrowLeftCircle } from 'lucide-react';
import Link from 'next/link';
import type { BackButtonProps } from './BackButtonProps';

/**
 * @typedef BackButton
 *
 * It renders a back button with the given text and link.
 *
 */
export default function BackButton({ text, link }: BackButtonProps) {
  return (
    <Link
      href={link}
      className='text-gray-500 hover:underline flex items-center gap-1 font-bold mb-5'
    >
      <ArrowLeftCircle size={18} />
      {text}
    </Link>
  );
}
