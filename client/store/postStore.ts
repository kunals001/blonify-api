import { create } from "zustand";
import axios from "axios";

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
};

type PostState = {
  post: Post | null;
  isLoading: boolean;
  error: string | null;
  createPost: (data: {
    title: string;
    desc: string;
    content: string;
    category: string;
    coverImg: string | File | null | undefined;
    altText: string | null;
  }) => Promise<void>;
};

export const usePostStore = create<PostState>((set) => ({
  post: null,
  isLoading: false,
  error: null,

  createPost: async ({ title, desc, content, category,coverImg ,altText }) => {
    set({ isLoading: true, error: null });

    try {
      const response = await axios.post(`${API_URL_3}/create`, {
        title,
        desc,
        content,
        category,
        coverImg,
        altText
      });

      set({ post: response.data, isLoading: false });
    } catch (error: any) {
      const msg = error?.response?.data?.message || "Post creation failed";
      set({ error: msg, isLoading: false });
      throw new Error(msg);
    }
  },
}));
