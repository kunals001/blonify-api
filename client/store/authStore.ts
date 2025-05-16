import {create} from "zustand";
import axios from "axios";


const API_URL = process.env.NEXT_PUBLIC_API_KEY;
const API_URL_2 = process.env.NEXT_PUBLIC_API_KEY_2;

axios.defaults.withCredentials = true;

type User = {
    profilePic: string | Blob | undefined;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean
};

type AuthState = {
    user: User | null;
    isAuthenticated: boolean;
    error: string | null;
    isLoading: boolean;
    isCheckingAuth: boolean;
    signup: (data: { name: string; email: string; password: string }) => Promise<void>;
    verifyEmail: (data:{code:string}) => Promise<any>;
    googleSignup: (data:{name:string,email:string,profilePicture:string}) => Promise<any>;
    signin: (data: { email: string; password: string }) => Promise<void>;
    googleSignin: (data:{email:string}) => Promise<any>;
    forgotPassword: (data:{email:string}) => Promise<any>;
    resetPassword: (data:{token:string,password:string}) => Promise<any>;
    logout: () => void;
    checkAuth: () => Promise<void>;
    updateProfile: (data:{name:string,password:string}) => Promise<any>;
    profilePicUpload: (data:{profilePic:string | Blob }) => Promise<any>;
    
  };

export const useAuthStore = create<AuthState>((set) =>({
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,

  signup: async ({ name, email, password }) => {
    set({ isLoading: true, error: null, isAuthenticated: false });

    try {
      const response = await axios.post(`${API_URL}/signup`, {
        name,
        email,
        password,
      });

      set({
        user: response.data.user,
        isAuthenticated: false,
        isLoading: false,
      });
    } catch (error: any) {
        const msg =
          error?.response?.data?.message || "Signup failed"; 
      
        set({ error: msg, isLoading: false });
        throw new Error(msg);
      }
  },
  verifyEmail: async({code})=>{
    set({isLoading:true,error:null,isAuthenticated:false})
    try {
        const response = await axios.post(`${API_URL}/verify-email`,{
            code
        })
        set({user:response.data.user, isAuthenticated:true, isLoading:false})
        return response.data
    } catch (error: any) {
      const msg =
        error?.response?.data?.message || "verifyEmail failed"; 
      set({ error: msg, isLoading: false });
      throw new Error(msg); // throw so that frontend can catch
    }
  },
  googleSignup: async ({name,email,profilePicture }) => {
    set({ isLoading: true, error: null ,isAuthenticated: false});
    try {
      const response = await axios.post(`${API_URL}/google-signup`, {
        name,
        email,
        profilePicture
      });
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error: any) {
      const msg =
        error?.response?.data?.message || "Signup failed"; 
      set({ error: msg, isLoading: false });
      throw new Error(msg); 
    }
  },
  signin: async ({ email, password }) => {
    set({ isLoading: true, error: null, isAuthenticated: false });
    try {
      const response = await axios.post(`${API_URL}/signin`, {
        email,
        password,
      });
      
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
      
    } catch (error: any) {
      const msg =
        error?.response?.data?.message || "Signup failed"; 
      set({ error: msg, isLoading: false, isCheckingAuth: false });
      throw new Error(msg); 
    }

   },
   logout: async () => {
		set({ isLoading: true, error: null });
		try {
			await axios.post(`${API_URL}/logout`);
			set({ user: null, isAuthenticated: false, error: null, isLoading: false });
		} catch (error) {
			set({ error: "Error logging out", isLoading: false });
			throw error;
		}
	},
  googleSignin: async ({email}) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/google-signin`, {
        email,
      });
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error: any) {
      const msg =
        error?.response?.data?.message || "Signup failed"; 
      set({ error: msg, isLoading: false });
      throw new Error(msg); // throw so that frontend can catch
    }
    },
	forgotPassword: async ({email}) => {
		set({ isLoading: true, error: null });
		try {
			const response = await axios.post(`${API_URL}/forgot-password`, { email });
			set({ user: response.data.user, isLoading: false });
		} catch (error:any) {
			 const msg =
        error?.response?.data?.message || "Signup failed"; 
      set({ error: msg, isLoading: false });
      throw new Error(msg); // throw so that frontend can catch
		}
	},
  resetPassword: async ({token, password}) => {
		set({ isLoading: true, error: null, isAuthenticated: false });
		try {
			const response = await axios.post(`${API_URL}/reset-password/${token}`, { password });
			set({ user: response.data.user, isLoading: false });
		} catch (error:any) {
			const msg =
        error?.response?.data?.message || "Signup failed"; 
      set({ error: msg, isLoading: false });
      throw new Error(msg); // throw so that frontend can catch
		}
	},
  checkAuth: async () => {
    set({ isCheckingAuth: true ,error: null, isAuthenticated: false});
    try {
      const response = await axios.get(`${API_URL}/check-auth`);
      set({ user: response.data.user, isAuthenticated: true, isCheckingAuth: false });
    } catch (error:any) {
      const msg =
        error?.response?.data?.message || "Signup failed"; 
      set({ error: msg, isLoading: false, isCheckingAuth: false });
    }
  },
  updateProfile: async ({name,password}) => {
  set({ isLoading: true, error: null });
  try {
    const response = await axios.put(`${API_URL_2}/update-profile`, 
      {
        name,
        password
      }
    );
    set({
      user: response.data.user,
      isAuthenticated: true,
      isLoading: false,
    });
  } catch (error: any) {
    const msg =
        error?.response?.data?.message || "Signup failed"; 
      set({ error: msg, isLoading: false, isCheckingAuth: false });
  }
  },

  profilePicUpload:async({profilePic}) => {
    set({ isLoading: true, error: null });
  try {
    const response = await axios.put(`${API_URL_2}/update-profile-pic`, {
      profilePic,
    });

    set({
      user: response.data.data,
      isAuthenticated: true,
      isLoading: false,
    });

    return response.data.message;
  } catch (error: any) {
    const msg =
        error?.response?.data?.message || "Signup failed"; 
      set({ error: msg, isLoading: false, isCheckingAuth: false });
  }
  }

  
})) 


