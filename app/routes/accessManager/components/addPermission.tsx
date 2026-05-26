import { useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "~/components/ui/card";
import { X } from "lucide-react";
import { useNavigate } from "react-router";
import { Label } from "~/components/ui/label";
import { Input } from "~/components/ui/input";
import { Checkbox } from "~/components/ui/checkbox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import {permissions } from "~/data/users";


export default function AddRole() {
  const navigate = useNavigate();
  const [roleName, setRoleName] = useState("");
  const [description, setDescription] = useState("");
  const [selectedPermissions, setSelectedPermissions] = useState<string[]>([]);

  const handlePermissionChange = (permission: string, checked: boolean) => {
    if (checked) {
      setSelectedPermissions((prev) => [...prev, permission]);
    } else {
      setSelectedPermissions((prev) => prev.filter((p) => p !== permission));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/access/permissionsmanager");
  };

  return (
    <div className="space-y-6 max-w-6xl mx-auto p-4">
      <Card>
        <CardHeader className="flex flex-row justify-between items-start">
          <div>
            <CardTitle>Add permission</CardTitle>
            <CardDescription>Add new permission with access</CardDescription>
          </div>
          <Button variant="ghost" size="icon" onClick={() => navigate("/access/permissionsmanager")}>
            <X className="h-5 w-5" />
          </Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-2">
              <Label htmlFor="roleName">Permission title</Label>
              <Input
                id="roleName"
                placeholder="e.g., Content Manager"
                value={roleName}
                onChange={(e) => setRoleName(e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <Label className="text-base">Select permissions</Label>
              <Accordion type="multiple" className="w-full">
                {permissions.map((group, index) => (
                  <AccordionItem key={group.title} value={`item-${index}`}>
                    <AccordionTrigger className="hover:no-underline">
                      {group.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-2 pl-2 pt-2">
                        {group.accesses.map((perm) => (
                          <div key={perm} className="flex items-center space-x-2">
                            <Checkbox
                              id={perm}
                              checked={selectedPermissions.includes(perm)}
                              onCheckedChange={(checked) =>
                                handlePermissionChange(perm, checked === true)
                              }
                            />
                            <Label
                              htmlFor={perm}
                              className="text-sm font-normal cursor-pointer"
                            >
                              {perm}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="flex justify-end gap-3 pt-4">
              <Button type="button" variant="outline" onClick={() => navigate("/access/permissionsmanager")}>
                Cancel
              </Button>
              <Button type="submit">Create role</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}