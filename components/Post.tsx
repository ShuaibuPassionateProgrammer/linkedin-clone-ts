"use client";

import { Trash2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { IPostDocument } from "@/mongodb/models/post";
import PostOptions from "./PostOptions";
import Image from "next/image";
import deletePostAction from "@/actions/deletePostAction";
import { useUser } from "@clerk/nextjs";
import { Button } from "./ui/button";
import ReactTimeago from "react-timeago";
import { Badge } from "./ui/badge";
import { toast } from "sonner";

const Post = () => {
  return (
    <></>
  );
};



export default Post;