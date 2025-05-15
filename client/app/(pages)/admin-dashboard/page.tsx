'use client';

import React, { useEffect, useState } from 'react';
import ProtectedAdminRoute from '@/components/AdminProtect';
import DashSidebar from '@/components/DashSidebar';
import DashPosts from '@/components/DashPosts';
import { useSearchParams } from 'next/navigation';

const Page = () => {
  const searchParams = useSearchParams();
  const [tab, setTab] = useState('');

  useEffect(() => {
    const tabFromUrl = searchParams.get('tab');
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [searchParams]);

  return (
    <ProtectedAdminRoute>
      <div className='min-h-screen md:flex lg:flex flex-col hidden w-full'>
        <div className=''>
          {/* Sidebar */}
          <DashSidebar />
        </div>

        <div className="md:w-[calc(100%-12vw)] lg:w-[calc(100%-13vw)] md:pl-[14vw] lg:pl-[14vw] md:py-[1vw] lg:py-[1vw]">
          {tab === 'posts' && <DashPosts />}
        </div>
      </div>
    </ProtectedAdminRoute>
  );
};

export default Page;
