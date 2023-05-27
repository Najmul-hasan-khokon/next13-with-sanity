"use client";

import { NextStudio } from "next-sanity/studio";
// import config from "../../../../sanity.config";
import config from "@/../../sanity.config"; // @ start from app folder

// if i go to admin page, it will take me to sanity studio
export default function AdminPage() {
   return <NextStudio config={config} />;
}
