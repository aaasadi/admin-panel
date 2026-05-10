"use client";

import { Settings } from "lucide-react";

import { Button } from "~/components/ui/button";
import { Label } from "~/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "~/components/ui/popover";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "~/components/ui/select";
import { ToggleGroup, ToggleGroupItem } from "~/components/ui/toggle-group";

export function LayoutControls() {
    const themes = [
        { label: "Default", value: "default", primary: { light: "#000000", dark: "#ffffff" } }
    ]
    let resolvedThemeMode: "system" | "light" | "dark" | undefined = undefined;

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button size="icon">
                    <Settings />
                </Button>
            </PopoverTrigger>
            <PopoverContent align="end">
                <div className="flex flex-col gap-5">
                    <div className="space-y-1.5">
                        <h4 className="font-medium text-sm leading-none">Preferences</h4>
                        <p className="text-muted-foreground text-xs">Customize your dashboard layout preferences.</p>
                    </div>
                    <div className="space-y-3 **:data-[slot=toggle-group]:w-full **:data-[slot=toggle-group-item]:flex-1 **:data-[slot=toggle-group-item]:text-xs">
                        <div className="space-y-1">
                            <Label className="font-medium text-xs">Theme Preset</Label>
                            <Select value="default" onValueChange={() => { }}>
                                <SelectTrigger size="sm" className="w-full text-xs">
                                    <SelectValue placeholder="Preset" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        {themes.map((preset) => (
                                            <SelectItem key={preset.value} className="text-xs" value={preset.value}>
                                                <span
                                                    className="size-2.5 rounded-full"
                                                    style={{
                                                        backgroundColor:
                                                            (resolvedThemeMode ?? "light") === "dark" ? preset.primary.dark : preset.primary.light,
                                                    }}
                                                />
                                                {preset.label}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-1">
                            <Label className="font-medium text-xs">Theme Mode</Label>
                            <ToggleGroup
                                size="sm"
                                variant="outline"
                                type="single"
                                value={"themeMode"}
                                onValueChange={() => { }}
                            >
                                <ToggleGroupItem value="light" aria-label="Toggle light">
                                    Light
                                </ToggleGroupItem>
                                <ToggleGroupItem value="dark" aria-label="Toggle dark">
                                    Dark
                                </ToggleGroupItem>
                                <ToggleGroupItem value="system" aria-label="Toggle system">
                                    System
                                </ToggleGroupItem>
                            </ToggleGroup>
                        </div>

                        <div className="space-y-1">
                            <Label className="font-medium text-xs">Page Layout</Label>
                            <ToggleGroup
                                size="sm"
                                variant="outline"
                                type="single"
                                value={"contentLayout"}
                                onValueChange={() => { }}
                            >
                                <ToggleGroupItem value="centered" aria-label="Toggle centered">
                                    Centered
                                </ToggleGroupItem>
                                <ToggleGroupItem value="full-width" aria-label="Toggle full-width">
                                    Full Width
                                </ToggleGroupItem>
                            </ToggleGroup>
                        </div>

                        <div className="space-y-1">
                            <Label className="font-medium text-xs">Navbar Behavior</Label>
                            <ToggleGroup
                                size="sm"
                                variant="outline"
                                type="single"
                                value={"navbarStyle"}
                                onValueChange={() => { }}
                            >
                                <ToggleGroupItem value="sticky" aria-label="Toggle sticky">
                                    Sticky
                                </ToggleGroupItem>
                                <ToggleGroupItem value="scroll" aria-label="Toggle scroll">
                                    Scroll
                                </ToggleGroupItem>
                            </ToggleGroup>
                        </div>

                        <div className="space-y-1">
                            <Label className="font-medium text-xs">Sidebar Style</Label>
                            <ToggleGroup
                                size="sm"
                                variant="outline"
                                type="single"
                                value={"variant"}
                                onValueChange={() => { }}
                            >
                                <ToggleGroupItem value="inset" aria-label="Toggle inset">
                                    Inset
                                </ToggleGroupItem>
                                <ToggleGroupItem value="sidebar" aria-label="Toggle sidebar">
                                    Sidebar
                                </ToggleGroupItem>
                                <ToggleGroupItem value="floating" aria-label="Toggle floating">
                                    Floating
                                </ToggleGroupItem>
                            </ToggleGroup>
                        </div>

                        <div className="space-y-1">
                            <Label className="font-medium text-xs">Sidebar Collapse Mode</Label>
                            <ToggleGroup
                                size="sm"
                                variant="outline"
                                type="single"
                                value={"collapsible"}
                                onValueChange={() => { }}
                            >
                                <ToggleGroupItem value="icon" aria-label="Toggle icon">
                                    Icon
                                </ToggleGroupItem>
                                <ToggleGroupItem value="offcanvas" aria-label="Toggle offcanvas">
                                    OffCanvas
                                </ToggleGroupItem>
                            </ToggleGroup>
                        </div>

                        <Button type="button" size="sm" variant="outline" className="w-full text-xs" onClick={() => { }}>
                            Restore Defaults
                        </Button>
                    </div>
                </div>
            </PopoverContent>
        </Popover>
    );
}
