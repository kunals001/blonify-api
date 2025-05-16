"use client";

import axios from "axios";

import {
    ImageKitAbortError,
    ImageKitInvalidRequestError,
    ImageKitServerError,
    ImageKitUploadNetworkError,
    upload,
} from "@imagekit/next";
import { useRef, useState } from "react";

const Upload = () => {
    const [progress, setProgress] = useState(0);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const abortController = new AbortController();

const authenticator = async (): Promise<{
  signature: string;
  expire: number;
  token: string;
  publicKey: string;
}> => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_KEY_3}/upload-auth`);
  const data = res.data;

  const { signature, expire, token, publicKey } = data;

  if (!signature || !token || !publicKey || !expire) {
    throw new Error("Invalid upload auth response");
  }

  return {
    signature,
    expire: Number(expire),
    token,
    publicKey,
  };
};

const handleUpload = async () => {
        const fileInput = fileInputRef.current;

        if (!fileInput || !fileInput.files || fileInput.files.length === 0) {
            alert("Please select a file to upload");
            return;
        }

        const file = fileInput.files[0];

        try {
            const { signature, expire, token, publicKey } = await authenticator();

            const uploadResponse = await upload({
                file,
                fileName: file.name,
                expire,
                token,
                signature,
                publicKey,
                onProgress: (event) => {
                    setProgress((event.loaded / event.total) * 100);
                },
                abortSignal: abortController.signal,
            });

            console.log("Upload response:", uploadResponse);
        } catch (error) {
            if (error instanceof ImageKitAbortError) {
                console.error("Upload aborted:", error.reason);
            } else if (error instanceof ImageKitInvalidRequestError) {
                console.error("Invalid request:", error.message);
            } else if (error instanceof ImageKitUploadNetworkError) {
                console.error("Network error:", error.message);
            } else if (error instanceof ImageKitServerError) {
                console.error("Server error:", error.message);
            } else {
                console.error("Upload error:", error);
            }
        }
    };

    return (
        <>
            <input type="file" ref={fileInputRef} />
            <button
                type="button"
                onClick={handleUpload}
                className="bg-prime hover:bg-green-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            >
                Upload file
            </button>
            <br />
            <progress value={progress} max={100} />
        </>
    );
};

export default Upload;
