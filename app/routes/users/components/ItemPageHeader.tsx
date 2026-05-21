import React from "react";
 import type { ReactNode } from "react";
 type HeaderProps = {
   title: string;
   description: string;
   action?: ReactNode;
 };
 
 export function Header({ props }: {props :HeaderProps}) {
 
     return(
         <div >
             <div>
             <h1 className="text-2xl font-bold tracking-tight">{props.title}</h1>
             <p className="text-muted-foreground">{props.description}</p>
             </div>
         {props.action && <div className="m-5 ">{props.action}</div>}
         <div data-orientation="horizontal" role="none" data-slot="separator" className="shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px my-4 lg:my-6"></div>
         </div>
     );
 }

/**
 * 
 import React from "react";
 import type { ReactNode } from "react";
 type HeaderProps = {
   title: string;
   description: string;
   action?: ReactNode;
 };
 
 export function Header({ props }: {props :HeaderProps}) {
 
     return(
         <div >
             <div>
             <h1 className="text-2xl font-bold tracking-tight">{props.title}</h1>
             <p className="text-muted-foreground">{props.description}</p>
             </div>
         {props.action && <div className="m-5 ">{props.action}</div>}
         <div data-orientation="horizontal" role="none" data-slot="separator" className="shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px my-4 lg:my-6"></div>
         </div>
     );
 }
 */