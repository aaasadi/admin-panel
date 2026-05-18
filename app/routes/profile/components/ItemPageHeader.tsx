interface HeaderProps {
   data :{
     title: string;
    description: string;
   }
}

export function Header({ props }: {props :HeaderProps}) {

    return(
        <div >
            <div>
            <h1 className="text-2xl font-bold tracking-tight">{props.data.title}</h1>
            <p className="text-muted-foreground">{props.data.description}</p>
            </div>
            <div data-orientation="horizontal" role="none" data-slot="separator" className="shrink-0 bg-border data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px my-4 lg:my-6"></div>

        </div>
    );
}