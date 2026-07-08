import { es } from './es';
import { en } from './en';
import type { Lang } from '@/lib/i18n';
import type { SiteCopy } from './types';

export const copy: Record<Lang, SiteCopy> = { es, en };
