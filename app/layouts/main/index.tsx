import { Outlet } from "react-router";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";
import { cn } from "~/lib/utils";
import { AppSidebar } from "~/layouts/main/components/app-sidebar";
import { Separator } from "~/components/ui/separator";
import { SearchDialog } from "~/layouts/main/components/search-dialog";
import { users } from "~/data/users";
import { AccountSwitcher } from "~/layouts/main/components/account-switcher";
import { LayoutControls } from "~/layouts/main/components/layout-controls";
import { ThemeSwitcher } from "~/layouts/main/components/theme-switcher";

function MainLayout() {
    return (
        <SidebarProvider
            defaultOpen={true}
            style={
                {
                    "--sidebar-width": "calc(var(--spacing) * 68)",
                } as React.CSSProperties
            }
        >
            <AppSidebar />
            <SidebarInset
                className={cn(
                    "[html[data-content-layout=centered]_&>*]:mx-auto",
                    "[html[data-content-layout=centered]_&>*]:w-full",
                    "[html[data-content-layout=centered]_&>*]:max-w-screen-2xl",
                    "peer-data-[variant=inset]:border",
                )}
            >
                <header
                    className={cn(
                        "flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12",
                        // Handle sticky navbar style with conditional classes so blur, background, z-index, and rounded corners remain consistent across all SidebarVariant layouts.
                        "[html[data-navbar-style=sticky]_&]:sticky [html[data-navbar-style=sticky]_&]:top-0 [html[data-navbar-style=sticky]_&]:z-50 [html[data-navbar-style=sticky]_&]:overflow-hidden [html[data-navbar-style=sticky]_&]:rounded-t-[inherit] [html[data-navbar-style=sticky]_&]:bg-background/50 [html[data-navbar-style=sticky]_&]:backdrop-blur-md",
                    )}
                >
                    <div className="flex w-full items-center justify-between px-4 lg:px-6">
                        <div className="flex items-center gap-1 lg:gap-2">
                            <SidebarTrigger className="-ml-1" />
                            <Separator
                                orientation="vertical"
                                className="mx-2 data-[orientation=vertical]:h-4 data-[orientation=vertical]:self-center"
                            />
                            <SearchDialog />
                        </div>
                        <div className="flex items-center gap-2">
                            <LayoutControls /> 
                            <ThemeSwitcher />
                            <AccountSwitcher users={users} />
                        </div>
                    </div>
                </header>
                <div className="h-full p-4 md:p-6">
                    <Outlet />
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}

export default MainLayout;