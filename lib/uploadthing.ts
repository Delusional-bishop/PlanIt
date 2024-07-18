import { OurFileRouter } from "@/app/api/uploadthing/core";
import {
    generateUploadButton,
    generateUploadDropzone,
  } from "@uploadthing/react";

import {generateReactHelpers} from "@uploadthing/react/hooks";
   
    
  export const {useUploadThing,uploadFiles}=generateReactHelpers<OurFileRouter>();    