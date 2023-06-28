'use client';
import { getCrawlData } from '@/fetch-api';
import { useQuery } from '@tanstack/react-query';

type Props = {};

function CrawlList({}: Props) {
  const { data } = useQuery({ queryKey: ['crawl'], queryFn: getCrawlData });

  return (
    <ul>
      {data?.map((d: any, i: number) => (
        <li className='border rounded p-1 mt-2' key={i}>
          {d}
        </li>
      ))}
    </ul>
  );
}

export default CrawlList;
