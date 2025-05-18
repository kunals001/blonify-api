import React, { useEffect, useState } from 'react';
import ProtectedAdminRoute from '../AdminProtect';
import { usePostStore } from '@/store/postStore';
import { useAuthStore } from '@/store/authStore';
import axios from 'axios';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from 'next/link';


const DashPosts = () => {
  const { getPosts, posts } = usePostStore();
  const { user } = useAuthStore();
  const [showMore,serShowMore] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        await getPosts();
        if(posts.length < 10){
          serShowMore(false)
        }
      } catch (error) {
        console.log("❌ Error fetching posts:", error);
      }
    };

    if (user?.isAdmin) {
      fetchPosts();
    }
  }, [user?._id]);

  const handleShowMore = async () => {
    try {

    } catch (error) {
      console.log("❌ Error fetching posts:", error);
    }
  };


  return (
    <ProtectedAdminRoute>
      {user?.isAdmin && posts.length > 0 ? (
        < >
          <Table className='w-full'>
            <TableCaption>A list of your posts</TableCaption>
              <TableHeader >
                <TableRow className='text-[2.5vh] cursor-pointer'>
                  <TableHead className="w-[100px]">Date</TableHead>
                  <TableHead>Image</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead >Category</TableHead>
                  <TableHead className="text-right">Delete</TableHead>
                  <TableHead className="text-right">Edit</TableHead>
                </TableRow>
              </TableHeader>
            <TableBody className='text-[2vh] cursor-pointer'>
            {posts.map((post) => (
              
                <TableRow key={post._id} className='hover:bg-green-200'>
                  <TableCell className="font-medium text-gray-600 hover:underline">{post.updatedAt ? new Date(post.updatedAt).toLocaleDateString() : "N/A"}</TableCell>


                  <TableCell>
                    <Link href={`/article/${post.slug}`}><img src={post?.coverImg as string} alt={post?.altText as string} className='w25 h-15 rounded-md object-cover bg-gray-500'/></Link>

                  </TableCell>
                  <TableCell className="font-medium hover:underline hover:text-gray-700 text-prime"><Link href={`/article/${post.slug}`}>{post.title}</Link></TableCell>

                  <TableCell className="font-medium hover:underline hover:text-gray-700">{post.category}</TableCell>

                  <TableCell className="text-right">
                    <button className='text-white bg-red-500 px-[1vh] rounded-md py-[.3vw] cursor-pointer'>Delete</button>
                  </TableCell>

                  <TableCell className="text-right">
                    <button className='text-white bg-prime px-[1vh] rounded-md py-[.3vw] cursor-pointer'><Link href={`/edit/${post._id}`}>Edit</Link></button>
                  </TableCell>

                </TableRow>
              
            ))}
            </TableBody>
         </Table>
        </>
      ) : (
        <p className='text-[2vh] md:text-[1.5vw] lg:text-[1.5vw] select-none mx-auto font-semibold text-zinc-800 '>No posts found</p>
      )}

      {showMore && (
        <div className="flex justify-center mt-[1vh] md:mt-[.5vw] lg:mt-[.5vw]">
          <button className='text-white bg-prime px-[1vh] rounded-md py-[.3vw] cursor-pointer'>Load more</button>
        </div>
      )}
    </ProtectedAdminRoute>
  );
};

export default DashPosts;
