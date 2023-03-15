import CategoryMenu from '@/components/CategoryMenu';
import SeriesMenu from '@/components/SeriesMenu';
import { Suspense, ReactNode } from 'react';
import LoadingSkeleton from '@/components/LoadingSkeleton';

/**
 * シリーズページ共通レイアウト
 */
export default async function CategoryLayout({
  children,
  params: { seriesId },
}: {
  children: ReactNode;
  params: {
    seriesId: string;
  };
}) {
  return (
    <>
      <Suspense fallback={<LoadingSkeleton />}>
        {/* @ts-expect-error Server Component */}
        <CategoryMenu />
      </Suspense>
      <Suspense fallback={<LoadingSkeleton />}>
        {/* @ts-expect-error Server Component */}
        <SeriesMenu currentSeriesId={seriesId} />
      </Suspense>
      {children}
    </>
  );
}
