import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const author = defineType({
    name:"author",
    title:"Author",
    type:"document",
    icon:UserIcon,
    fields:[
        defineField({
            name:"id",
            type:"number",
        }),
        defineField({
            name:"name",
            type:"string",
        }),
        defineField({
            name:"username",
            type:"string",
        }),
        defineField({
            name:"email",
            type:"string",
        }),
        defineField({
            name:"image",
            type:"url",
        }),
        defineField({
            name:"bio",
            type:"text",
        }),
    ],
        // Preview is what is shown when an author is selected in the Sanity Studio.
    // In this case, we're selecting the title field of the author.
    preview:{
        select:{
            title:"name"
        }
    }
})