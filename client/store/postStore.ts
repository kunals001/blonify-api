
import { create } from "zustand";
import axios from "axios";
import { useAuthStore } from "./authStore";

const API_URL_3 = process.env.NEXT_PUBLIC_API_KEY_3;

axios.defaults.withCredentials = true;

type Post = {
  coverImg: string | File | null;
  title: string;
  slug: string | null;
  desc: string | null;
  content: string;
  category: string | null;
  isFeatured: boolean | null;
  altText: string | null;
  _id: string;
  createdAt?: string | number | null;
  updatedAt?: string | number | null;
  userId: string;
  startIndex: any;
};

type PostState = {
   post: Post | null;
   posts: Post[];
   isLoading: boolean;
   error: string | null;
   totalPosts: number | null;
   lastMonthPosts: number | null;
   startIndex: number;
  createPost: (data: {
    title: string;
    desc: string;
    content: string;
    category: string;
    coverImg: string | File | null | undefined;
    altText: string | null;
  }) => Promise<void>;
  getPosts: () => Promise<void>;
};

export const usePostStore = create<PostState>((set) => ({
   post: null,
   posts: [],
   isLoading: false,
   error: null,
   totalPosts: 0,
   lastMonthPosts: 0,
   startIndex: 0,

  createPost: async ({ title, desc, content, category,coverImg ,altText}) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.post(`${API_URL_3}/create`, {
        title,
        desc,
        content,
        category,
        coverImg,
        altText,
        
      });

      set({ post: response.data, isLoading: false });
    } catch (error: any) {
      const msg = error?.response?.data?.message || "Post creation failed";
      set({ error: msg, isLoading: false });
      throw new Error(msg);
    }
  },

  getPosts: async () => {
    const { user } = useAuthStore.getState(); // ✅ use this syntax outside components

    if (!user?._id) {
      set({ error: "User not found" });
      return;
    }

    set({ isLoading: true, error: null });

    try {
      const response = await axios.get(`${API_URL_3}/get-post?userId=${user._id}`);
      const { posts, totalPosts, lastMonthPosts } = response.data;

      set({
        posts,
        totalPosts,
        lastMonthPosts,
        isLoading: false,
      });
    } catch (error: any) {
      const msg = error?.response?.data?.message || "Post fetch failed";
      set({ error: msg, isLoading: false });
      throw new Error(msg);
    }
  },
}));
