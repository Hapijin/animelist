import Link from "next/link"

export default function Header({title, linkHref, linkTitle}){
    return (
        
    <div className="flex justify-between p-4 items-center text-color-primary">
        <h1 className=" text-2xl font-bold">{title}</h1>
        { !linkHref && !linkTitle ? null : 
        <Link className="md:text-xl text-sm underline hover:text-color-accent transition-all" 
        href={linkHref}>{linkTitle}</Link>
        }
     </div>
    )
}