import ImageUrlBuilder from "@sanity/image-url";
import {
   // createImageUrlBuilder,
    //createCurrentUserHook,
    createClient
} from "next-sanity"; //191.9K (gzipped: 52.6K)


export const config = {
    /*

    */
   dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
   projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
   apiVersion: "2021-03-25",
   useCdn: process.env.NODE_ENV === "production",
};
export const sanityClient = createClient(config);

export const urlFor = (source) => ImageUrlBuilder(config).image(source);

//export const useCurrentUser = createCurrentUserHook(config);
