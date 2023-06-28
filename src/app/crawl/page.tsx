import { getCrawlData } from '@/fetch-api';
import getQueryClient from '@/utils/getQueryClient';
import Hydrate from '@/utils/hydrate.client';
import { dehydrate } from '@tanstack/react-query';
import CrawlList from './crawl-list';
async function About() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(['crawl'], getCrawlData);
  const dehydratedState = dehydrate(queryClient);

  return (
    <Hydrate state={dehydratedState}>
      <div className='flex flex-col items-center gap-10 m-4'>
        <h1 className='font-20 text-2xl'>크롤링 데이타</h1>
        <CrawlList />
      </div>
    </Hydrate>
  );
}

export default About;
